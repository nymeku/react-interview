import React from "react"
import "./progress-bar.scss"

export type ProgressBarProps = {
	progress: number
	color?: string
	bgColor?: string
	textColor?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
	return (
		<div className="progress_container">
			<div className="thumbs">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="thumb">
					<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="thumb">
					<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
				</svg>
			</div>
			<div className="container">
				<div style={{ width: `${progress}%` }}></div>
			</div>
		</div>
	)
}

export default ProgressBar
