import app from '../artifacts/api-server/src/app';

// Export the Express app as a Vercel Serverless Function handler.
// Vercel intercepts requests and passes them to this Express app instance.
export default app;
