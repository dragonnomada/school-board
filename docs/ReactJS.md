# Introduction to React JS

By [Dragon Nomada](dragonnomada.medium.com)

## What is React JS?

A framework develop by Facebook based on modular, visual and functional components.

> Visit [https://reactjs.org](https://reactjs.org)

Look at the next example.

> Example: Clock Component

```jsx
// Clock.js

import React from "react"

export default function Clock({ hours, minutes, seconds }) {
    return <span>{hours}:{minutes}:{seconds}</span>
}
```

> Example: Use the Clock Component into App Component

```jsx
// App.js

import React from "react"

import Clock from "./Clock"

export default function App() {
    return <Clock />
}
```

## JSX

JSX is a integrated HTML/XML like tag system inside Javascript code.

> Example: Some HTML/XML like code into a variable

```jsx
const title = <h1>Hello</h1>

const container = <div>{title}</div>

const text = "Hello world"

const subtitle = <h2>{text}</h2>
```

* **Note:** You always need to close a tag. For example `<h1>...</h1>`, `<img />`, `<input />`, `<span>...</span>`, etc.

## Components

> Components are functions

```jsx
function MyComponent() {
    // TODO: Return some view
}
```

> Components return composed views from other components

```jsx
function MyComponent() {
    return <OtherComponent />
}
```

> They are a set of common predefined HTML like components

```jsx
function MyComponent() {
    return (
        <div>
            <h1>Hello world</h1>
        </div>
    )
}
```

## Properties

When you define a Component, you can instance it by `<MyComponent />` or `<MyComponent>...</MyComponent>`.

If you need to pass it some data, you can define properties (like HTML/XML attributes) over the tag.

> Example: You can pass it some text

```jsx
<MyComponent title="Hello world" />
```

> Example: You can pass it some number

```jsx
<MyComponent price={18.5} />
```

> Example: You can pass it some data

```jsx
<MyComponent person={data} />
```

> Example: You can pass it some boolean true

```jsx
<MyComponent isVisible={true} />

// Or simple
<MyComponent isVisible />
```

> Example: You can pass it some boolean false

```jsx
<MyComponent isVisible={false} />
```

> Example: You can pass it some function callback

```jsx
<MyComponent onMyEvent={result => { ... }} />

// See: `result => { ... }` is a callback
```

When you receive some property, you can access it directly as the first function param.

> Example: Handle properties

```jsx
function MyComponent({ title, person, price, isVisible, onMyEvent }) {

    if (!isVisible) {
        return null;
    }

    return (
        <h1>{title}</h1>
        <span>Name: {person.name}</span>
        <span>Price: $ {price}</span>
    )
}
```

## React Hooks

The React Hook is a special function that attaches advances functionallity to the component.

In the next table present the most common built-in hooks and its description.

React Hook | Syntax | Description
--- | --- | ---
`useState` | `const [value, setValue] = useState(initialValue)` | Creates a pair `value/setValue` state
`useEffect` | `useEffect(callback, dependencies)` | Call the `callback` when some dependency is updated
`useReducer` | `const [state, dispatch] = useReducer(reducer, initialState)` | Return a `state` updated by the `reducer` function. Where `reducer as (oldState, action) => newState`
`useContext` | `const context = useContext(MyContext)` | Return the current context provided by `MyContext`, when it is changed in the nearest provider, updates the current context in cascade.

## Custom Hooks

A Custom Hook is a special function prefixed by `"use"` word, for example `useMyClock` or `useMyStore`.

The function can instance other hooks and extend functionallity.

The return of a custom hook is a *Programming Interface*, and reduce the complex to solve some task.

> Example: Custom Counter Hook

```jsx
function useCounter(initialValue = 0) {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        increment(amount = 1) {
            setValue(value + amount);
        },
        decrement(amount = 1) {
            setValue(value - amount);
        },
        reset() {
            setValue(initialValue)
        }
    };
}
```

> Example: Use the Custom Counter Hook inside some component

```jsx
function MyComponent() {
    const counter = useCounter();

    return (
        <div>
            <h1>Counter Value: {counter.value}</h1>
            <button onClick={() => counter.increment()}>Increment</button>
            <button onClick={() => counter.decrement()}>Decrement</button>
            <button onClick={() => counter.reset()}>Reset</button>
        </div>
    )
}
```

[![Edit counter](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/counter-x6lgk?fontsize=14&hidenavigation=1&theme=dark)
