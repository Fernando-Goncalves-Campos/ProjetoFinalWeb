import { memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './ItemDetails.css';

function ItemDetails({props}) {
    const {itemId} = useParams();
    const item = props.items.find(object => object.id === itemId);
    
    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();

    //Realiza a compra
    function handleBuy(){
        //Modifica os valores que salvam as quantidades do item em estoque e vendidos
        item.quantity -= 1;
        item.quantitySold += 1;
        
        //Atualiza os dados do item na lista de itens
        props.setItems(
            props.items.map(prevItems => 
                prevItems.id === item.id ?
                {   
                    name: item.name,
                    id: item.id,
                    photo: item.photo,
                    description: item.description,
                    price: item.price,
                    quantity: item.quantity,
                    quantitySold: item.quantitySold
                }
                : {...prevItems}
        ));
        navigate("/");
    }

    
    //Determina se é possível realizar a compra (se existem itens em estoque)
    let buyButton = <button id="buyButton" onClick={handleBuy}>{item.price}</button>;

    if(item.quantity > 0){
        buyButton = <button id="buyButton" onClick={handleBuy}>{item.price}</button>;
    }
    else{
        buyButton = <button id="buyButton" disabled onClick={handleBuy}>Sold Out</button>
    }

    return (
        <div id="itemDetails">
            <img src={item.photo} alt={item.name} id="detailsImg" />
            <div id="detailsContainer">
                <span id="detailsName">{item.name}</span> <br/>
                <span id="detailsId">{item.id}</span> <br/><br/>
                <p id="detailsText">{item.description}</p> <br/><br/>
                <span id="detailsQuantity">{item.quantity}</span> <br/>

                {buyButton}
            </div>
        </div>
    );
}


export default memo(ItemDetails);