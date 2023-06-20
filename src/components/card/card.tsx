import { Movie } from "../../lib/movies"
import "./card.scss"
import ProgressBar from "../progress-bar/progress-bar"
import React from "react"

const MovieCard = ({ movie }: { movie: Movie }) => {
	const [liked, setLiked] = React.useState(false)
	return (
		<div className={"movie_card"}>
			<img src={movie.image} />

			<div className="infos">
				<div>
					<p>{movie.title}</p>
					<img src={`/icons/${liked ? "heart-filled" : "heart"}.svg`} onClick={() => setLiked((l) => !l)} alt="heart" />
				</div>
				<ProgressBar progress={(movie.likes / (movie.likes + movie.dislikes)) * 100}></ProgressBar>
			</div>
			<div className="bin">
				<img src="/icons/trash.svg" alt="trash" />
			</div>
		</div>
	)
}

export default MovieCard
