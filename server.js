//I required express library
const express = require(`express`)

// i run express and store return value in the app variable
const app = express()
//saved port number as a variable for dynamic purposes
const PORT = 3000

//Middleware


//ROUTES
app.get(
    
)

//we must listen to the server on specified PORT
//LISTENING SHOULD ALWAYS BE THE LAST THING ON THE FILE
app.listen(PORT), () =>{
    console.log(`Server listening on port: ${PORT}`)
}