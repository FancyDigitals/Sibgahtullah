import Link from "next/link";

export default function BlogPage() {
  const posts = [
    {
      slug: "understanding-modern-faith",
      title: "Understanding Faith in the Modern World",
      desc: "How to stay grounded in faith while navigating today’s fast-paced society.",
      category: "Faith",
      author: "Admin",
      readTime: "5 min read",
    },
    {
      slug: "seeking-knowledge",
      title: "The Importance of Seeking Knowledge",
      desc: "Why knowledge is the foundation of growth and transformation.",
      category: "Knowledge",
      author: "Admin",
      readTime: "6 min read",
    },
    {
      slug: "spiritual-discipline",
      title: "Building Spiritual Discipline",
      desc: "Simple habits that strengthen your relationship with Allah daily.",
      category: "Spirituality",
      author: "Admin",
      readTime: "4 min read",
    },
    {
      slug: "clarity-in-confusion",
      title: "Finding Clarity in Times of Confusion",
      desc: "How to stay guided when faced with uncertainty.",
      category: "Guidance",
      author: "Admin",
      readTime: "5 min read",
    },
    {
      slug: "purpose-driven-life",
      title: "Living a Purpose-Driven Life",
      desc: "Understanding your role and responsibility as a Muslim.",
      category: "Purpose",
      author: "Admin",
      readTime: "7 min read",
    },
    {
      slug: "strengthening-iman",
      title: "Strengthening Your Iman",
      desc: "Practical ways to build and maintain strong faith.",
      category: "Faith",
      author: "Admin",
      readTime: "5 min read",
    },
  ];

  return (
    <main className="bg-primary text-white">

      {/* HERO */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-5xl md:text-6xl font-bold text-gold">
            Articles & Insights
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Explore knowledge, reflections, and guidance for modern life.
          </p>

        </div>
      </section>

      {/* SEARCH */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">

          <input
            type="text"
            placeholder="Search articles..."
            className="w-full md:w-1/3 px-4 py-3 rounded-lg bg-dark border border-gray-800 focus:outline-none text-sm focus:border-gold transition"
          />

        </div>
      </section>

      {/* GRID */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>

              <div className="group cursor-pointer bg-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-gold transition duration-300">

                {/* Image */}
                <div className="h-48 bg-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
                </div>

                {/* Content */}
                <div className="p-5">

                  <p className="text-xs text-gray-500">{post.category}</p>

                  <h3 className="mt-2 text-lg font-semibold text-gold group-hover:underline">
                    {post.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {post.desc}
                  </p>

                  <div className="mt-4 flex justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                </div>

              </div>

            </Link>
          ))}

        </div>
      </section>

    </main>
  );
}