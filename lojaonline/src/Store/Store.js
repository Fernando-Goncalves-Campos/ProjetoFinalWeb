import { useState, useEffect, memo } from "react";
import ItemOption from "./ItemOption.js";
import './Store.css';

function Store({items, searchItem}) {
    //Cria os elementos para os itens que estão à venda
    const [offers, setOffers] = useState(items.map(item => <ItemOption item={item} />));

    //Filtra os itens de acordo com a barra de pesquisa
    useEffect(() => {
        if(searchItem === ""){
            setOffers(items.map(item => <ItemOption item={item}/>));
        }
        else{
            setOffers(items.filter(item => item.name.toLowerCase().includes(searchItem)).map(item => <ItemOption item={item}/>));
        }
    }, [searchItem, items]);

    return (
        <div id="store">
            {offers}
        </div>
    );
}


export default memo(Store);