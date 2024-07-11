// src/models/initMongoConnection.js
import mongoose from 'mongoose';
import { env } from '../env.js';
// import { env } from '../utils/env.js';

export const initializeMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const password = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const database = env('MONGODB_DB');

    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${database}?retryWrites=true&w=majority&appName=Cluster011`,
    );

    console.log('Connected to MongoDB successfully!');
  } catch (error) {
    console.log('MongoDB connection error:', error);
    throw error;
  }
};