import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-amber-100 border-b mt-2">
      <div className="h-12 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          {/* LEFT */}
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-700 hover:text-black"
          >
            <Home size={18} />
          </Link>

          {/* CENTER */}
          <div />

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1.5 bg-white border rounded-md text-sm
                         focus:outline-none focus:ring-2 focus:ring-amber-300"
            />

            <button
              className="px-4 py-1.5 text-sm rounded-md
                         bg-amber-200 text-gray-800
                         hover:bg-amber-300
                         active:bg-amber-400
                         transition"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
