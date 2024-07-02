import express from 'express';
import cors from 'cors';
import router from './app/Routes';
import { globalErrorHandler } from './app/middlwares/globalErrorHandler';
import { notFound } from './app/middlwares/notFound';
const app = express();

// Parser
app.use(express.json());
app.use(cors());

// main route
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Add global error handlear
app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;