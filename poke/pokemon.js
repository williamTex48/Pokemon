const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Base URL da PokeAPI
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

app.get('/pokemon/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const url = `${BASE_URL}/${name}`;

        console.log(`Fazendo requisição para: ${url}`);

        const response = await axios.get(url);
        
        // Envia a resposta com dados do Pokémon
        res.json(response.data);
    } catch (error) {
        console.error('Erro ao buscar Pokémon:', error.response ? error.response.data : error.message);
        res.status(500).json({ 
            error: 'Erro ao buscar Pokémon', 
            detalhes: error.response ? error.response.data : error.message 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});