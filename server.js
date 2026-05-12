const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const loggerMiddleware = require('./middlewares/logger.js');
const errorHandler = require('./middlewares/errorHandler.js');
const categoriasRouter = require('./routes/categorias.js');
const produtosRouter = require('./routes/produtos.js');
const pedidosRouter = require('./routes/pedidos.js');

app.use(loggerMiddleware);

app.use('/api/categorias', categoriasRouter);
app.use('/api/produtos', produtosRouter);
app.use('/api/pedidos', pedidosRouter);

app.get('/', (req, res) => {
    res.json({ mensagem: 'Rodando à API do Sorveteria Delicia' });
});

// Rota 404 — deve ficar ANTES do errorHandler
app.use((req, res, next) => {
    res.status(404).json({
        sucesso: false,
        mensagem: `Rota '${req.url}' não encontrada na API da Sorveteria Delicia`
    });
});

app.use(errorHandler);

// ✅ Necessário para a Vercel conseguir iniciar o servidor
const PORTA = process.env.PORT || 3000;
if (!process.env.VERCEL) {
    app.listen(PORTA, () => {
        console.log(`🚀 Servidor rodando na porta https://localhost:${PORTA}`);
    });
}

module.exports = app;