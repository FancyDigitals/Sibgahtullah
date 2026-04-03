export default function BlogDetailPage({ params }) {
  const { slug } = params;

  return (
    <main className="bg-primary text-white">

      {/* HERO */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <p className="text-sm text-gray-500">Category • 5 min read</p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gold leading-tight">
            Blog Title ({slug})
          </h1>

          <p className="mt-4 text-gray-400 text-sm">
            By Author Name • Published 2026
          </p>

        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className="pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-64 md:h-96 bg-gray-800 rounded-2xl"></div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-6">

          <article className="prose prose-invert max-w-none">

            <p>
              This is where your blog content will go. You can write long-form articles here 
              that provide value, clarity, and insight to your audience.
            </p>

            <h2>Understanding the Topic</h2>

            <p>
              Expand deeply into the subject. This section should educate, inspire, 
              and guide readers with real substance.
            </p>

            <blockquote>
              A powerful quote or reflection can go here to emphasize your message.
            </blockquote>

            <h2>Practical Takeaways</h2>

            <ul>
              <li>Point one that adds value</li>
              <li>Point two that teaches something real</li>
              <li>Point three that encourages action</li>
            </ul>

            <p>
              Conclude with clarity and a strong takeaway that leaves the reader thinking.
            </p>

          </article>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-primary to-dark text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-gold">
            Want More Insights Like This?
          </h2>

          <p className="mt-4 text-gray-300">
            Explore more articles and deepen your understanding.
          </p>

          <a
            href="/blog"
            className="inline-block mt-6 bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Back to Blog
          </a>

        </div>
      </section>

    </main>
  );
}