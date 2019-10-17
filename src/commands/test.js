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
];

let loading = ora('downloading template ...');

// (async function (){
  // loading.start();
  // loading.succeed();
  // inquirer.prompt(questions).then(answers => {
  //   console.log(JSON.stringify(answers, null, '  '));
    
  // });
// })()



const testFn = async () => { 
  const spinner = ora('fetching repo list'); 
  spinner.start(); // 开始loading
  let repos = await Promise.resolve([1,2,3,4]); 
  spinner.succeed(); // 结束loading
  
  // 选择模板
  // repos = repos.map((item) => item); 
  const answers = await inquirer.prompt({
    type: 'input',
    name: 'first_name',
    message: "What's your first name"
  });
  console.log(answers);
  // spinner.start();
  await spinner.succeed(); // 结束loading

  


};

(async ()=>{
  testFn();
})()
// inquirer.prompt([
//   {
//       name: 'description',
//       message: 'Please enter the project description: '
//   },
//   {
//       name: 'author',
//       message: 'Please enter the author name: '
//   }
// ]).then(async () => {
//   //下载模板 选择模板
//   //通过配置文件，获取模板信息
  
//   console.log(typeof loading.start());
//   let start = Date.now();

//   while( Date.now() - start < 2000){}
//   loading.succeed();

//   // return Promise.resolve(2);
//   console.log(2222)
// }, ()=>{
//   console.log('init failed~');
// }).finally(()=>{
//   // loading.succeed();
// });