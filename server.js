require('dotenv').config(); // Certifique-se de que isso está no topo do arquivo

const express = require('express');
const app = express();
const movieRoutes = require('./src/routes/movieRoutes');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', movieRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});