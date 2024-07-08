const express = require('express');
// const router = express.Router();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running Successfully');
})

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`server started on port ${PORT}`))