import ReactDOM from "react-dom";
import { nodeTreeToJSX } from "./nodeTreeToJSX.js";

export function createRenderer({ mountPoint, reactRenderer = ReactDOM }) {
  return function renderer(node) {
    let tree = nodeTreeToJSX(node);
    return reactRenderer(tree, mountPoint);
  };
}
