import MostPopularMovies from "@/pages/movies/MostPopularMovies";
import PopularMoviesSlider from "@/pages/movies/PopularMoviesSlider";
import TopRatedMovies from "@/pages/movies/TopRatedMovies";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <Main>
      <MostPopularMovies />
      <PopularMoviesSlider />
      <TopRatedMovies />
    </Main>
  );
}
