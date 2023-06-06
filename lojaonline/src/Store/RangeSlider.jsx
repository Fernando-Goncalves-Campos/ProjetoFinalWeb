import Slider from "@mui/material/Slider";
import { useState } from "react";

const RangeSlider = ({ priceRange, setPriceRange, startPrice }) => {
	return (
		<Slider
			sx={{
				width: "100%",
				color: "var(--text-color-nav)",
			}}
			getAriaLabel={() => "Temperature range"}
			value={priceRange}
			min={startPrice[0]}
			max={startPrice[1]}
			onChange={(e) => {
				let val = e.target.value;
				if (val[1] - val[0] > 10) {
					setPriceRange(val);
				}
			}}
			valueLabelDisplay="auto"
			disableSwap
		/>
	);
};

export default RangeSlider;
