'use strict';
require('babel-register');

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting() {
    this.log(
      yosay(
        'Welcome to react-story generator!'
      )
    );

    var prompts = [{
      type: 'input',
      name: 'Component',
      message: 'Enter the name of your component:'
    }, {
      type: 'confirm',
      name: 'centered',
      message: 'Would you like to add centered decorator?'
    }];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  },

  writing() {
    this.fs.copyTpl(
      this.templatePath('stories.js'),
      this.destinationPath('stories.js'),
      this.props);
  },

  install() {
    if (this.props.centered) {
      this.npmInstall(['@kadira/react-storybook-decorator-centered'], {
        'save-dev': true
      });
    }
  }
});
