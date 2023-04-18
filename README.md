# Bank-App-Challange
Deploy testing automation tool, commission Infrastructure and configure monitoring and alerting integration with grafana

So because it's a bank tech challenge i decided to simulate a simple bank Application built with JavaScript. then running dependencies and framework test i decided to add some react component.

To run this app on your PC is simple;

follow the steps below

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

Now, we want to dockerize the application and run it as docker containers. We create a Dockerfile and put the following code.

        FROM node:alpine3.16
        WORKDIR /client
        COPY . .
        RUN npm install 
        EXPOSE 3000
        CMD ["npm", "start"]
In the Dockerfile above, we use a node:alpine3.16 as a base image, this gives us a small image size.
