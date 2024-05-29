
# PCbuilder

PCbuilder is a helper for a customer, who wishes to create it's own PC.

It provides you necessary functionality to choose among different components, such as CPU, GPU, motherboard, RAM, coolers and etc.

There are two different folders: server and web. They contain server part and web part accordingly. 





## Server

**Languages:** Java

**Technologies, Libraries:** testng, log4j2, password4j, org.gson, swagger, Maven, Apache Tomcat, MySQL

**About:** Server part of the application allows us to work with database: get different parts from database, create new parts, delete parts. It also provides functions to get different parts from server by type. To deploy server you have to use Tomcat.



## Web

**Languages:** React JS

**Technologies, Libraries:** bootstrap

**About:** It's a web application, which allows us to use our functionality via browser. Basically, it's a website. All the main parts of the application are located in the src folder and are distributed as follows:

    1. components - contains the components necessary for the operation of applications : navbar, router, port List and part Item (for displaying details).
    2. global - a file with global variables
    3. images - images of devices
    4. modals - modal boxes for the admin page
    5. pages - pages of our application
    6. styles - styles
    7. utils - other consts

## Deployment of web app

To deploy this app do the following:

1)Run this command, which will download all dependencies from package.gson, in terminal of the web folder:

```bash
  npm install
```
2)To start our application, run command: 

```bash
  npm start
```

It is important that you have the system installed on your device node.js.

It is also important that the server is on port 9090, otherwise the server will give an error.

## Authors

- [@AlenniBoris](https://github.com/AlenniBoris)
- [@GatalskiAnton](https://github.com/GatalskiAnton)
- [@VidevichA](https://github.com/VidevichA)
```
