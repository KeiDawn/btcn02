import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-100 px-6 py-3 flex gap-4">
      <Link to="/" className="font-medium hover:underline">
        Home
      </Link>
      <Link to="/login" className="hover:underline">
        Login
      </Link>
      <Link to="/register" className="hover:underline">
        Register
      </Link>
    </nav>
  );
}
