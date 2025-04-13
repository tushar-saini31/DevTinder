// snippet-start:[ses.JavaScript.createclientv3]
const { SESClient } = require("@aws-sdk/client-ses");
// Set the AWS Region.
const REGION = "eu-north-1";
// Create SES service object.
const sesClient = new SESClient({
  region: REGION,
  credentials: {
    accessKeyId: process.env.AWS_SES_access_key,
    secretAccessKey: process.env.AWS_SES_secret_key,
  },
});
module.export = { sesClient };
// snippet-end:[ses.JavaScript.createclientv3]
