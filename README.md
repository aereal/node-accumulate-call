# accumulate-call [![Build Status][travis-badge]][travis-url] [![npm version][npm-version-badge]][npm-url]

Accumulate function calls

## Install

```
npm install accumulate-call
```

## Usage

```
import { accumulateUntil } from 'accumulate-call';

document.body.addEventListener('click', accumulateUntil((events) => {
    console.log(`Clicked ${events.length} times`);
}, 1000));
```

## Author

aereal

## License

MIT License

[travis-url]: https://travis-ci.org/aereal/node-accumulate-call
[travis-badge]: https://travis-ci.org/aereal/node-accumulate-call.svg?branch=master
[npm-url]: https://www.npmjs.com/package/accumulate-call
[npm-version-badge]: https://img.shields.io/npm/v/accumulate-call.svg
