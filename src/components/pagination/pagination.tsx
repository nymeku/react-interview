import { useDispatch, useSelector } from "react-redux"
import "./pagination.scss"
import { RootState, decrementPage, incrementPage, updatePagination } from "../../lib/store"

const Pagination = () => {
	const pagination = useSelector((state: RootState) => state.pagination.pagination)
	const page = useSelector((state: RootState) => state.pagination.page)
	const max_page = useSelector((state: RootState) => state.movies).length
	const dispatch = useDispatch()
	const pages = [4, 8, 12]
	return (
		<div className="page_container">
			<p>Page : {String(page + 1)}</p>
			<div className="pagination_container" onClick={() => dispatch(decrementPage())}>
				<img src="/icons/chevron-left.svg" alt="chevron-left" />
				<select name="numbers" id="nb" onChange={(e) => dispatch(updatePagination(e.target.value))} defaultValue={pagination}>
					{pages.map((p) => (
						<option key={p}>{p}</option>
					))}
				</select>
				<img src="/icons/chevron-right.svg" alt="chevron-right" onClick={() => dispatch(incrementPage({ length: max_page }))} />
			</div>
		</div>
	)
}

export default Pagination
