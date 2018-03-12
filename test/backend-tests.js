const { beforeEach } = require("mocha");
const { assert } = require("chai");
const { hashPassword, compareHashes } = require("../utils/hashing");

describe("hashPassword", () => {
  let result;

  beforeEach(done => {
    hashPassword("Hello World").then(hash => {
      result = hash;
      done();
    });
  });

  it("Should return a string", () => {
    assert.isString(result);
  });
  it("Should have a length of at least 60 characters", () => {
    assert.isAtLeast(result.length, 60);
  });
});

describe("compareHashes", () => {
  let hashedResult;
  let compareResult;

  beforeEach(done => {
    hashPassword("Hello World").then(hash => {
      hashedResult = hash;

      compareHashes("Hello World", hashedResult).then(isValid => {
        compareResult = isValid;
        done();
      });
    });
  });

  it("Should return a boolean", () => {
    assert.isBoolean(compareResult);
  });
  it("Should be true", () => {
    assert.isTrue(compareResult);
  });
});

describe("compareHashes (Falsy)", () => {
  let hashedResult;
  let compareResult;

  beforeEach(done => {
    hashPassword("Hello World").then(hash => {
      hashedResult = hash;

      compareHashes("this is a false hash", hashedResult).then(isValid => {
        compareResult = isValid;
        done();
      });
    });
  });

  it("Should return a boolean", () => {
    assert.isBoolean(compareResult);
  });
  it("Should be false", () => {
    assert.isFalse(compareResult);
  });
});
