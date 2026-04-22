const express = require('express');
const noteRoutes = require('./routes/note.routes');

const app = express();

app.use(express.json());

app.use('/api/notes', noteRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    data: null,
  });
});

module.exports = app;