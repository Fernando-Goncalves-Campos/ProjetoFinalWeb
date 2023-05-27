import { useState, useEffect, memo } from "react";
import ItemOption from "./ItemOption.js";
import "./Store.css";
import RangeSlider from "./RangeSlider.jsx";
function Store({ items, searchItem, priceRange, setPriceRange }) {
	//Cria os elementos para os itens que estão à venda
	const [offers, setOffers] = useState(
		items.map((item) => <ItemOption item={item} />)
	);

	let startPrice = [items[0].price, items[0].price];

	const setRange = () => {
		items.forEach((item) => {
			if (item.price < startPrice[0]) {
				startPrice[0] = item.price;
			} else if (item.price > startPrice[1]) {
				startPrice[1] = item.price;
			}
		});
	};

	setRange();
	//Filtra os itens de acordo com a barra de pesquisa
	useEffect(() => {
		if (searchItem === "") {
			setOffers(
				items
					.filter(
						(item) => item.price >= priceRange[0] && item.price <= priceRange[1]
					)
					.map((item) => <ItemOption item={item} />)
			);
		} else {
			setOffers(
				items
					.filter(
						(item) =>
							item.name.toLowerCase().includes(searchItem) &&
							item.price >= priceRange[0] &&
							item.price <= priceRange[1]
					)
					.map((item) => <ItemOption item={item} />)
			);
		}
	}, [searchItem, items, priceRange]);

	useEffect(() => {
		setRange();
	}, [items]);

	return (
		<div class="float-container">
			<div id="filter" class="float-child">
				<RangeSlider
					id="slider"
					width={200}
					priceRange={priceRange}
					setPriceRange={(value) => setPriceRange(value)}
					startPrice={startPrice}
				/>
			</div>
			<div id="store" class="float-child">
				{offers}
			</div>
		</div>
	);
}

export default memo(Store);
