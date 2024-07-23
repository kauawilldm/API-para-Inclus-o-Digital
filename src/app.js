const express = require('express');
const coursesRoutes = require('./routes/coursesRoutes');
const accessibilityRoutes = require('./routes/accessibilityRoutes');
const digitalLiteracyRoutes = require('./routes/digitalLiteracyRoutes');

const app = express();

app.use('/api/courses', coursesRoutes);
app.use('/api/accessibility', accessibilityRoutes);
app.use('/api/digital-literacy', digitalLiteracyRoutes);

app.get('/', (req, res) => {
  res.send('API is running');
});

console.log('App is configured');

module.exports = app;
