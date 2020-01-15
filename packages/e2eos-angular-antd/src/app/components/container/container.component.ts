import {
  Component, OnInit, ViewChild, ComponentFactoryResolver,
  ComponentFactory, Input, ViewContainerRef, OnChanges, SimpleChanges
} from '@angular/core';
import * as _ from 'lodash';
import { AstNode, ComponentBase } from 'e2eos-common';

function shouldCreateNewComponent(oldNode: AstNode, newNode: AstNode) {
  if (oldNode == null || newNode == null) {
    return true;
  }
  if (oldNode.tag !== newNode.tag) {
    return true;
  }
  if (!_.isEqual(oldNode.attrs, newNode.attrs)) {
    return true;
  }
  if (oldNode.children.length !== newNode.children.length) {
    return true;
  }

  let flg = false;
  let maxLength = Math.max(oldNode.children.length, newNode.children.length);
  while (maxLength--) {
    if (oldNode.children[maxLength] !== newNode.children[maxLength]) {
      flg = true;
    }
  }

  return flg;
}

@Component({
  selector: 'e2eos-ng-antd-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnChanges {

  @ViewChild('container', { read: ViewContainerRef, static: true }) con: ViewContainerRef;

  @Input() node: AstNode | string = { tag: '', attrs: {}, children: [] };

  constructor(
    private resolver: ComponentFactoryResolver
  ) {

  }

  loadComponent() {debugger
    // tslint:disable-next-line: no-string-literal
    let factories = this.resolver['_factories'];
    factories = [...factories].map(([type, f]) => f);
    const { tag } = this.node as AstNode;
    const factory = factories.find((f: ComponentFactory<ComponentBase>) => tag === f.selector);
    if (!factory) { return; }
    const componentFactory = this.resolver.resolveComponentFactory(factory.componentType);
    this.con.clear();
    const componentRef = this.con.createComponent(componentFactory);
    (componentRef.instance as ComponentBase).node = this.node as AstNode;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { previousValue, currentValue } = changes.node;
    if (shouldCreateNewComponent(previousValue, currentValue)) {
      this.loadComponent();
    }
  }

  isNoNode() {
    return typeof this.node !== 'object';
  }
}
