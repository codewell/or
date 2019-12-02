import inputIsValid from "./inputIsValid";
import throwError from "./throwError";


const or = (values, returnValueOnEmptyInput = 'default') => {

  if (!inputIsValid(values)) {
    return throwError();
  }

  // If the passed input is empty
  if (values === undefined || values === null || values.length === 0) {
    switch (returnValueOnEmptyInput) {
      case false: {
        return false;
      }

      case 'false': {
        return false;
      }

      case 'throw': {
        return throwError();
      }

      default: {
        return true;
      }
    }
  }

  return values.filter(v => v === true).length > 0;

};

export default or;