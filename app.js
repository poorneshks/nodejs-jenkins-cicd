const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('CI/CD Pipeline Test SUCCESSFUL! This is Version ks poornesh pipeline'); // <-- UPDATED MESSAGE
});

const PORT = 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
