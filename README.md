# pthash

A small library providing a way to hash things to plain text strings secure password storage.

## Installation

You can install pthash with:
`npm install pthash --save`
Or
`yarn add pthash`

## Usage

```js
const pthash = require('pthash');

const hash = pthash("password");

console.log(hash)
```

## Tests

Just run `npm test`
