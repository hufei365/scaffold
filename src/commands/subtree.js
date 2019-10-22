const ora = require('ora')
const { execFile, execFileSync } = require('child_process')
const shellFile = require('path').join(__dirname, '../scripts/install.sh')

module.exports = async (projectName) => {
    const loading = ora('Add subtree for the project').start();
    execFileSync(shellFile, [projectName], {
        shell: process.platform === "win32" ? "cmd.exe" : "/bin/bash",
        stdio: ['pipe', process.stdout, process.stderr]
    });
    loading.succeed();
}
