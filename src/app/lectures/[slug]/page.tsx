"use client";
import { lectures } from "@/data/lectures";

import { useParams } from "next/navigation";

export default function LectureDetailPage() {
  const params = useParams();
  const slug = params.slug;

  // FIND CURRENT LECTURE
  const lecture = lectures.find((l) => l.slug === slug);

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

      {/* VIDEO */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6">

          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <div className="aspect-video">

              {/* LOCAL VIDEO */}
              {lecture.platform === "local" ? (
                <video
                  controls
                  className="w-full h-full object-cover"
                >
                  <source src={lecture.videoUrl} type="video/mp4" />
                </video>
              ) : (
                /* YOUTUBE VIDEO */
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${lecture.videoId}`}
                  title="Lecture Video"
                  allowFullScreen
                ></iframe>
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