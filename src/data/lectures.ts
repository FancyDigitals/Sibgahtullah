export type Lecture = {
  slug: string;
  title: string;
  desc: string;
  speaker: string;
  category: string;
  duration: string;
  platform: "youtube" | "local";
  videoUrl?: string;     // optional (for local)
  videoId?: string;      // optional (for youtube)
  thumbnail?: string;
};

export const lectures: Lecture[] = [
  {
    slug: "understanding-faith",
    title: "Understanding Faith in the Modern World",
    desc: "A deep dive into maintaining strong faith in today's fast-changing society.",
    speaker: "Imam Abdul Wajuud Abdul-Lateef Adeleke (Al-Wajuudy)",
    duration: "20 mins",
    videoUrl: "/videos/lecture1.mp4",
    thumbnail: "/thumbnails/lecture1.jpg",
    platform: "local",
    category: "Faith",
  },
  {
    slug: "understanding-faith",
    title: "Understanding Faith in the Modern World",
    desc: "A deep dive into maintaining strong faith in today's fast-changing society.",
    speaker: "Imam Abdul Wajuud Abdul-Lateef Adeleke (Al-Wajuudy)",
    duration: "20 mins",
    videoUrl: "/videos/lecture1.mp4",
    thumbnail: "/thumbnails/lecture1.jpg",
    platform: "local",
    category: "Faith",
  },
];