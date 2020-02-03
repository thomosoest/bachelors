const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.get("/users", (rew, res)=> res.json(
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

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));