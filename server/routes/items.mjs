import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

//Retorna a lista de itens
router.get("/", async (req, res) => {
    let collection = await db.collection("items");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

//Adiciona um item
router.post("/", async (req, res) => {
    let collection = await db.collection("items");
    if(item){
        res.send("Already exists!").status(409);
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
        res.send(result).status(201);
    }
});

//Modifica um item
router.patch("/:id", async (req, res) => {
    let collection = await db.collection("items");
    let newValue = {
        $set: {
            name: req.body.name,
			photo: req.body.photo,
			description: req.body.description,
			price: req.body.price,
			quantity: req.body.quantity,
        }
    }

    let result = await collection.updateOne({id: req.params.id}, newValue);
    res.send(result).status(200);
});

router.patch("/:id/quantity", async (req, res) => {
    let collection = await db.collection("items");
    let newValue = {
        $set: {
			quantity: req.body.quantity,
            quantitySold: req.body.quantitySold
        }
    }

    let result = await collection.updateOne({id: req.params.id}, newValue);
    res.send(result).status(200);
});

//Deleta um item
router.delete("/:id", async (req, res) => {
    const collection = db.collection("items");
    let result = await collection.deleteOne({id: req.params.id});
  
    res.send(result).status(200);
});

export default router;