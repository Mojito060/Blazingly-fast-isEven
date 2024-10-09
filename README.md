# 🔥 Blazingly fast isEven 🔥

A simple, lightweight npm package to determine if a number is even. This package provides a blazingly fast alternative to existing solutions like the `is-even` package by leveraging bitwise operations.

## Installation

You can install the package using npm:

```bash
npm install blazingly-fast-is-even
```
## Usage
To use the checkIfEven function, require the package in your JavaScript code:

```
const { checkIfEven } = require('blazingly-fast-is-even');

console.log(checkIfEven(3));  // false
console.log(checkIfEven(4));  // true
console.log(checkIfEven(-5)); // false
console.log(checkIfEven(-6)); // true
```
## Function Signature


```checkIfEven(number)```

* Parameters
    * ```number```: The number to check (can be an integer).
* Returns
    * ```true``` if the number is even, ```false``` if it is odd.


## Performance

The ```chekIfEven``` function uses a bitwise operation (```number & 1```) to determine if a number is odd. This method is typically faster than using modulus (```number % 2```) because bitwise operations are generally more efficient at the processor level.

## License
GPL-3.0-or-later License. See LICENSE for details.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.