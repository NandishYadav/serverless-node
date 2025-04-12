const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello from root ---log!'
  });
}
);
router.get('/hello', (req, res) => {
  res.status(200).json({
    message: 'Hello from path! from log file'
  });
}
);
router.use((req, res) => {
  res.status(404).json({
    error: 'Not Found'
  });
}
);
module.exports = router;