const download = require('download-git-repo')
const repo = require('../config/index')

module.exports = downloadGit; 

function downloadGit(projectName, templateName){
    return new Promise((resolve, reject)=>{
        download(`direct:${repo.git}`, projectName, { clone: true }, (err) => {
            if(!err){
                resolve()
            } else {
                reject()
            }
        })
    })
}