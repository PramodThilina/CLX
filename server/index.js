const express = require('express')
const app = express()
const mysql = require('mysql')
var cors = require('cors')

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
})
);
app.use(express.json());



const db =  mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'Password2005',
    database:'loginsystem', 
})

app.post('/login',(req, res) => {
    
    const email_address =req.body.email_address
    const password =req.body.password

    db.query(
        "SELECT * FROM admins WHERE email_address =? AND password = ?",
        [email_address, password],
        (err, result) => {
            if(err) {
                res.send({err: err})
            }
                if (result){
                    console.log("you have successfully logged in");
                    res.redirect("http://localhost:3000/admin ")                        
                  } else{
                res.send({message: "Wrong email/pasword combination!"})
               
            }
        }
    );

})


app.listen(3001, () =>{
    console.log('running on port 3001');
});
