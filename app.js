const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('CI/CD Pipeline Test SUCCESSFUL! This is Version 2.0.'); 
});

const PORT = 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
