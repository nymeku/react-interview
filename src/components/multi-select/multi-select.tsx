import React from "react"
import "./multi-select.scss"
const MultiSelect = ({ options, setOptions }: { options: { [key: string]: boolean }; setOptions: (arg: string, value: boolean) => void }) => {
	return (
		<div className="multi_container">
			{Object.keys(options).map((opt) => (
				<div key={opt}>
					<label>{opt}</label>
					<input type="checkbox" checked={options[opt]} onChange={(e) => setOptions(opt, e.target.checked)} />
				</div>
			))}
		</div>
	)
}

export default MultiSelect
