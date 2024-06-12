# User-management-system
It operates the function of a database.
This is basically a backend-based project that deals with CRUD operations such as creating, updating, inserting, finding, and deleting within the database.
The info of that specific person will be saved to our database cloud and thence they can retrieve information whenever they want to, update it, or delete it as per
their choice. The information will be kept confidential with respect to their accounts. 
I've tried using the virtual database, and connected my project using mongodb cluster, which is eventually not just securing the data, but also increase the retrieval of data faster.
The techstacks used at backend for routing is express js with the simple command interface frontend using ejs.
Right now I've manually added the coloumns of the table according to my convenience, and as the other persom logs in, they can modify the table as per their needs, and perform CRUD operations, without using any of the query or command, so somewhere it's an integration of the queries which we use almost around every technological work.


#GETTING STARTED
Make sure you have node and npm installed in your local already (to check if they are present type node --version, it must display the version) One can do this in CMD.
1. Make sure to be in the folder where you want to clone the project -> To set up the project locally, use command git clone https://github.com/the-evocative-eye/CommandLineInterface.git (Use GITBASH OR CMD for the same)
2. VSCODE -> OPEN THIS FOLDER -> Now use Powershell or terminal within VSCODE to run further commands
3. npm init -> npm install express body-parser mongoose morgan axios dot-env express-handlebars nodemon ejs
4. once all these are installed you will see their relevant versions in the package.json file. Now you are good to code.
To run the project type 'node server.js' in the commandline window.
