'use strict';

/**
 * 
 * @param {*} values 
 */
var inputIsValid = function inputIsValid(values) {
  // Input should be an array or miss value
  return (Array.isArray(values) || values === undefined || values === null) && typeof values !== 'number' && typeof values !== 'string' && typeof values !== 'function';
};

/**
 * Throw a custom error
 */
var throwError = function throwError() {
  throw new Error('Input was empty. Expected array');
};

var or = function or(values) {
  var returnValueOnEmptyInput = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

  if (!inputIsValid(values)) {
    return throwError();
  } // If the passed input is empty


  if (values === undefined || values === null || values.length === 0) {
    switch (returnValueOnEmptyInput) {
      case false:
        {
          return false;
        }

      case 'false':
        {
          return false;
        }

      case 'throw':
        {
          return throwError();
        }

      default:
        {
          return true;
        }
    }
  }

  return values.filter(function (v) {
    return v === true;
  }).length > 0;
};

module.exports = or;
