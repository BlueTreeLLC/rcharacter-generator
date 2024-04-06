# RCharacter Generator

A generator that creates random values, including letters, numbers and special characters. You can generate passwords or special codes with this!

## ⚙️ Install

You can install this package using `npm`:

```bash
npm i rcharacter-generator
# Or with Yarn!
yarn add rcharacter-generator
```

## 📕 Usage

### Import to the desired file

```javascript
import generate from 'rcharacter-generator';
```

This function recieves two params: a lenght param as an `int`, and an optional `object` with the different options for the generator:

### Basic usage!

```javascript
generate(10)
// Generates a string of lowercase values
```

### With options

The `options` param can recieve the following values:

- lowercaseLetters
- uppercaseLetters
- numbers
- specialSymbols

```javascript
generate(10, { lowercaseLetters: true, uppercaseLetters: true });
// Generates a string of lowercase and uppercase values
generate(10, { lowercaseLetters: true, uppercaseLetters: true, numbers: true });
// Generates a string of lowercase, uppercase and number values
generate(10, { lowercaseLetters: true, uppercaseLetters: true, numbers: true, specialSymbols: true});
// Generates a string of all possible values: uppercase, lowercase, numbers and special symbols
```

## 🛠️ Issues

If you find any issues, please head over to the [issues](https://github.com/BlueTreeLLC/random-character-generator/issues) and I'll try to see what I can do

## 💬 Discussions

Do you have an idea of how to improve this project? Head over to [discussions](https://github.com/BlueTreeLLC/random-character-generator/discussions) section and share your ideas!
