"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Container from "../ui/Container";
import { lectures, type Lecture } from "@/data/lectures";
import SectionTitle from "../ui/SectionTitle";

export default function FeaturedLectures() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const getThumbnail = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  return (
    <section className="py-20 relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <Container>
        <SectionTitle 
          title="Featured Lectures"
          subtitle="Watch powerful and inspiring sessions"
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {lectures.map((lecture: Lecture, index) => {
            
            const imageSrc =
              lecture.platform === "youtube" && lecture.videoId
                ? getThumbnail(lecture.videoId)
                : lecture.thumbnail || "/fallback.jpg";

            return (
              <div
                key={lecture.slug}
                className="rounded-xl overflow-hidden border group hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 transition-all duration-500 bg-white relative"
                style={{
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  opacity: isLoaded ? 1 : 0,
                  transition: `all 0.5s ease ${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredCard(lecture.slug)}
                onMouseLeave={() => setHoveredCard(null)}
              >

                {/* Thumbnail */}
                <div className="h-48 relative overflow-hidden">
                  <Image
  src={imageSrc}
  alt={lecture.title}
  fill
  sizes="(max-width: 768px) 100vw, 33vw"
  priority={index === 0}
  className="object-cover group-hover:scale-110 transition-transform duration-700"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-full bg-purple-500/90 text-white text-xs">
                    {lecture.category}
                  </span>

                  <span className="absolute top-4 right-4 px-2 py-1 bg-black/60 text-white text-xs rounded-lg">
                    {lecture.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                      {lecture.speaker?.charAt(0)}
                    </div>
                    <p className="text-xs text-gray-500">
                      {lecture.speaker}
                    </p>
                  </div>

                  <h3 className="font-medium text-gray-900 group-hover:text-purple-600 transition">
                    {lecture.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    {lecture.desc || "No description available"}
                  </p>

                  <Link href={`/lectures/${lecture.slug}`}>
                    <button className="mt-4 w-full py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg text-sm hover:shadow-lg hover:shadow-purple-500/25 transition">
                      Watch Lecture
                    </button>
                  </Link>

                  <div className="mt-3 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-700"
                      style={{
                        width: hoveredCard === lecture.slug ? "30%" : "0%",
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}