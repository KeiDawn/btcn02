import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import Profile from "@/pages/profile/Profile";
import Favourites from "@/pages/profile/Favourites";
import ProtectedRoute from "@/components/common/ProtectedRoute";
import MovieSearch from "@/pages/movies/MovieSearch";
import MovieSearchByPerson from "@/pages/movies/MovieSearchByPerson";
import MovieDetail from "@/pages/movies/MovieDetail";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "/favourites",
        element: (
          <ProtectedRoute>
            <Favourites />
          </ProtectedRoute>
        ),
      },

      {
        path: "/movies/search",
        element: <MovieSearch />,
      },

      {
        path: "/movies/search-by-person",
        element: <MovieSearchByPerson />,
      },

      {
        path: "/movies/:id",
        element: <MovieDetail />,
      },

      // {
      //   path: "/persons/:id",
      //   element: <PersonDetail />,
      // },
    ],
  },
]);
