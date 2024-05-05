#!/usr/bin/env node

const { exactSync, execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.log(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/jarzzyfx/create-de-server ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning ${repoName} to your current directory...`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}...`);
const installDeps = runCommand(installDepsCommand);
if (!installDeps) process.exit(-1);

console.log(
  `${repoName} has been successfully cloned and installed!. Happy coding from de server`
);
console.log("Follow the following commands to start");
console.log(`cd ${repoName} && npm run dev`);
