export function createNode({ children, role, display, ...rest }) {
  return {
    children,
    role,
    display,
    ...rest
  };
}
