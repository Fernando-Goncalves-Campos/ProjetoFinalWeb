import { memo } from "react";
import './Store.css';

function ItemOption({props, item}) {
    return (
        <div className="storeItem">
            <img src={item.photo} alt={item.name} /> <br />
            <span className="itemName"> {item.name} </span> <br />
            <span className="itemId"> {item.id} </span> <br />
            <span className="itemPrice"> {item.price} </span> <br />
        </div>
    );
}


export default memo(ItemOption);