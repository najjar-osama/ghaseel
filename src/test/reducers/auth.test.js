import authReducer from "../../reducers/auth";
import { login, logout } from "../../actions/auth";

test("It should set state to an empty object if no state is provided", () => {
  const state = authReducer(undefined, {
    type: "I_AM_NOT_AN_ACTION_TYPE" // used to check state as the state will be returned when unknown action type is provided
  });
  expect(state).toEqual({});
});
test("It return the correct state with login action", () => {
  const uid = "1234Abc";
  const state = authReducer(undefined, login(uid));
  expect(state).toEqual({ uid });
});

test("It should return the correct state with logout action", () => {
  const state = authReducer(undefined, logout());
  expect(state).toEqual({});
});
