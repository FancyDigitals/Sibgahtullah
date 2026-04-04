"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { lectures } from "@/data/lectures";

export default function LectureDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const lecture = lectures.find((l) => l.slug === slug);

  const [play, setPlay] = useState(false);

  const getThumbnail = () => {
    if (lecture?.platform === "youtube" && lecture.videoId) {
      return `https://img.youtube.com/vi/${lecture.videoId}/hqdefault.jpg`;
    }
    return lecture?.thumbnail || "/fallback.jpg";
  };

  if (!lecture) {
    return <div className="text-white p-10">Lecture not found</div>;
  }

  return (
    <main className="bg-primary text-white">

      {/* HERO */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gold">
            {lecture.title}
          </h1>

          <p className="mt-4 text-gray-400">
            By {lecture.speaker} • {lecture.duration}
          </p>
        </div>
      </section>

      {/* VIDEO (LAZY LOADED) */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <div className="aspect-video relative">

              {/* THUMBNAIL */}
              {!play && (
                <div
                  className="absolute inset-0 cursor-pointer group"
                  onClick={() => setPlay(true)}
                >
                  <img
                    src={getThumbnail()}
                    alt={lecture.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition">
                      <svg
                        className="w-6 h-6 text-black ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* VIDEO PLAYER */}
              {play && (
                lecture.platform === "local" ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-cover"
                  >
                    <source src={lecture.videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${lecture.videoId}?autoplay=1`}
                    title="Lecture Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                )
              )}

            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-semibold text-gold">
            About this Lecture
          </h2>

          <p className="mt-4 text-gray-300 leading-relaxed">
            This lecture explores key insights into faith, knowledge, and personal development.
          </p>

          <div className="mt-8 border-t border-gray-800 pt-6 text-sm text-gray-400">
            <p>Category: {lecture.category}</p>
            <p className="mt-2">Published: 2026</p>
          </div>
        </div>
      </section>

    </main>
  );
}