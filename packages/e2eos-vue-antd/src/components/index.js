import AstNode from './ast-node/ast-node';
import AstTextNode from './ast-text-node/ast-text-node';

export default {
  install(Vue) {
    Vue.component('ast-node', AstNode);
    Vue.component('ast-text-node', AstTextNode);
  }
}