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
  events?: AstNodeEvents;
  children: (AstNode | number | string)[];
}

/**
 * Base component
 */
export interface ComponentBase {
  node: AstNode;
}

export interface AstNodeAttributeConfigFieldOption {
  label: string;
  value: any;
}

/**
 * Node attributes config field
 */
export interface AstNodeAttributeConfigField {
  key: string;
  name: string;
  type: string;
  desc: string;
  options?: AstNodeAttributeConfigFieldOption[];
  clearable?: boolean;
}

/**
 * Node config
 */
export interface NodeConfig {
  name: string;
  values: AstNodeAttributes;
  attrs: AstNodeAttributeConfigField[];
  children: (AstNode | string | number)[];
}
