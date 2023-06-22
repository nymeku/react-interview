import "./multi-select.scss"

const MultiSelect = ({ options, active, add, remove }: { options: Set<string>; active: Set<string>; add: (value: string) => void; remove: (value: string) => void }) => {
	console.log(options, active)
	return (
		<div className="multi_container">
			{Array.from(options).map((opt) => (
				<div key={opt}>
					<label>{opt}</label>
					<input type="checkbox" onChange={(e) => (e.target.checked === true ? add(opt) : remove(opt))} />
				</div>
			))}
		</div>
	)
}

export default MultiSelect
