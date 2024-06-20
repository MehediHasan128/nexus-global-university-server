// Import mongoose
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  // Apply try catch for async function
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Nexus Global University is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
