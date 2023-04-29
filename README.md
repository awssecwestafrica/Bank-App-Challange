# Bank-App-Challange

Deploy testing automation tool, commission Infrastructure and configure monitoring and alerting integration with grafana.

So because it's a bank tech challenge i decided to simulate a simple bank Application built with JavaScript. Then running dependencies and framework test, i decided to add some react component.

To run this app on your PC is simple.

Follow the steps below:

1 - clone app Repo

2 - Navigate to project directory

!! Please ensure you have node installed in your system and if you don't use this link to https://kinsta.com/blog/how-to-install-node-js/

3 - Then type `npm install` this will install all the needed dependencies for the project

4 - Then type `npm start` this will start on development mode. Open http://localhost:3000 to view it in the browser.

if you have any issues; use `npm audit fix` will automatically fix issues

![1st screen](https://user-images.githubusercontent.com/47798540/230577095-257d8e97-3176-4172-b5d9-67fa2637d122.png)

<!-- ![2nd shot](https://user-images.githubusercontent.com/47798540/230577186-910c1f40-258d-4f37-9264-8225c8c09e31.png) -->

## Using Docker

1. Download and install Docker Desktop
   https://www.docker.com/products/docker-desktop/
2. Open Docker Desktop
3. Navigate to the project directory
4. Open terminal and run
   `docker build -t devopsbank:v1 .`
5. After image build is complete, run: `docker images` to view image
6. Create a running container out using the image
   `docker run -d -p 8080:80 --name devops-bank devopsbank:v1`
7. Check that the container is running
   `docker ps`
8. Open the browser and use the url
   `localhost:8080` to access the application.
