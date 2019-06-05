import React, { useContext, useReducer, createContext } from "react";

import { createNode } from "./createNode.js";

function nodeEditorReducer(state, { type, payload }) {
  switch (type) {
    case "INIT": {
      return {
        nodes: [
          createNode({
            children: "Start editing",
            role: "presentation",
            display: "block"
          })
        ]
      };
    }
    default:
      throw new Error(
        `Invalid type dispatched to node editor reducer: ${type}`
      );
  }
}

let nodeEditorContext = createContext();

function getInitialState() {
  return nodeEditorReducer(null, { type: "INIT" });
}

export function NodeEditorProvider({ children }) {
  let state = useReducer(nodeEditorReducer, undefined, getInitialState);
  return (
    <nodeEditorContext.Provider value={state}>
      {children}
    </nodeEditorContext.Provider>
  );
}

export function useNodeContext() {
  return useContext(nodeEditorContext);
}
