const express = require("express");
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}));

const PORT = process.env.PORT || 5000;


app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use("/api/profile", require("./routes/profile"));
app.use('/api/companies', require('./routes/companies'));
app.use('/api/skills', require('./routes/skills'))
app.use('/api/courses', require('./routes/courses'))
app.use('/api/task', require('./routes/task'))

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));