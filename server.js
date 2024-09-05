const express = require('express');
const searoute = require('searoute-js');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.post('/api/searoute', (req, res) => {
  const { origin, destination, units } = req.body;

  try {
    const route = searoute(origin, destination, units || 'nauticalmiles');
    res.json(route);
  } catch (error) {
    res.status(500).json({ message: 'Error calculating sea route', error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
