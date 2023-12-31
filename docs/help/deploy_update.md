---
sidebar_position: 10
---

# Setup/Update the Website

Instruction of how to setup/update the website.

## how to Setup

### 1. install ["Docusaurus"](https://docusaurus.io/docs/installation)

- follow the steps of how to install it on your local computer  
  `npx create-docusaurus@latest my-website classic`  
  _replace "my-website" with the name of your project_
- build your project  
  `npm run build`

### 2. initialize git repo and commit to [GitHub](https://github.com/Zolske)

- initialize git repo local / add / commit  
  `git init` / `git add .` / `git commit -m "Docusaurus setup`
- create a new project on GitHub without "README" and ".gitignore"
  - under "**Quick setup**", copy the SSH link `git@github.com:Zolske/notes.zoltankepes.com.git`
- connect your local git with your GitHub project adding remote origin  
  `git remote add origin git@github.com:Zolske/notes.zoltankepes.com.git`
- check if your origin has been set right (_for fetch and push_)  
  `git remote -v`
- push your local repo to your GitHub project, enter the SSH "key-phrase" when prompted  
  `git push --set-upstream origin main`

### 3. connect to [Vercel](https://vercel.com/dashboard)

- after logging in, create a new project, choose GitHub repo with the project

  ***

## how to Update

### 1. check for updates

- changes to the site can be made on GitHub, pull changes from GitHub repo  
  `git pull`

### 2. push updates

- as usual / add changes / commit / and push  
  `git add .` / `git commit -m "message"` / `git push`
