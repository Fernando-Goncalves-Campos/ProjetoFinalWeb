import React, { useState, useEffect, memo } from "react";
import ItemOption from "./ItemOption.js";
import "./Store.css";
import RangeSlider from "./RangeSlider.jsx";

import Carousel from "react-material-ui-carousel";

function Store({ items, searchItem, priceRange, setPriceRange }) {
	//Cria os elementos para os itens que estão à venda
	const [offers, setOffers] = useState(
		items.map((item) => <ItemOption key={item.id} item={item} />)
	);

	const [startPrice, setStartPrice] = useState([0, 0])

	const setRange = () => {
		items.forEach((item) => {
			if (item.price < startPrice[0]) {
				startPrice[0] = item.price;
			} else if (item.price > startPrice[1]) {
				startPrice[1] = item.price;
			}
		});
	};

	//Filtra os itens de acordo com a barra de pesquisa
	useEffect(() => {
        setRange()
		if (searchItem === "") {
			setOffers(
				items
					.filter(
						(item) => item.price >= priceRange[0] && item.price <= priceRange[1]
					)
					.map((item) => <ItemOption key={item.id} item={item} />)
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
					.map((item) => <ItemOption key={item.id} item={item} />)
			);
		}
	}, [searchItem, items, priceRange]);

	let images = [
		"https://http2.mlstatic.com/D_NQ_630919-MLA69532845491_052023-OO.webp",
		"https://http2.mlstatic.com/D_NQ_817571-MLA69622836112_052023-OO.webp",
	];
	useEffect(() => {
		setRange();
	}, [items]);

	return (
		<div id="store">
			<div id="carousel">
				<Carousel>
					{images.map((link) => (
						<img className="carousel-img" key={link} src={link} alt="carousel"/>
					))}
				</Carousel>
			</div>
			<div className="float-container">
				<div id="filter" className="float-child">
					<p>Filter</p>

					<div id="price-slider">
						<p>Price Range:</p>
						<RangeSlider
							priceRange={priceRange}
							setPriceRange={(value) => setPriceRange(value)}
							startPrice={startPrice}
						/>
						<div id="range-label">
							<p id="min-t">{startPrice[0]}</p>
							<p id="max-t">{startPrice[1]}</p>
						</div>
					</div>
				</div>
				<div id="itens" className="float-child">
					{offers}
				</div>
			</div>
		</div>
	);
}

export default memo(Store);
