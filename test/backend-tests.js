const { before } = require("mocha");
const { assert } = require("chai");

const { hashPassword, compareHashes } = require("../utils/hashing");

describe("hashPassword", () => {
  let result;

  before(done => {
    hashPassword("Hello World").then(hash => {
      result = hash;
      done();
    });
  });

  it("Should return a string", () => {
    assert.isString(result);
  });
  it("Should be at least 60 characters long", () => {
    assert.isAtLeast(result.length, 60);
  });
});

describe("comapareHashes", () => {
  let result;

  describe("Truthy results", () => {
    before(done => {
      hashPassword("Hello World").then(hash => {
        compareHashes("Hello World", hash).then(value => {
          result = value;
          done();
        });
      });
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return true", () => {
      assert.isTrue(result);
    });
  });

  describe("Falsy results", () => {
    before(done => {
      hashPassword("Hello World").then(hash => {
        compareHashes("this is a fake password", hash).then(value => {
          result = value;
          done();
        });
      });
    });

    it("Should return a boolean", () => {
      assert.isBoolean(result);
    });
    it("Should return false", () => {
      assert.isFalse(result);
    });
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
