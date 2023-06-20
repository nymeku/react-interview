export type Movie = {
	id: string
	title: string
	category: string
	likes: number
	dislikes: number
	image: string
	liked: boolean
}

const movies: Movie[] = [
	{
		id: "1",
		title: "Oceans 8",
		category: "Comedy",
		likes: 4,
		dislikes: 1,
		image: "https://m.media-amazon.com/images/M/MV5BZWQ2M2YxODAtMzZkZS00Mjc1LWE4YzctZjc4YjY1OThkNzE1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY1830_.jpg",
		liked: false,
	},
	{
		id: "2",
		title: "Midnight Sun",
		category: "Comedy",
		likes: 2,
		dislikes: 0,
		image: "https://m.media-amazon.com/images/M/MV5BZGQ0MzBkMDEtZWU3MC00NGY3LThjOTgtN2I3NzExMTMwNDk4XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg",
		liked: false,
	},
	{
		id: "3",
		title: "Les indestructibles 2",
		category: "Animation",
		likes: 3,
		dislikes: 1,
		image: "https://m.media-amazon.com/images/M/MV5BYzk5ZGMwZWMtODdjZS00MTE3LTgyN2YtZTQwZjk2YmRmMDJmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1175_.jpg",
		liked: false,
	},
	{
		id: "4",
		title: "Sans un bruit",
		category: "Thriller",
		likes: 6,
		dislikes: 6,
		image: "https://m.media-amazon.com/images/M/MV5BYWFlMjY3M2YtYTFlYi00YzE5LWE0ZGItYTE3YWU1ZGU5NWEwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY3906_.jpg",
		liked: false,
	},
	{
		id: "5",
		title: "Creed II",
		category: "Drame",
		likes: 16,
		dislikes: 2,
		image: "https://m.media-amazon.com/images/M/MV5BMzkzNjc3ZGYtOTAwYy00ZTY3LTljMGUtZDhkYzkwMjE0YTM0XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg",
		liked: false,
	},
	{
		id: "6",
		title: "Pulp Fiction",
		category: "Thriller",
		likes: 11,
		dislikes: 3,
		image: "https://m.media-amazon.com/images/M/MV5BMjc2ODkzZDEtOWI3Ny00NzBhLWFlY2QtMWVlOTE4YTRjZGZkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg",
		liked: false,
	},
	{
		id: "7",
		title: "Pulp Fiction",
		category: "Thriller",
		likes: 12333,
		dislikes: 32,
		image: "https://m.media-amazon.com/images/M/MV5BMjc2ODkzZDEtOWI3Ny00NzBhLWFlY2QtMWVlOTE4YTRjZGZkXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg",
		liked: false,
	},
	{
		id: "8",
		title: "Seven",
		category: "Thriller",
		likes: 2,
		dislikes: 1,
		image: "https://m.media-amazon.com/images/M/MV5BMmJlNmU0MjMtYmVkZS00ZDdiLTljZjQtYTA2YWRjYTI1OWYxXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_FMjpg_UX600_.jpg",
		liked: false,
	},
	{
		id: "9",
		title: "Inception",
		category: "Thriller",
		likes: 2,
		dislikes: 1,
		image: "https://m.media-amazon.com/images/M/MV5BZjkwMGZhOWQtMTZmZS00OTMyLWFmNzctYTJkMzA5YWY5NmQ1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UY720_.jpg",
		liked: false,
	},
	{
		id: "10",
		title: "Gone Girl",
		category: "Thriller",
		likes: 22,
		dislikes: 12,
		image: "https://m.media-amazon.com/images/M/MV5BMTM0MWVkNzYtODljYS00MmM2LTlkMTEtYzU2ZTdkYjE2NGEyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX220_.jpg",
		liked: false,
	},
]

export const movies$ = new Promise<Movie[]>((resolve) => setTimeout(resolve, 100, movies))
