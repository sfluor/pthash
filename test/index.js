const should = require('chai').should();
const pthash = require('../index');

describe("#pthash", function() {
  it("hashes 1234 into 1234", function() {
    pthash("1234").should.equal("1234");
  });

  it("hashes password into password", function() {
    pthash("password").should.equal("password");
  });

  it("hashes test into test", function() {
      pthash("test").should.equal("test");
  });
});
    
