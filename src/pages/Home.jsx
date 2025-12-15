import MostPopularMovies from "@/pages/movies/MostPopularMovies";
import PopularMoviesSlider from "@/pages/movies/PopularMoviesSlider";
import Main from "@/components/layout/Main";

export default function Home() {
  return (
    <Main>
      <MostPopularMovies />
      <PopularMoviesSlider />
    </Main>
  );
}
