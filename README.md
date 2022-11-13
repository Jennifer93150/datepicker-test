# React Date Picker

![Alt text](../../Capture%20d%E2%80%99e%CC%81cran%202022-11-10%20a%CC%80%2023.44.05.png)

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm i my-datepicker-test
```

## Configuration

### OnChange

You can use `onChange` event handler which fires each time some calendar date has been selected

```js
function handleDateChange(value) {
  return value;
}

<DatePicker
  onChange={(value)=>{handleDateChange(value)}} //only when value has changed
/>
```

### ClassName

You can also include a className

```js
const class = "my-className";

<DatePicker
  className={class}
  onChange={(value)=>{handleDateChange(value)}}
/>
```

### Id

You can also include an id

```js
const id = "my-id";

<DatePicker
  className={class}
  id={id}
  onChange={handleDateChange}
/>
```

## Compatibility

### React

We're always trying to stay compatible with the latest version of React. We can't support all older versions of React.

Latest compatible version:

- React v16.13.0: my-datepicker-test v0.4.5 and newer



