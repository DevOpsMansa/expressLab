//I required express library
const express = require(`express`)

// i run express and store return value in the app variable
const app = express()
//saved port number as a variable for dynamic purposes
const PORT = 3000

//Middleware


//Data
// let plants = [`Sunflower`, `Daisy`, `Roses`, `Lily`]

//ROUTES
app.get('/', (req, res)=>{
    res.send(`Home Route`);
});
app.get("/", (req, res) => {
    res.send("Try navigating to /user.");
  });
  
  app.get("/user", (req, res) => {
    res.send(`Received a GET request for user!
  Try navigating to /user/somevalue/profile/somevalue.`);
  });
  
  app.get("/user/:userID", (req, res) => {
    res.send(`Navigated to the user page for: ${req.params.userID}.`);
  });
  
  app.get("/user/:userID/profile", (req, res) => {
    res.send(`Navigated to the user profile page for: ${req.params.userID}.`);
  });
  
  app.get("/user/:userID/profile/:data", (req, res) => {
    res.send(
      `Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`
    );
  });

//we must listen to the server on specified PORT
//LISTENING SHOULD ALWAYS BE THE LAST THING ON THE FILE
app.listen(PORT), () =>{
    console.log(`Server listening on port: ${PORT}`)
}