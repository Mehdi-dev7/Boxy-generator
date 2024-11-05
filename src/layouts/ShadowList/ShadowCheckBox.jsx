import { useDispatch, useSelector } from "react-redux";
import { updateCheckbox } from "../../features/shadows";

export default function ShadowCheckBox({ name, shadowID }) {
	const checkboxShadow = useSelector((state) =>
		state.shadows.find((shadow) => shadow.id === shadowID)
	);
	const dispatch = useDispatch();
	//console.log(checkboxShadow);

	return (
		<>
			<input
				onChange={() => dispatch(updateCheckbox({ shadowID, name }))}
				type="checkbox"
				checked={checkboxShadow[name]}
				id={`checkbox-${name}-${shadowID}`}
				className="h-4 w-4 border-gray-300 rounded mr-2 accent-blue-600"
			/>

			<label
				className="leading-4 mr-5"
				htmlFor={`checkbox-${name}-${shadowID}`}
			>
				{name.charAt(0).toUpperCase() + name.slice(1)}
			</label>
		</>
	);
}
