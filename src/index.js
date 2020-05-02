const or = (foundFalse) => (...values) => {
  if (values.length === 0) {
    if (foundFalse === true) {
      return false;
    }
    return null;
  }

  const [value] = values;

  if (value === true) {
    return true;
  }

  if (!["boolean", "undefined", "null", "NaN"].includes(typeof value)) {
    return value;
  }

  if (value === false) {
    return or(true)(...values.slice(1));
  }

  return or(foundFalse)(...values.slice(1));
};

export default or(false);
