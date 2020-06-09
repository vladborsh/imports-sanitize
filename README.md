# Imports-sanitize

### Purposes

Fix non-tree-shakable imports for well known packages

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