# @codewell/or

## Installation

```
npm install @codewell/or
```

## Basic Usage

```JavaScript
import or from '@codewell/or';

or(true, false); // => true
or(true, true); // => true
or(false, false); // => false

or(); // => null
or(1); // => 1
or('foo'); // => 'foo'
or(undefined, null 'foo'); // => 'foo'
```

## Contribution

Please help by posting issues, or opening a pull request here on github.
