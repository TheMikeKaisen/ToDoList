const express = require('express');


const app = express();

const PORT = 8000;

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));