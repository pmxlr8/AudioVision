import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
  region: "auto",
  endpoint: "https://b1cf212831a715e8f78595eac3587c44.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "ac5d52d7380e08d116334a3babbf2ecf",
    secretAccessKey:
      "ad0f3785ae8c25c7f80fbae75936efd2a7ae463d3a67fb201193ae9f116022b4",
  },
});

export async function uploadFileToBucket(file: File, filename: string) {
  const Key = filename;
  const Bucket = "connecting";

  let res;

  try {
    const parallelUploads = new Upload({
      client: s3Client,
      params: {
        Bucket,
        Key,
        Body: file.stream(),
        ACL: "public-read",
        ContentType: file.type,
      },
      queueSize: 4,
      leavePartsOnError: false,
    });

    res = await parallelUploads.done();
  } catch (e) {
    throw e;
  }

  return res;
}
