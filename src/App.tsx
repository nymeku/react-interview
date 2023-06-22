import "./App.scss"
import { Movie } from "./lib/movies"
import MovieCard from "./components/card/card"
import { RootState, remove } from "./lib/store"
import { useSelector } from "react-redux"
import Pagination from "./components/pagination/pagination"
import React from "react"
import MultiSelect from "./components/multi-select/multi-select"

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
		}
	}, [selectedCategories, movies])

	function addCat(value: string) {
		setselectedCategories((old) => old.add(value))
	}
	function removeCat(value: string) {
		setselectedCategories((old) => {
			old.delete(value)
			return old
		})
	}
	console.log({ selectedCategories })
	return (
		<main>
			<div className="pagination">
				<Pagination />
			</div>
			<div style={{ backgroundColor: "red", width: "100px", height: "100px" }}>
				<MultiSelect options={categories} active={selectedCategories} add={addCat} remove={removeCat} />
			</div>
			<div className={"movies_container"}>
				{filteredMovies.slice(page * pagination, (page + 1) * pagination).map((movie) => {
					return <MovieCard key={movie.id} movie={movie} />
				})}
			</div>
		</main>
	)
}

export default App
