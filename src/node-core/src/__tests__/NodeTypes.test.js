import { getHostNodeForRoleAndDisplay } from "../NodeTypes.js";

test("it correctly returns presentational host nodes", () => {
  expect(
    getHostNodeForRoleAndDisplay({ display: "block", role: "presentation" })
  ).toEqual("div");
  expect(
    getHostNodeForRoleAndDisplay({ display: "inline", role: "presentation" })
  ).toEqual("span");
});
