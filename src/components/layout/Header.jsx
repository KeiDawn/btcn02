import { Settings, Moon, Sun } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { dark, toggleDark } = useTheme();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="p-1 rounded hover:bg-black/20 transition"
            >
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {user ? (
              <>
                <span className="text-sm">{user.username}</span>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 text-sm rounded hover:bg-black/10"
                >
                  Logout
                </button>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
