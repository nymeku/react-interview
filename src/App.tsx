import React from "react"
import "./App.scss"
import { Movie, movies$ } from "./lib/movies"
import MovieCard from "./components/card/card"
import MultiSelect from "./components/multi-select/multi-select"
import store from "./lib/store"

const getMovies = async () => {
	const movies = await movies$
	return movies
}

const App = () => {
	const [movies, setMovies] = React.useState<Movie[]>([])
	const [options, setOptions] = React.useState<{ [key: string]: boolean }>({})
	React.useEffect(() => {
		getMovies().then((res) => setMovies(res))
	}, [])
	React.useEffect(() => {
		const cats = Array.from(new Set(movies.map((mov) => mov.category)))
		cats.map((i) => {
			options[i] = false
		})
	}, [movies, options])
	const updateOpts = (key: string, value: boolean) => setOptions((old) => ({ ...old, [key]: value }))
	return (
		<main>
			<div>
				<MultiSelect options={options} setOptions={updateOpts} />
			</div>
			<div className={"movies_container"}>
				{movies.map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />
				})}
			</div>
		</main>
	)
}

export default App
