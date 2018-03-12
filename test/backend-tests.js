const { before, beforeEach } = require("mocha");
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

const {
  validateEmail,
  validatePasswordLength,
  verifyPassword
} = require("../utils/validateUserInput");

describe("validateEmail", () => {
  let result;

  describe("Truthy results", () => {
    before(() => {
      result = validateEmail("test@email.com");
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return true", () => {
      assert.isTrue(result);
    });
  });

  describe("Falsy results", () => {
    before(() => {
      result = validateEmail("test");
    });
    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });

    it("Should return false", () => {
      assert.isFalse(result);
    });
  });
});

describe("validatePasswordLength", () => {
  let result;

  describe("Truthy results", () => {
    before(() => {
      result = validatePasswordLength("password");
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return true", () => {
      assert.isTrue(result);
    });
  });

  describe("Falsy results", () => {
    before(() => {
      result = validatePasswordLength("fail");
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return false", () => {
      assert.isFalse(result);
    });
  });
});

describe("verifyPassword", () => {
  let result;

  describe("Truthy results", () => {
    before(() => {
      result = verifyPassword("mypassword", "mypassword");
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return true", () => {
      assert.isTrue(result);
    });
  });

  describe("Falsy results", () => {
    before(() => {
      result = verifyPassword("mypassword", "myfakepassword");
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return false", () => {
      assert.isFalse(result);
    });
  });
});
