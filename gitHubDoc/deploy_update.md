# How to Deploy and Update

## how to deploy
### 1. [install "Docusaurus"](https://docusaurus.io/docs/installation)
- follow the steps of how to install it on your local computer   
`npx create-docusaurus@latest my-website classic`   
*replace "my-website" with the name of your project* 
- build your project   
`npm run build`

### 2. initialize git repo and commit to gitHub
- initialize git repo local / add / commit   
`git init` / `git add .` / `git commit -m "Docusaurus setup`
- create a new project on GitHub without "README" and ".gitignore"
  - under "**Quick setup**", copy the SSH link `git@github.com:Zolske/notes.zoltankepes.com.git`
- connect your local git with your GitHub project adding remote origin   
`git remote add origin git@github.com:Zolske/notes.zoltankepes.com.git`
- check if your origin has been set right (*for fetch and push*)   
`git remote -v`
- push your local repo to your GitHub project, enter the SSH "key-phrase" when prompted   
`git push --set-upstream origin main`

### 3. check for updates
- changes to the site can be made on GitHub, fetch and than up date locale repo   
`git fetch` `git pull`