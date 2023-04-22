import { memo } from "react";
import { useNavigate } from "react-router-dom";
import './Store.css';

function ItemOption({props, item}) {
    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();

    //Determina para onde clicar no item exibido no menu irá levar o usuário
    //Para a página de login
    function login(){
        navigate("/login");
    }

    //Para a tela com o restante dos dados do item, enviando o ID do item no URL
    function buy(){
        navigate(`/${item.id}/itemDetails`);
    }

    //Para a tela de edição de itens com o ID do item
    function editItem(){
        navigate(`/${item.id}/editItem`);
    }

    //Seleciona a função de acordo com o tipo de login
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