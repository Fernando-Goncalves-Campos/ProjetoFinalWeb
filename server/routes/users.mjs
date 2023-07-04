import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

//Retorna a lista de clientes
router.get("/customers", async (req, res) => {
    let adms = await db.collection("customers");
    let results = await adms.find({}).toArray();
    res.status(200).send(results);
})

//Retorna a lista de administradores
router.get("/adms", async (req, res) => {
    let adms = await db.collection("adms");
    let results = await adms.find({}).toArray();
    res.status(200).send(results);
})

//Procura por um usuário
router.post("/login", async (req, res) => {
    const customers = await db.collection("customers");
    const adms = await db.collection("adms");
    
    let adm = await adms.findOne({name: req.body.name});
    let customer = await customers.findOne({name: req.body.name});
    
    if(customer){
        if(customer.password === req.body.password){
            res.status(200).send({user: customer, adm: false});
        }
        else{
            res.status(403).send("Wrong password");
        }
    }
    else if(adm){
        if(adm.password === req.body.password){
            res.status(200).send({user: adm, adm: true});
        }
        else{
            res.status(403).send("Wrong password");
        }
    }
    else{
        res.status(404).send("Not found");
    }
});

//Adiciona um usuário
router.post("/", async (req, res) => {
    const customers = await db.collection("customers");
    const adms = await db.collection("adms");
    
    let adm = await adms.findOne({name: req.body.user.name});
    let customer = await customers.findOne({name: req.body.user.name});
    
    if(customer || adm){
        res.status(409).send("Already exists!");
    }
    else if(req.body.adm){
        let newAdm = {
            name: req.body.user.name,
            password: req.body.user.password,
            email: req.body.user.email,
            phone: req.body.user.phone
        }

        let result = await adms.insertOne(newAdm);
        res.status(201).send(result);
    }        
    else{
        let newCustomer = {
            name: req.body.user.name,
            password: req.body.user.password,
            email: req.body.user.email,
            phone: req.body.user.phone,
            address: req.body.user.address,
            cart: []
        }

        let result = await customers.insertOne(newCustomer);
        res.status(201).send(result);
    }
});

//Modifica os dados de um cliente
router.patch("/customers/:name", async (req, res) => {
    let customers = await db.collection("customers");

    //Impede que sejam modificadas informações inválidas
    let newValues = {}
    if(req.body.cart !== undefined){
        newValues.cart = req.body.cart;
    }
    if(req.body.address !== undefined){
        newValues.address = req.body.address;
    }
    if(req.body.email !== undefined){
        newValues.email = req.body.email;
    }
    if(req.body.phone !== undefined){
        newValues.phone = req.body.phone;
    }

    let result = await customers.updateOne({name: req.params.name}, {$set: newValues});
    res.status(200).send(result);
})

//Remove um adm
router.delete("/adms/:name", async (req, res) => {
    const adms = await db.collection("adms");
    let result = await adms.deleteOne({name: req.params.name});

    res.status(200).send(result);
});

//Remove um cliente
router.delete("/customers/:name", async (req, res) => {
    const adms = await db.collection("customers");
    let result = await adms.deleteOne({name: req.params.name});

    res.status(200).send(result);
});

export default router;