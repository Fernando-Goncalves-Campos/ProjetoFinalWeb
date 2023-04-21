import { useState, useEffect, memo } from "react";
import ItemOption from "./ItemOption.js";
import './Store.css';

function Store({props}) {
    const [offers, setOffers] = useState(props.items.map(item => <ItemOption item={item} />));

    useEffect(() => {
        if(props.searchItem === ""){
            setOffers(props.items.map(item => <ItemOption props={props} item={item}/>));
        }
        else{
            setOffers(props.items.filter(item => item.name.toLowerCase().includes(props.searchItem)).map(item => <ItemOption props={props} item={item}/>));
        }
    }, [props.searchItem, props.items]);

    return (
        <div id="store">
            {offers}
        </div>
    );
}


export default memo(Store);