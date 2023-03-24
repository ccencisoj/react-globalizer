declare module "react-globalizer" {
  export function createState<State extends { [key: string]: any }>(
    initialState: State
  ): () => [State, (state: Partial<State>) => void, () => void];
}
