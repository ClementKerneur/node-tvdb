var assert = require("assert");
var API_KEY = process.env.TVDB_KEY;
var TVDBClient = require("..");

describe("Time endpoints", function() {

    describe("Node callback API", function() {

        it("should return the current time from the server", function(done) {
            var client = new TVDBClient(API_KEY);
            client.getTime(function(error, response) {
                assert.ifError(error);
                assert.equal("string", typeof response);
                done();
            });
        });
    });

    describe("Promise API", function() {

        it("should return the current time from the server", function(done) {
            var client = new TVDBClient(API_KEY);
            client.getTime()
                .then(function(response) {
                    assert.equal("string", typeof response);
                })
                .catch(function(error) {
                    assert.ifError(error);
                })
                .done(done);
        });
    });
});
