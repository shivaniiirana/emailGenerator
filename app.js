import express from 'express';
import dotenv from 'dotenv';
import router from './routes/routes.js';

dotenv.config(); 

const app = express();
const PORT = 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
