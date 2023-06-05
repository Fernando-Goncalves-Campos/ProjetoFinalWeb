import { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import './AddItem.css';

function AddItem({items, setItems}) {
    //Salva os valores inseridos nos inputs constantemente
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [photo, setPhoto] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState(0);

    //Usado para redirecionar o usuário para outra rota do site
    const navigate = useNavigate();
    
    //Adiciona o item no banco de dados
    const addItemDB = () => {
        fetch(`http://localhost:5050/items/`, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                id: id,
                photo: photo,
                description: description,
                price: price,
                quantity: quantity
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
    }

    //Realiza a validação dos dados
    const handleSubmit = async (e) => {
        e.preventDefault();

        const oldItem = items.find((item) => item.id === id);
        //Garante que não existem itens com o mesmo id
        if (oldItem) {
            alert("Another item have the same id!!!!");
        }
        else{
            //Adiciona o item no banco de dados
            addItemDB();

            //Adiciona o item à lista
            setItems(prevItems => [
                ...prevItems,
                {   
                    name: name,
                    id: id,
                    photo: photo,
                    description: description,
                    price: price,
                    quantity: quantity,
                    quantitySold: 0
                }
            ]);

            //Retorna para a página inicial
            navigate("/");
        }
    };

    return (
        <div id="itemInfo">
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                Name:<br /><input type="text" className="inputItem" name="name" onChange={(e) => setName(e.target.value)} /><br /><br />
                Id:<br /><input type="text" className="inputItem" name="id" onChange={(e) => setId(e.target.value)} /><br /><br />
                Photo (the path to the img):<br /><input type="text" className="inputItem" name="photo" onChange={(e) => setPhoto(e.target.value)} /><br /><br />
                Description:<br /><textarea rows="5" cols="30" className="inputItem" name="description" onChange={(e) => setDescription(e.target.value)} /><br /><br />
                Price:<br /><input type="text" className="inputItem" name="price" onChange={(e) => setPrice(e.target.value)} /><br /><br />
                Quantity:<br /><input type="number" className="inputItem" name="quantity" onChange={(e) => setQuantity( Number(e.target.value) )} /><br /><br />

                <input type="submit" className="buttonCont buttonForm" id="confirmItem" value="Submit"/>
            </form>    
        </div>
    );
}


export default memo(AddItem);