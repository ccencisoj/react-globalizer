import { create } from "zustand";

export function createState(initialState: any) {
  const globalState = create(() => initialState);

  const setState = (state: any) => {
    globalState.setState(state);
  };

  const resetState = () => {
    globalState.setState(initialState);
  };

  const useState = () => {
    return [globalState(), setState, resetState];
  };

  return useState;
}
