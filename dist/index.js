"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createState = void 0;
const zustand_1 = require("zustand");
function createState(initialState) {
    const globalState = (0, zustand_1.create)(() => initialState);
    const setState = (state) => {
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
exports.createState = createState;
