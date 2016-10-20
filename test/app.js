'use strict';

require('babel-register');

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-react-story:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({Component: 'Test', centered: true})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'stories.js'
    ]);
  });
});
