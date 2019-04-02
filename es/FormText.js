import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  as: 'small'
};
var FormText = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      Component = _ref.as,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "className", "as"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'form-text');
  return React.createElement(Component, _extends({}, props, {
    ref: ref,
    className: classNames(className, bsPrefix)
  }));
});
FormText.displayName = 'FormText';
FormText.defaultProps = defaultProps;
export default FormText;