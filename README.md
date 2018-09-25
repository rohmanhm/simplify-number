# Simplify Number

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/simplify-number.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.com/rohmanhm/simplify-number.svg?branch=master)](https://travis-ci.org/rohmanhm/simplify-number)

> Simplify number

## How to install

- via **npm**:
```bash
npm install --save simplify-number
```
- via **yarn**: 
```bash
yarn add simplify-number
```

## Usage

```typescript
// ES6+ Babel
// Typescript
import SimplifyNumber from 'simplify-number'
// CommonJS
const SimplifyNumber = require('simplify-number').default

console.log(SimplifyNumber(1000)) // it's return 1k
```

## API

```typescript
SimplifyNumber(number, config)
```

* `number`: type `number`. example: `1000`
* `config`: type `object`.
  - `abbrev`: type `array`. default: `['k', 'm', 'b', 't']`
  - `decimal`: type `number`. default: `2`

## LINCESE
[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2018 - MH Rohman Masyhar
