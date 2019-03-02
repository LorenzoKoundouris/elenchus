# elenchus

[![CircleCI](https://circleci.com/gh/LorenzoKoundouris/elenchus/tree/master.svg?style=svg)](https://circleci.com/gh/LorenzoKoundouris/elenchus/tree/master) ![minified size](https://badgen.net/bundlephobia/min/elenchus) ![minified size](https://badgen.net/bundlephobia/minzip/elenchus) [![dependencies Status](https://david-dm.org/LorenzoKoundouris/elenchus/status.svg)](https://david-dm.org/LorenzoKoundouris/elenchus) [![devDependencies Status](https://david-dm.org/LorenzoKoundouris/elenchus/dev-status.svg)](https://david-dm.org/LorenzoKoundouris/elenchus?type=dev) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

> “There is only one good, knowledge, and one evil, ignorance.”

_Named after the Socratic method of hypothesis elimination, where a series of questions formulated as tests of logic and fact intended to help discover general characteristics of particular instances._ [More](https://en.wikipedia.org/wiki/Socratic_method)

---

## Description

A collection of predicate functions to serve as lightweight utils.

## Installation

Using npm:

```shell
$ npm install elenchus
```

Using yarn:

```shell
$ yarn add elenchus
```

## Usage

```javascript
const elenchus = require("elenchus");
elenchus.isNullOrUndefined("I know that I know nothing");
// => false
```

### Individual methods

```javascript
const isNullOrUndefined = require("elenchus").isNullOrUndefined;
isNullOrUndefined("The unexamined life is not worth living");
// => false
```
