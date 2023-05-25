import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useEffect, useState } from "react";

const RangeSlider = ({ width, priceRange, setPriceRange, startPrice }) => {
	const [value, setValue] = useState(priceRange);

	useEffect(() => {
		console.log(priceRange);
	}, [priceRange]);
	return (
		<Box sx={{ width: { width } }}>
			<Slider
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
		</Box>
	);
};

export default RangeSlider;
