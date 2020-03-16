/**
 * 根据组件config list生成默认属性
 * @param {CONFIG[]} configs 
 */
export const generateDefaultValuesByConfig = (configs) => {
  return configs.filter(config => config.default != null).reduce((vals, config) => {
    vals[config.key] = vals.default;
    return vals;
  }, {})
}