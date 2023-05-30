import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

const RangeSlider = ({ priceRange, setPriceRange, startPrice }) => {
	const [value, setValue] = useState(priceRange);

	useEffect(() => {
		console.log(priceRange);
	}, [priceRange]);
	return (
		<Slider
			sx={{
				width: "100%",
			}}
			getAriaLabel={() => "Temperature range"}
			value={value}
			min={startPrice[0]}
			max={startPrice[1]}
			onChange={(e) => {
				let val = e.target.value;
				if (val[1] - val[0] > 10) {
					setValue(val);
					setPriceRange(val);
				}
			}}
			valueLabelDisplay="auto"
			disableSwap
		/>
	);
};

export default RangeSlider;
