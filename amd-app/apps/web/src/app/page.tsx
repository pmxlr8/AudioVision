"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Page() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative flex flex-col">
      {/* Header */}
      <header className="w-full py-5 px-8 bg-black bg-opacity-90 flex justify-between items-center fixed top-0 left-0 z-30 shadow-lg backdrop-blur-md">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
          AudioVision
        </h1>
        <div>
          {session?.user ? (
            <div className="flex gap-4">
              <button
                onClick={() => {
                  router.push("/allVideos");
                }}
                className="px-6 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-green-500 to-teal-500 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Videos
              </button>
              <button
                onClick={() => {
                  signOut();
                }}
                className="px-6 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="px-6 py-2 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Login / Signup
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow w-full pt-32 sm:pt-40 relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="relative z-20 text-center">
          <h2 className="text-5xl sm:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 mb-6 tracking-tight">
            Bring Life to Your Videos
          </h2>
          <p className="text-lg sm:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Transform your black and white videos into vibrant, full-color
            experiences. Our cutting-edge Python scripts and AI models add
            stunning color and lifelike audio to your silent videos, breathing
            new life into your memories.
          </p>
          <button
            onClick={() => {
              router.push("/upload");
            }}
            className="px-12 py-4 mt-6 text-lg sm:text-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-green-500 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
