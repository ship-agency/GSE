import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(process.cwd(), 'dist');

// Health check endpoints for Cloud Run
app.get(['/health', '/healthz'], (_req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from Vite dist folder
app.use(express.static(distPath));

// Fallback all navigation requests to index.html for React SPA
app.get('*', (_req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(200).send('<!doctype html><html><head><title>Loading</title></head><body>Application building, please refresh.</body></html>');
  }
});

const server = app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});
