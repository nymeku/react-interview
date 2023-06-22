import "./App.scss"
import { Movie } from "./lib/movies"
import MovieCard from "./components/card/card"
import { RootState } from "./lib/store"
import { useSelector } from "react-redux"
import Pagination from "./components/pagination/pagination"
import React from "react"
import { MultiSelectItem, MultiSelect } from "@tremor/react"

const App = () => {
	const movies: Movie[] = useSelector((state: RootState) => state.movies)
	const [filteredMovies, setfilteredMovies] = React.useState(movies)
	const pagination = useSelector((state: RootState) => state.pagination.pagination)
	const page = useSelector((state: RootState) => state.pagination.page)
	const categories = new Set([...movies.map((i) => i.category)])
	const [selectedCategories, setselectedCategories] = React.useState<Set<string>>(new Set())
	React.useEffect(() => {
		if (selectedCategories.size > 0) {
			setfilteredMovies(movies.filter((mov) => selectedCategories.has(mov.category)))
		} else {
			setfilteredMovies(movies)
		}
	}, [selectedCategories, movies])

	return (
		<main>
			<div className="pagination">
				<Pagination />
			</div>
			<MultiSelect className="max-w-sm mx-auto" onValueChange={(e) => setselectedCategories(new Set([...e]))}>
				{Array.from(categories).map((item) => (
					<MultiSelectItem value={item} />
				))}
			</MultiSelect>
			<div className={"movies_container"}>
				{filteredMovies.slice(page * pagination, (page + 1) * pagination).map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />
				})}
			</div>
		</main>
	)
}

export default App
