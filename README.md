# react-globalizer

👋 ¿Estás buscando una solución fácil y elegante para administrar el estado global en React? Si es así, ¡has llegado al lugar ideal! 🎉

Con react-globalizer, simplemente defines el estado global usando "createGlobalState" y accedes a él desde cualquier lugar de tu aplicación.
Puedes definir tantos estados globales como quieras: un estado para cada modelo, vista, layout, o para cualquier cosa que se te ocurra. 
Además, eres libre de cargar objetos, funciones y componentes en el estado. 🔥

## Getting started
Para comenzar a usarlo, primero tienes que instalarlo.

``` shell
npm install react-globalizer
```

Luego defines el estado (para este ejemplo un contador).

``` typescript
// CounterView/hooks/useCounterState.jsx
import { createGlobalState } from "react-globalizer";

export const useCounterState = createGlobalState({
  withInitialState: { counter: 0 },
});
```

Y, posteriormente, lo usas de igual manera que un hook.

``` typescript
// CounterView/CounterView.jsx
import styles from "./styles.module.scss";
import { useCounterState } from "./useCounterState.jsx";

export const CounterControls = () => {
  const [counterState, setCounterState] = useCounterState();

  return (
    <div className={styles.counter_controls}>
      <button
        onClick={() => setCounterState({ counter: counterState.counter + 1 })}
      >
        Increment counter
      </button>
      <button
        onClick={() => setCounterState({ counter: counterState.counter - 1 })}
      >
        Decrement counter
      </button>
    </div>
  );
};

export const CounterView = () => {
  const [counterState] = useCounterState();

  return (
    <div className={styles.counter_view}>
      <p>Counter: {counterState.counter}</p>
      <CounterControls />
    </div>
  );
};
```

## Creditos

Este paquete esta basado en el administrador de estado [zustand](https://www.npmjs.com/package/zustand). 

## Recursos adicionales

- ¿Buscas algo a nivel de vista? No dudes en probar [react-view-state](https://www.npmjs.com/package/react-view-state)
- ¿Estas presentando problemas? Abre un hilo en [github issues](https://github.com/ccencisoj/react-globalizer/issues)

## License

MIT License

Copyright (c) 2023 Cristian Enciso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

