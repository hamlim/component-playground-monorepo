// children, role, display, props

let CHILDREN = "--CHILDREN--";

let ROLES = {
  presentation: "div",
  interactive: "button",
  media: "img"
};

export let NODE_TYPES = {
  childrenType: CHILDREN,
  roles: ROLES
};

export function getHostNodeForRoleAndDisplay({ role, display }) {
  switch ([role, display]) {
    case ["presentation", "block"]: {
      return "div";
    }
    case ["presentation", "inline"]: {
      return "span";
    }
    default:
      return "div";
  }
}
