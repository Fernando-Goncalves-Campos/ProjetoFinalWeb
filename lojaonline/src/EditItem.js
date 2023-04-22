import { useState, memo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './AddItem.css';

function EditItem({props}) {
    const {itemId} = useParams();
    const [item,setItem] = useState(props.items.find(object => object.id === itemId));

    const [name, setName] = useState(item.name);
    const [id, setId] = useState(item.id);
    const [photo, setPhoto] = useState(item.photo);
    const [description, setDescription] = useState(item.description);
    const [price, setPrice] = useState(item.price);
    const [quantity, setQuantity] = useState(item.quantity);

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        props.setItems(
            props.items.map(prevItems => 
                prevItems.id === item.id ?
                {   
                    name: name,
                    id: id,
                    photo: photo,
                    description: description,
                    price: price,
                    quantity: quantity,
                    quantitySold: 0
                }
                : {...prevItems}
        ));
        navigate("/");
    };

    function deleteItem(){
        console.log(props)
        console.log(props.items)
        props.setItems(
            props.items.filter(prevItems => 
                prevItems.id !== item.id
    ))}

    return (
        <div id="itemInfo">
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                Name:<br /><input type="text" className="inputItem" name="name" defaultValue={item.name} onChange={(e) => setName(e.target.value)} /><br /><br />
                Id:<br /><input type="text" className="inputItem" name="id" defaultValue={item.id} disabled onChange={(e) => setId(e.target.value)} /><br /><br />
                Photo (the path to the img):<br /><input type="text" className="inputItem" name="photo" defaultValue={item.photo} onChange={(e) => setPhoto(e.target.value)} /><br /><br />
                Description:<br /><textarea rows="5" cols="30" className="inputItem" name="description" defaultValue={item.description} onChange={(e) => setDescription(e.target.value)} /><br /><br />
                Price:<br /><input type="text" className="inputItem" name="price" defaultValue={item.price} onChange={(e) => setPrice(e.target.value)} /><br /><br />
                Quantity:<br /><input type="number" className="inputItem" name="quantity" defaultValue={item.quantity} onChange={(e) => setQuantity( Number(e.target.value) )} /><br /><br />

                <input type="submit" id="confirmItem" value="Submit"/>
                <button id="deleteItem" onClick={deleteItem}>Delete</button>
            </form>    
        </div>
    );
}


export default memo(EditItem);