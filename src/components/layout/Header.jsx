import { useState } from "react";
import { Settings, Moon, Sun } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const [dark, setDark] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className={`w-full ${dark ? "bg-gray-900" : "bg-blue-300"}`}>
      <div className="h-12 flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-4 flex items-center justify-between">
          {/* LEFT */}
          <div className="text-sm font-semibold text-white">21120608</div>

          {/* CENTER */}
          <h1 className="text-lg font-semibold tracking-wide text-white">
            Movies info
          </h1>

          {/* RIGHT */}
          <div className="flex items-center gap-3 text-white">
            {user && (
              <>
                <span className="text-sm">{user.username}</span>
                <button
                  onClick={logout}
                  className="px-2 py-1 text-sm rounded hover:bg-black/10"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
