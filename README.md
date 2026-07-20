# @kmamal/interval

[![Package](https://img.shields.io/npm/v/%2540kmamal%252Finterval)](https://www.npmjs.com/package/@kmamal/interval)
[![Dependencies](https://img.shields.io/librariesio/release/npm/@kmamal/interval)](https://libraries.io/npm/@kmamal%2Finterval)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interval is represented as a `[ start, end ]` pair. Intervals are **closed**, meaning both endpoints are included: `[ start, end ]` covers every value `x` where `start <= x <= end`.

If you need an open (or half-open) interval, use `from()`. It nudges each open endpoint by the smallest representable amount so the boundary value itself is excluded:

```js
const { from } = require('@kmamal/interval')

from(1, 2)                                     // [ 1, 2 ] closed
from(1, 2, { openStart: true })                // ( 1, 2 ] start excluded
from(1, 2, { openEnd: true })                  // [ 1, 2 ) end excluded
from(1, 2, { openStart: true, openEnd: true }) // ( 1, 2 ) both excluded
```
