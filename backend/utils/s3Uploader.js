const fs = require('fs');
const path = require('path');
const s3 = require('../configs/s3');

async function saveToS3(data, filePrefix) {
  const fileName = `${filePrefix}-${Date.now()}.json`; // ✅ Fixed backticks
  const filePath = path.join(__dirname, '..', 'temp', fileName);

  // Ensure temp directory exists
  if (!fs.existsSync(path.join(__dirname, '..', 'temp'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'temp'));
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `db-exports/${fileName}`, // ✅ Also fixed this to use backticks
    Body: fileContent,
    ContentType: 'application/json',
  };

  await s3.upload(params).promise();

  // Optional: delete local file
  fs.unlinkSync(filePath);
}

module.exports = saveToS3;
