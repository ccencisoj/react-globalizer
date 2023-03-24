![logo](./images/logo.png)

👋 Are you looking for an easy and elegant solution for managing global state in React? If so, you've come to the perfect place! 🎉

With react-globalizer, you simply define global state using "createState" and access it from anywhere in your application.
You can define as many global states as you want: one state for each model, view, layout, or anything else you can think of.
Additionally, you're free to load objects, functions, and components into the state. 🔥

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

