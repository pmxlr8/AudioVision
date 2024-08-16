"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../components/background-beams";
import { FileUpload } from "../components/file-upload";
import axios from "axios";
import { useSession } from "next-auth/react";
import { uploadFileToBucket } from "../utils";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (uploadedFiles: File[]) => {
    setFile(uploadedFiles[0]);
  };

  const handleEnhanceClick = async () => {
    if (file) {
      setLoading(true);
      const res = await axios.post("api/addVideo", {
        userId: session?.user?.id,
      });

      await uploadFileToBucket(file, `input-video/${res.data.video.id}`);
      const input = `https://pub-06a3c152459442c4b04c4870d49d98f2.r2.dev/input-video/${res.data.video.id}`;
      console.log("video uploaded")
      const runScript = await axios.post("api/runScript", {
        id: res.data.video.id,
        url: input
      });

      // I want to upload the file from a particular location

      const output = `https://pub-06a3c152459442c4b04c4870d49d98f2.r2.dev/output-video/${res.data.id}`;

      const updateVideo = await axios.post("api/updateVideo", {
        id: res.data.video.id,
        input,
        output,
      });

      if (updateVideo.status === 200) {
        setFile(null);
        setLoading(false);
        router.push(`/video/${res.data.video.id}`);
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Upload your video to Enhance
        </h1>

        <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-black border-neutral-800 rounded-lg">
          <FileUpload onChange={handleFileUpload} />
        </div>

        {file && !loading && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleEnhanceClick}
              className="absolute z-10 px-12 py-4 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-green-500 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out"
            >
              Enhance Video
            </button>
          </div>
        )}

        {loading && (
          <div className="mt-4 flex flex-col items-center z-20 relative">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <p className="text-neutral-300 mt-4 text-lg">
              Your video is being enhanced...
            </p>
          </div>
        )}
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Page;
