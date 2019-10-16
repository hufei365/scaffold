/**
 * Input prompt example
 */

'use strict';
var inquirer = require('inquirer');
const ora = require('ora')
var chalkPipe = require('chalk-pipe');

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name"
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default: function() {
      return 'Doe';
    }
  },
  {
    type: 'input',
    name: 'fav_color',
    message: "What's your favorite color",
    transformer: function(color, answers, flags) {
      const text = chalkPipe(color)(color);
      if (flags.isFinal) {
        return text + '!';
      }

      return text;
    }
  }
];

// inquirer.prompt(questions).then(answers => {
//   console.log(JSON.stringify(answers, null, '  '));
// });
let loading = ora('downloading template ...');
inquirer.prompt([
  {
      name: 'description',
      message: 'Please enter the project description: '
  },
  {
      name: 'author',
      message: 'Please enter the author name: '
  }
]).then(async () => {
  //下载模板 选择模板
  //通过配置文件，获取模板信息
  
  console.log(typeof loading.start());
  let start = Date.now();

  while( Date.now() - start < 2000){}
  loading.succeed();

  // return Promise.resolve(2);
  console.log(2222)
}, ()=>{
  console.log('init failed~');
}).finally(()=>{
  // loading.succeed();
});