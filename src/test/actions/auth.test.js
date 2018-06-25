import { login, logout } from "../../actions/auth";
import * as actions from "../../actions/actions";

test("It should create login action object correctly", () => {
  const uid = "1234Abc";
  const action = login(uid);
  expect(action).toEqual({
    type: actions.LOGIN,
    uid
  });
});

test("It should create login action object correctly", () => {
  const action = logout();
  expect(action).toEqual({
    type: actions.LOGOUT
  });
});
