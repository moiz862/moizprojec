import app from '../artifacts/api-server/src/app';

// Set up Vercel serverless function configuration
export const config = {
  api: {
    // Disable Vercel's default body parser so Express can handle it
    bodyParser: false,
    externalResolver: true,
  },
};

// Export the Express app as the Vercel serverless function handler
export default app;

