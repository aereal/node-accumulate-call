# accumulate-call [![Build Status](https://travis-ci.org/aereal/node-accumulate-call.svg?branch=master)](https://travis-ci.org/aereal/node-accumulate-call)

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
