import { create } from "zustand";
import { UseGlobalState } from "./types";

export function createGlobalState<State extends { [key: string]: any }>({
  withInitialState,
}: {
  withInitialState: State;
}) {
  const globalState = create(() => withInitialState);
  const useGlobalState: UseGlobalState<State> = () => [
    globalState(),
    globalState.setState,
  ];
  return useGlobalState;
}
