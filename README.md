# Imports-sanitize

[![Build Status](https://travis-ci.com/vladborsh/imports-sanitize.svg?branch=master)](https://travis-ci.com/vladborsh/imports-sanitize)
[![Coverage Status](https://coveralls.io/repos/github/vladborsh/imports-sanitize/badge.svg?branch=master)](https://coveralls.io/github/vladborsh/imports-sanitize?branch=master)

### Purposes

With current Fix non-tree-shakable imports for well known packages (lodash for ex.)

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

```bash
npx imports-sanitize -p ./src
```

### Supported packages

- ✅ lodash
- ✅ lodash-es
- ⬜ rxjs (WIP)