const download = require('download-git-repo')

module.exports = downloadGit; 

function downloadGit(projectName, templateName){
    return new Promise((resolve, reject)=>{
        download('', projectName, { clone: true }, (err) => {
            if(!err){
                resolve()
            } else {
                reject()
            }
        })
    })
}