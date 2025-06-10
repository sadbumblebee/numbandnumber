const fs = require('fs');
const AWS = require('aws-sdk');
const dotenv = require('dotenv');

// load environment variables from .env
dotenv.config();

// Create a client
const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION
});

// Upload file to S3
const uploadFileToS3 = (filePath, key) => {
	const fileContent = fs.readFileSync(filepath);

	const params = {
		Bucket: process.env.S3_BUCKET,
		Key: key,
		Body: fileContent
	};
};

return new Promise((resolve, reject) => {
	s3.upload(params, (err, data) => {
		if (err) {
			reject(err);
		} else {
			resolve(data.Location);
		}
	});
});

async function uploadStaticFilesToS3() {
	const staticFolder = './static';

	try {
		const files = fs.readdirSync(staticfolder);

		for (const file of files) {
			const filePath = `${staticFolder}/${file}`;
			const key = file;

			await uploadFileToS3(filePath, key);
			console.log(`${file} uploaded to S3!`);
		}
		console.log('All files uploaded to S3 🎉');
	} catch (error) {
		console.error('Error uploading files to S3:', error);
	}
}

uploadStaticFilesToS3();
