# Bank-App-Challange
Deploy testing automation tool, commission Infrastructure and configure monitoring and alerting integration with grafana.

So because it's a bank tech challenge i decided to simulate a simple bank Application built with JavaScript. Then running dependencies and framework test, i decided to add some react component.

To run this app on your PC is simple.

Follow the steps below:

1 - clone app Repo

2 - Navigate to project directory

!! Please ensure you have node installed in your system and if you don't use this link to https://kinsta.com/blog/how-to-install-node-js/

3 - Then type 'npm install' this will install all the needed dependencies for the project

4 - Then type 'npm start' this will start on development mode. Open http://localhost:3000 to view it in the browser.

if you have any issues; use 'npm audit fix' will automatically fix issues

![1st screen](https://user-images.githubusercontent.com/47798540/230577095-257d8e97-3176-4172-b5d9-67fa2637d122.png)
![2nd shot](https://user-images.githubusercontent.com/47798540/230577186-910c1f40-258d-4f37-9264-8225c8c09e31.png)

## DOCKERIZE THE APPLICATION
For this we can use our local system to create docker images for the appplication. This will require installing docker, docker-cli, docker-compose and docker-desktop on the local machine. Alternatively, we can use a development environment like gitpod which provides a seamless environment for application development. Gitpod is a cloud development environment for teams to efficiently and securely develop software [gitpod.io](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwijxoferrP-AhXUiP0HHY4TASQQFnoECA8QAQ&url=https%3A%2F%2Fwww.gitpod.io%2F&usg=AOvVaw39pWIjZuoC3seiZXQfgf01).

Gitpod can easily be used to work on any github, gitlab or bitbucket repository because it allows teams to open any repository as a workspace. This automatically create a `.gitpod.yml` file which instructs Gitpod on how to prepare and build the project, such as starting development servers and configuring Prebuilds.

## Getting started with Gitpod

In this guide we’ll walk you through the basics to get up and running with Gitpod today.

    Step 1: Your first workspace
    Step 2: Customize Gitpod
    Step 3: Gitpodify a project

### Step 1: Your first workspace
The best way to get see the power of Gitpod, is to try it out by starting your first Workspace.

To start your first workspace:

1. Navigate to a GitHub, GitLab or Bitbucket repository.
2. Open the repo in Gitpod by prefixing the URL with: `gitpod.io/#`

For example, click this link to open the NodeJS project in a Gitpod workspace:

https://gitpod.io/#https://github.com/nodejs/node

### Step 2: Customize Gitpod

Gitpod can be customized depending on the needs of the project, and your own personal taste. With Gitpod, you can set an IDE preference between VS Code and JetBrains, either working in the browser, or on your desktop application. You can add custom scripts via Dotfiles.

Work in the browser with VS Code Browser, or on desktop with VS Code Desktop or JetBrains Gateway. To set your preferences, navigate to gitpod.io/preferences to set your IDE preference.

A convenient way to work with Gitpod is using the custom browser extension. Using the extension you can open workspaces directly from inside GitHub and GitLab.

### Set your Dotfiles

Dotfiles are a way to customize your developer environment according to your personal needs. To configure Gitpod to use your own dotfiles for all your workspaces, enter the URL of a dotfiles repository in your user preferences. See Dotfiles for more.

See User Settings for more ways to customize Gitpod.

### Step 3: Gitpodify a project

Opening a repository in Gitpod starts a workspace and clones the source code. To start developing though, you would then have to install any required dependencies, run any build scripts and start servers. Luckily, with Gitpod, we can automate all of those steps.

1. Add a .gitpod.yml at the root of your repository.
-You can use `gp init` to quickly generate the .gitpod.yml file.
2. Use the `gp validate` command to validate your configuration is working.
3. Commit and push to apply the configuration for all subsequent workspace starts.

Every opened workspace will now run the steps defined in your gitpod.yml.

For more, see the [.gitpod.yml](https://www.gitpod.io/docs/references/gitpod-yml) reference and [configuring workspaces](https://www.gitpod.io/docs/configure/workspaces).


### A gitpod.yml example
    image: gitpod/workspace-full

    # Commands that will run on workspace start
    tasks:
    - name: Setup, Install & Build
        before: yarn global add express
        init: yarn install
        command: yarn build

    # Ports to expose on workspace startup
    ports:
    - port: 3000
        onOpen: open-preview
        name: Website
        description: Website Preview

* Caption: An example project configured to install, build and run a yarn project with a webserver, exposed on port 3000. On start, the webserver preview is opened automatically.

See the [.gitpod.yml](https://www.gitpod.io/docs/references/gitpod-yml) reference page for more.


Now, we want to dockerize the application and run it as docker containers. We create a Dockerfile and put the following code.

        FROM node:alpine3.16
        WORKDIR /client
        COPY . .
        RUN npm install 
        EXPOSE 3000
        CMD ["npm", "start"]
In the Dockerfile above, we use a node:alpine3.16 as a base image, this gives us a small image size.
