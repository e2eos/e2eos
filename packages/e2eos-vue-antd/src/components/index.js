import AstNode from './ast-node/ast-node';
import AstDropNode from './ast-drop-node/ast-drop-node';
import AstDragNode from './ast-drag-node/ast-drag-node';

import AstButton from './ast-button/ast-button';
import AstButtonConfig from './ast-button/config';

import AstText from './ast-text/ast-text';
import AstTextConfig from './ast-text/config';

import AstIcon from './ast-icon/ast-icon';
import AstIconConfig from './ast-icon/config';

import AstForm from './ast-form/ast-form';
import AstFormConfig from './ast-form/config';

import AstInput from './ast-input/ast-input';
import AstInputConfig from './ast-input/config';

export const COMPONENT_CONFIG_LIST = [
  AstButtonConfig,
  AstTextConfig,
  AstIconConfig,
  AstFormConfig,
  AstInputConfig
];

export default {
  install(Vue) {
    Vue.component('ast-drag-node', AstDragNode);
    Vue.component('ast-drop-node', AstDropNode);
    Vue.component('ast-node', AstNode);
    
    // wrapper
    Vue.component('ast-button', AstButton);
    Vue.component('ast-text', AstText);
    Vue.component('ast-icon', AstIcon);
    Vue.component('ast-form', AstForm);
    Vue.component('ast-input', AstInput);
  }
}