const express = require("express");
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

app.get("/", (rew, res)=> res.json(
    {users:[
        {username: "per",
            kurs: [
                {id: "kurs1"},
                {id: "kurs2"}
            ]
        },
        {username: "paal"},
        {username: "aal"},
        {username: "kål"}
    ]
}
));

app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));