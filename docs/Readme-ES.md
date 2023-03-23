# react-globalizer

👋 ¿Estás buscando una solución fácil y elegante para administrar el estado global en React? Si es así, ¡has llegado al lugar ideal! 🎉

Con react-globalizer, simplemente defines el estado global usando "createGlobalState" y accedes a él desde cualquier lugar de tu aplicación.
Puedes definir tantos estados globales como quieras: un estado para cada modelo, vista, layout, o para cualquier cosa que se te ocurra. 
Además, eres libre de cargar objetos, funciones y componentes en el estado. 🔥

## Comenzando
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

## Recursos adicionales

- ¿Buscas algo a nivel de vista? No dudes en probar [react-view-state](https://www.npmjs.com/package/react-view-state)
- ¿Estas presentando problemas? Abre un hilo en [github issues](https://github.com/ccencisoj/react-globalizer/issues)

## Creditos

Este paquete esta basado en el administrador de estado [zustand](https://www.npmjs.com/package/zustand). 


## License

MIT License
