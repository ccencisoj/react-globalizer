declare module "react-globalizer" {
  export function createGlobalState<State extends { [key: string]: any }>(ob: {
    withInitialState: State;
  }): () => [State, (state: Partial<State>) => void];
}
