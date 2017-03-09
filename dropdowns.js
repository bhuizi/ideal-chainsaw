/*(c) Copyright 2015 Pivotal Software, Inc. All Rights Reserved.*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownItem = exports.Dropdown = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _puiReactMixins = require('pui-react-mixins');

var _puiReactMixins2 = _interopRequireDefault(_puiReactMixins);

var _scrim_mixin = require('pui-react-mixins/mixins/scrim_mixin');

var _scrim_mixin2 = _interopRequireDefault(_scrim_mixin);

var _transition_mixin = require('pui-react-mixins/mixins/transition_mixin');

var _transition_mixin2 = _interopRequireDefault(_transition_mixin);

var _puiReactIconography = require('pui-react-iconography');

require('pui-css-dropdowns');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = _react2.default.PropTypes;

var defaultToggleNode = function defaultToggleNode(dropCaret) {
  if (dropCaret) return _react2.default.createElement(_puiReactIconography.Icon, { src: 'chevron_down' });
};

var Dropdown = exports.Dropdown = function (_mixin$with) {
  (0, _inherits3.default)(Dropdown, _mixin$with);

  function Dropdown(props, context) {
    (0, _classCallCheck3.default)(this, Dropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Dropdown.__proto__ || (0, _getPrototypeOf2.default)(Dropdown)).call(this, props, context));

    _this.click = function (event) {
      _this.setState({ open: !_this.state.open });
      _this.props.onClick && _this.props.onClick(event);
    };

    _this.scrimClick = function () {
      return _this.setState({ open: false });
    };

    _this.menuClick = function () {
      if (!_this.props.closeOnMenuClick) return;
      _this.setState({ open: false });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  (0, _createClass3.default)(Dropdown, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          buttonClassName = _props.buttonClassName,
          children = _props.children,
          className = _props.className,
          closeOnMenuClick = _props.closeOnMenuClick,
          disableScrim = _props.disableScrim,
          dropCaret = _props.dropCaret,
          flat = _props.flat,
          link = _props.link,
          pullRight = _props.pullRight,
          onClick = _props.onClick,
          onEntered = _props.onEntered,
          onExited = _props.onExited,
          split = _props.split,
          title = _props.title,
          toggle = _props.toggle,
          menuCaret = _props.menuCaret,
          props = (0, _objectWithoutProperties3.default)(_props, ['border', 'buttonClassName', 'children', 'className', 'closeOnMenuClick', 'disableScrim', 'dropCaret', 'flat', 'link', 'pullRight', 'onClick', 'onEntered', 'onExited', 'split', 'title', 'toggle', 'menuCaret']);
      var open = this.state.open;

      var toggleNode = toggle ? toggle : defaultToggleNode(dropCaret);
      var buttonStyleClasses = (0, _classnames2.default)('btn-default', buttonClassName);
      var dropdownLabel = split ? _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('dropdown-label', buttonStyleClasses) },
        title
      ) : null;
      var dropdownToggle = _react2.default.createElement(
        'button',
        { type: 'button', onClick: this.click, className: (0, _classnames2.default)('dropdown-toggle', buttonStyleClasses) },
        !split ? title : null,
        toggleNode
      );

      var dropdownClasses = (0, _classnames2.default)('dropdown', {
        'dropdown-flat': flat, open: open, split: split, 'dropdown-link': link
      }, className);
      var dropdownMenuClasses = (0, _classnames2.default)('dropdown-menu', {
        'dropdown-border': border,
        'dropdown-menu-right': pullRight,
        'dropdown-menu-float': split || flat || menuCaret,
        'dropdown-menu-caret': menuCaret
      });
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: dropdownClasses }, props),
        dropdownLabel,
        dropdownToggle,
        _react2.default.createElement(
          'div',
          { className: dropdownMenuClasses },
          _react2.default.createElement(
            'ul',
            { onClick: this.menuClick },
            children
          )
        )
      );
    }
  }]);
  return Dropdown;
}((0, _puiReactMixins2.default)(_react2.default.Component).with(_scrim_mixin2.default, _transition_mixin2.default));

Dropdown.propTypes = {
  border: types.bool,
  buttonClassName: types.string,
  closeOnMenuClick: types.bool,
  disableScrim: types.bool,
  dropCaret: types.bool,
  flat: types.bool,
  link: types.bool,
  pullRight: types.bool,
  split: types.bool,
  menuCaret: types.bool,
  title: types.node,
  toggle: types.node,
  onClick: types.func,
  onEntered: types.func,
  onExited: types.func
};
Dropdown.defaultProps = {
  closeOnMenuClick: true,
  disableScrim: false,
  dropCaret: true
};

var DropdownItem = exports.DropdownItem = function (_React$Component) {
  (0, _inherits3.default)(DropdownItem, _React$Component);

  function DropdownItem() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, DropdownItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = DropdownItem.__proto__ || (0, _getPrototypeOf2.default)(DropdownItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.handleClick = function (event) {
      var _this2$props = _this2.props,
          href = _this2$props.href,
          disabled = _this2$props.disabled,
          onSelect = _this2$props.onSelect,
          eventKey = _this2$props.eventKey;


      if (!href || disabled) {
        event.preventDefault();
      }

      if (disabled) return;

      if (onSelect) {
        onSelect(event, eventKey);
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(DropdownItem, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          eventKey = _props2.eventKey,
          style = _props2.style,
          href = _props2.href,
          header = _props2.header,
          divider = _props2.divider,
          disabled = _props2.disabled,
          anchorProps = (0, _objectWithoutProperties3.default)(_props2, ['children', 'className', 'eventKey', 'style', 'href', 'header', 'divider', 'disabled']);


      if (header) return _react2.default.createElement(
        'li',
        { role: 'heading', className: 'dropdown-header' },
        children
      );
      if (divider) return _react2.default.createElement('li', { role: 'separator', className: 'divider' });

      var anchor = href ? _react2.default.createElement(
        'a',
        (0, _extends3.default)({}, (0, _extends3.default)({ href: href, disabled: disabled }, anchorProps), { onClick: this.handleClick }),
        children
      ) : children;
      var disabledClass = disabled ? 'disabled' : '';
      var dropdownItemClass = (0, _classnames2.default)(className, disabledClass);

      return _react2.default.createElement(
        'li',
        (0, _extends3.default)({ style: style }, { className: dropdownItemClass, onClick: href ? '' : this.handleClick }),
        anchor
      );
    }
  }]);
  return DropdownItem;
}(_react2.default.Component);

DropdownItem.propTypes = {
  className: types.string,
  style: types.object,
  href: types.string,
  header: types.bool,
  divider: types.bool,
  disabled: types.bool,
  eventKey: types.string,
  onSelect: types.func
};