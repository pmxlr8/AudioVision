import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";

const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.NEXT_PUBLIC_ENDPOINT || "",
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_ACESS_ID || "",
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET || "",
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
