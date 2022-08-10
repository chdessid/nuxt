import { Appwrite } from 'appwrite';
export const sdk = new Appwrite();
sdk
  .setEndpoint('http://localhost:4010/v1') // Replace this with your endpoint
  .setProject('62eaa64892fa78c917f3'); // Replace this with your ProjectID