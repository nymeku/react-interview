import { Movie } from "../../lib/movies"
import "./card.scss"
import ProgressBar from "../progress-bar/progress-bar"
import { dislike, like, remove } from "../../lib/store"
import { useDispatch } from "react-redux"

const MovieCard = ({ movie }: { movie: Movie }) => {
	const dispatch = useDispatch()
	return (
		<div className={"movie_card"}>
			<img src={movie.image} />

			<div className="infos">
				<div>
					<p>{movie.title}</p>
					<img src={`/icons/${movie.liked ? "heart-filled" : "heart"}.svg`} onClick={() => (!movie.liked ? dispatch(like(movie.id)) : dispatch(dislike(movie.id)))} alt="heart" />
				</div>
				<ProgressBar progress={(movie.likes / (movie.likes + movie.dislikes)) * 100}></ProgressBar>
			</div>
			<div className="bin" onClick={() => dispatch(remove(movie.id))}>
				<img src="/icons/trash.svg" alt="trash" />
			</div>
		</div>
	)
}

export default MovieCard
