/**
 * Node attributes
 */
interface AstNodeAttributes {
  [key: string]: any;
}

/**
 * Node events
 */
interface AstNodeEvents {
  [key: string]: string;
}

/**
 * Node
 */
export interface AstNode {
  tag: string;
  attrs: AstNodeAttributes;
  events: AstNodeEvents;
  children: AstNode[];
}

/**
 * Base component
 */
export interface ComponentBase {
  node: AstNode;
}

/**
 * Node attributes config field
 */
export interface AstNodeAttributeConfigField {
  key: string;
  name: string;
  type: string;
  value: string;
}

/**
 * Node atributes config
 */
export interface NodeAttributeConfig {
  name: string;
  values: AstNodeAttributes;
  attrs: AstNodeAttributeConfigField[];
}
