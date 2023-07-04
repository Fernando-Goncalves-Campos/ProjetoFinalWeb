import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

//Retorna a lista de itens
router.get("/", async (req, res) => {
    let collection = await db.collection("items");
    let results = await collection.find({}).toArray();
    res.status(200).send(results);
});

//Adiciona um item
router.post("/", async (req, res) => {
    let collection = await db.collection("items");
    let item = await collection.findOne({id: req.body.id});
    if(item){
        res.status(409).send("Already exists!");
    }
    else{
        let newValue = {
            name: req.body.name,
            id: req.body.id,
            photo: req.body.photo,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            quantitySold: 0
        }
    
        let result = await collection.insertOne(newValue);
        res.status(201).send(result);
    }
});

//Modifica um item
router.patch("/:id", async (req, res) => {
    let collection = await db.collection("items");

    //Impede que sejam modificadas informações inválidas
    let newValues = {}
    if(req.body.quantitySold !== undefined){
        newValues.quantitySold = req.body.quantitySold;
    }
    if(req.body.quantity !== undefined){
        newValues.quantity = req.body.quantity;
    }
    if(req.body.price !== undefined){
        newValues.price = req.body.price;
    }
    if(req.body.description !== undefined){
        newValues.description = req.body.description;
    }
    if(req.body.name !== undefined){
        newValues.name = req.body.name;
    }
    if(req.body.photo !== undefined){
        newValues.photo = req.body.photo;
    }

    let result = await collection.updateOne({id: req.params.id}, {$set: newValues});
    res.status(200).send(result);
});

//Deleta um item
router.delete("/:id", async (req, res) => {
    const collection = db.collection("items");
    let result = await collection.deleteOne({id: req.params.id});
  
    res.status(200).send(result);
});

export default router;