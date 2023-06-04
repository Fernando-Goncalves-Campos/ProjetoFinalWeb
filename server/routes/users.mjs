import express from "express";
import db from "../db/conn.mjs";

const router = express.Router();

//Retorna a lista de administradores
router.get("/adms", async (req, res) => {
    let adms = await db.collection("adms");
    let results = await adms.find({}).toArray();
    res.send(results).status(200);
})

//Procura por um usuário
router.post("/login", async (req, res) => {
    const customers = await db.collection("customers");
    const adms = await db.collection("adms");
    
    let adm = await adms.findOne({name: req.body.name});
    let customer = await customers.findOne({name: req.body.name});
    
    if(customer){
        if(customer.password === req.body.password){
            res.send({user: customer, adm: false}).status(200);
        }
        else{
            res.send("Wrong password").status(403);
        }
    }
    else if(adm){
        if(adm.password === req.body.password){
            res.send({user: adm, adm: true}).status(200);
        }
        else{
            res.send("Wrong password").status(403);
        }
    }
    else{
        res.send("Not found").status(404);
    }
});

//Adiciona um usuário
router.post("/", async (req, res) => {
    const customers = await db.collection("customers");
    const adms = await db.collection("adms");
    
    let adm = await adms.findOne({name: req.body.user.name});
    let customer = await customers.findOne({name: req.body.user.name});
    
    if(customer || adm){
        res.send("Already exists!").status(409);
    }
    else if(req.body.adm){
        let newAdm = {
            name: req.body.user.name,
            password: req.body.user.password,
            email: req.body.user.email,
            phone: req.body.user.phone
        }

        let result = await adms.insertOne(newAdm);
        res.send(result).status(201);
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
        res.send(result).status(201);
    }
});

//Modifica o carrinho de um usuário
router.patch("/customer/:name/cart", async (req, res) => {
    let customers = await db.collection("customers");
    let newValue = {
        $set: {
			cart: req.body.cart
        }
    }

    let result = customers.updateOne({name: req.params.name}, newValue);
    res.send(result).status(200);
})

//Remove um adm
router.delete("/adm/:name", async (req, res) => {
    const adms = await db.collection("adms");
    let result = await adms.deleteOne({name: req.params.name});

    res.send(result).status(200);
});

export default router;