import { memo } from "react";
import { useNavigate } from "react-router-dom";
import './Store.css';

function ItemOption({props, item}) {
    const navigate = useNavigate();
    function login(){
        navigate("/login");
    }

    function buy(){
        navigate(`/${item.id}/itemDetails`);
    }

    function editItem(){
        navigate(`/${item.id}/editItem`);
    }

    let click = login;

    if(props !== undefined){
        if(!props.logged){
            click = login;
        }
        else if(!props.adm){
            click = buy;
        }
        else{
            click = editItem;
        }
    }
    
    return (
        <div className="storeItem" onClick={click}>
            <img src={item.photo} alt={item.name} /> <br />
            <span className="itemName"> {item.name} </span> <br />
            <span className="itemId"> {item.id} </span> <br />
            <span className="itemPrice"> {item.price} </span> <br />
        </div>
    );
}


export default memo(ItemOption);