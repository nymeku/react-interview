import "./blur.scss"

const Blur = ({ visible = false }) => {
	return (
		<div className="blur_container" style={{ display: visible ? "flex" : "none" }}>
			<div className="blur_container_like"></div>
			<div className="blur_container_delete"></div>
		</div>
	)
}

export default Blur
