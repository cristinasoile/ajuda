// src/server.js

const app = require('./app');

const PORT = process.env.API_PORT || 3001;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
