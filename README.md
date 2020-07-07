# Imports-sanitize

[![Build Status](https://travis-ci.com/vladborsh/imports-sanitize.svg?branch=master)](https://travis-ci.com/vladborsh/imports-sanitize)
[![Coverage Status](https://coveralls.io/repos/github/vladborsh/imports-sanitize/badge.svg?branch=master)](https://coveralls.io/github/vladborsh/imports-sanitize?branch=master)

### Purposes

Fix your imports from lodash in source code to [tree-shakable](https://medium.com/@martin_hotell/tree-shake-lodash-with-webpack-jest-and-typescript-2734fa13b5cd) alternative

Source code before:
```typescript
import * as _ from 'lodash';
import { isEmpty, flatten } from 'lodash';

let i = isEmpty([]);
let x = flatten([]);
let j = _.isArray('');
```

Source code after:
```typescript
import isEmpty from 'lodash/isEmpty';
import flatten from 'lodash/flatten';
import isArray from 'lodash/isArray';

let i = isEmpty([]);
let x = flatten([]);
let j = isArray('');
```

### How to use

Just run single command in your project terminal. `-p` parameter is a your source code folder path

```bash
npx imports-sanitize -p ./src
```

### Supported packages

- ✅ lodash
- ✅ lodash-es