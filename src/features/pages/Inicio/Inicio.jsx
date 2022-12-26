import { useFetch, TMDBServices } from "commons/services";
import { Carrousel, Peliculas } from "features";
import SwipImages_peliculas, { SwipImages } from "features/SwipImages/SwipImages_peliculas";
import { SwipImages_series } from "features/SwipImages/SwipImages_series";

export const Inicio = () => {
  const {
    data: dataSeries,
    error: errorSeries,
    isLoading: isLoadingSeries,
  } = useFetch(TMDBServices.getTopRatedSeries);
  const {
    data: dataMovies,
    error: errorMovies,
    isLoading: isLoadingMovies,
  } = useFetch(TMDBServices.getTopRatedMovies);
  if (errorSeries) console.error(errorSeries);
  if (errorMovies) console.error(errorMovies);

  return <>
  <div className="container m-0 p-0">
    {/* <Carrousel data={dataSeries} isLoading={isLoadingSeries}/>
    <Carrousel data={dataMovies} isLoading={isLoadingMovies}/> */}
    <SwipImages_peliculas />
    <SwipImages_series />
  </div>
  </>;

}