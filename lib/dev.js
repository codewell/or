'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var or = function or(foundFalse) {
  return function () {
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }

    if (values.length === 0) {
      if (foundFalse === true) {
        return false;
      }

      return null;
    }

    var value = values[0];

    if (value === true) {
      return true;
    }

    if (!["boolean", "undefined", "null", "NaN"].includes(_typeof(value))) {
      return value;
    }

    if (value === false) {
      return or(true).apply(void 0, _toConsumableArray(values.slice(1)));
    }

    return or(foundFalse).apply(void 0, _toConsumableArray(values.slice(1)));
  };
};

var index = or(false);

module.exports = index;
