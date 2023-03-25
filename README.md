![logo](./images/logo.png)

👋 Are you looking for an easy and elegant solution for managing global state in React? If so, you've come to the perfect place! 🎉

With react-globalizer, you simply define global state using "createState" and access it from anywhere in your application.
You can define as many global states as you want: one state for each model, view, layout, or anything else you can think of.
Additionally, you're free to load objects, functions, and components into the state. 🔥

Not convinced yet? Check out the [demo](https://codesandbox.io/p/sandbox/react-globallizer-counter-example-w9t9tf?file=%2Fpages%2Findex.jsx&selection=%5B%7B%22endColumn%22%3A34%2C%22endLineNumber%22%3A18%2C%22startColumn%22%3A34%2C%22startLineNumber%22%3A18%7D%5D)

## Getting Started
To start using it, you first need to install it.

``` shell
npm install react-globalizer
```

Next, you define the state (for this example, a counter).

``` typescript
import { createState } from "react-globalizer";

const useCounter = createState(0);
```

Then, you can use it just like any other hook.

``` typescript
// ...

export const CounterControls = () => {
  const [counter, setCounter, resetCounter] = useCounter();

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => resetCounter()}>Reset</button>
    </div>
  );
};

export const CounterView = () => {
  const [counter] = useCounter();

  return (
    <div>
      <p>Counter: {counter}</p>
      <CounterControls />
    </div>
  );
};
```

## Additional Resources

- Looking for something at the view level? Don't hesitate to try [react-view-state](https://www.npmjs.com/package/react-view-state)
- Running into issues? Open a thread on [github issues](https://github.com/ccencisoj/react-globalizer/issues)

## Credits

This package is based on the state manager [zustand](https://www.npmjs.com/package/zustand). 


## License

MIT License

