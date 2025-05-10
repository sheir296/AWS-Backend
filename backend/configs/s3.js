const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') }); // Load .env from backend/

const AWS = require('aws-sdk');

// Use process.env to get credentials from environment variables
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION // Get region from environment variable
});

module.exports = s3;
