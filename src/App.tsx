import "./App.scss"
import { Movie } from "./lib/movies"
import MovieCard from "./components/card/card"
import { RootState } from "./lib/store"
import { useSelector } from "react-redux"

const App = () => {
	const movies: Movie[] = useSelector((state: RootState) => state.movies)
	console.log(movies)
	return (
		<main>
			<div className={"movies_container"}>
				{movies.map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />
				})}
			</div>
		</main>
	)
}

export default App
