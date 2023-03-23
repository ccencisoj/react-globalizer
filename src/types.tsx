export type UseGlobalState<State> = () => [
  State,
  (state: Partial<State>) => void
];

export type CreateGlobalState = <State extends { [key: string]: any }>(ob: {
  withInitialState: State;
}) => UseGlobalState<State>;
