"use client";

import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "../../components/background-beams";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

function Page() {
  const router = useRouter();
  const { data: session } = useSession();
  const [inputVideo, setInputVideo] = useState<string | null>(null);
  const [outputVideo, setOutputVideo] = useState<string | null>(null);
  const url = "https://pub-06a3c152459442c4b04c4870d49d98f2.r2.dev/Casino2.mp4";

  //   useEffect(() => {
  //     const id = useSearchParams().get("id");
  //     const getVideos = async () => {
  //       const res = await axios.post(`/api/getVideos`, {
  //         id,
  //       });
  //       setInputVideo(res.data.input);
  //       setOutputVideo(res.data.output);
  //     };
  //     getVideos();
  //   }, []);

  const input = "https://pub-06a3c152459442c4b04c4870d49d98f2.r2.dev/Y2meta.app-original%20video.mp4"
  const output = "https://pub-06a3c152459442c4b04c4870d49d98f2.r2.dev/Y2meta.app-Final%20Result.mp4"

  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Videos
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-8">
          {!inputVideo && (
            <div className="flex-1 z-10">
              <h2 className="text-center text-lg md:text-xl font-semibold text-neutral-200 mb-4">
                Input Video
              </h2>
              <video
                src={input}
                controls
                className="w-full max-w-full rounded-lg shadow-lg"
              />
            </div>
          )}
          {!outputVideo && (
            <div className="flex-1 z-10">
              <h2 className="text-center text-lg md:text-xl font-semibold text-neutral-200 mb-4">
                Output Video
              </h2>
              <video
                src={output}
                controls
                className="w-full max-w-full rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Page;