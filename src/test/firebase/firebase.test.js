import { database, auth } from "../../firebase/firebase";

let toBeRead = { value: "I am a value for testing reading from DB" };
beforeAll(done => {
  // writing a value to DB
  database()
    .ref("test-read")
    .set(toBeRead)
    .then(() => {})
    .catch(error => {
      fail(error.message);
    });
  done();
});

test("It should write to firebase database correctly", done => {
  const value = { value: "I am a value for testing writing to DB" };
  return database()
    .ref("test-write")
    .set(value)
    .then(() => {
      done();
    })
    .catch(error => {
      fail(error.message);
      done();
    });
});

test("It should read form firebase database correctly", done => {
  return database()
    .ref("test-read")
    .once("value")
    .then(snapshot => {
      expect(snapshot.val()).toEqual(toBeRead);
      done();
    })
    .catch(error => {
      fail(error.message);
      done();
    });
});
