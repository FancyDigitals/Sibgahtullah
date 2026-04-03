export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gold">
            SIBGAHTULLAH
          </h2>

          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            A modern Islamic foundation merging timeless revelation with 
            contemporary knowledge for global impact.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-gold transition cursor-pointer">Lectures</li>
            <li className="hover:text-gold transition cursor-pointer">Events</li>
            <li className="hover:text-gold transition cursor-pointer">About</li>
            <li className="hover:text-gold transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-gold transition cursor-pointer">Articles</li>
            <li className="hover:text-gold transition cursor-pointer">Programs</li>
            <li className="hover:text-gold transition cursor-pointer">Community</li>
            <li className="hover:text-gold transition cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-gold font-semibold mb-4">Stay Updated</h3>

          <p className="text-gray-400 text-sm mb-4">
            Get the latest lectures and events directly.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-lg bg-black border border-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-gold text-black px-5 rounded-r-lg font-semibold hover:opacity-90 transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} SIBGAHTULLAH. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-gold cursor-pointer transition">Privacy</span>
            <span className="hover:text-gold cursor-pointer transition">Terms</span>
            <span className="hover:text-gold cursor-pointer transition">Contact</span>
          </div>

        </div>
      </div>
    </footer>
  );
}