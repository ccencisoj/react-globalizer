"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobalState = void 0;
const zustand_1 = require("zustand");
function createGlobalState({ withInitialState, }) {
    const globalState = (0, zustand_1.create)(() => withInitialState);
    const useGlobalState = () => [
        globalState(),
        globalState.setState,
    ];
    return useGlobalState;
}
exports.createGlobalState = createGlobalState;
