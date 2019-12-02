
/**
 * 
 * @param {*} values 
 */
const inputIsValid = (values) => {
  // Input should be an array or miss value
  return (Array.isArray(values) || values === undefined || values === null)
    && typeof values !== 'number'
    && typeof values !== 'string'
    && typeof values !== 'function';
};

export default inputIsValid;
