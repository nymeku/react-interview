import { Movie, movies$ } from "./movies"
import { configureStore, createSlice } from "@reduxjs/toolkit"

const updateLike = (state: Movie[], movieId: string, action: "LIKE" | "DISLIKE") => {
	const item = state.find((mov) => movieId === mov.id)
	const itemIdx = state.findIndex((mov) => movieId === mov.id)
	if (!item) throw Error("missing movie in state")
	const newItem: Movie = {
		...item,
		liked: action === "LIKE" ? true : false,
		likes: action === "LIKE" ? item?.likes + 1 : item.likes - 1,
		dislikes: action === "DISLIKE" ? item.dislikes + 1 : item.dislikes - 1,
	}
	state[itemIdx] = newItem
}

const initialState: Movie[] = await movies$

const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		like: (state, { payload: movieId }) => updateLike(state, movieId, "LIKE"),
		dislike: (state, { payload: movieId }) => updateLike(state, movieId, "DISLIKE"),
		remove: (state, { payload: movieId }) => state.filter((mov) => mov.id !== movieId),
	},
})

export const { like, dislike, remove } = moviesSlice.actions

const store = configureStore({
	reducer: {
		movies: moviesSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export default store
