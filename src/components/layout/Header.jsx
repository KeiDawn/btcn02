import { useState } from "react";
import { Settings, Moon, Sun } from "lucide-react";

export default function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header className="w-full bg-blue-300">
      <div className="h-12 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          {/* LEFT */}
          <div className="text-sm font-semibold text-white">21120608</div>

          {/* CENTER */}
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Movies info
          </h1>

          {/* RIGHT */}
          <div className="flex items-center gap-2 text-white">
            <button
              onClick={() => setDark(!dark)}
              className="p-1.5 rounded hover:bg-black/10 transition"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button className="p-1.5 rounded hover:bg-black/10 transition">
              <Settings size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
