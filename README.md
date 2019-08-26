# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @plonsdale1/lotide`

**Require it:**

`const _ = require('@plonsdale1/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: Takes in an array and returns the first index element
* `tail(...)`: slices off the first index element in an array and returns a new array with the rest of the elements.
* `middle(...)`: takes in an array of numbers and return the middle most numbers
* `eqArrays(...)`: compares two arrays and checks if they are the same with the strict === comparision operator
* `assertEqual(...)`: compares two values with strict equal comparison operator ===