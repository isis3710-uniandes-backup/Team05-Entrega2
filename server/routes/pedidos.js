const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const { Connection } = require("../mongo_config/Connection");

const db = "printeardb";
const collection = "pedidos";

/**
 * CRUD
 */

/**
 * GET All pedidos: Esto obtiene todos los pedidos.
 */
router.get("/", (req, res)=>{
    try{
        Connection.connectToMongo()
        .then(async database =>{
            const client = database.db(db).collection(collection);
            
            await client
            .find({})
            .toArray()
            .then(x => res.status(200).json(x))
            .catch(err => res.status(500).json({ message: err.message}));
        })
        .catch(err =>{
            res.status(500).json({message: err.message});
        });
    } catch(err) {
        res.status(500).json({message : err.message});
    }
});

/**
 * GET un pedido: Esto obtiene un pedido dado un id.
 */
router.get("/:id", (req,res) =>{
    try{
        Connection.connectToMongo()
        .then(database =>{
           const client = database.db(db).collection(collection);
           
           client
           .find({ _id: ObjectId(req.params.id)})
           .toArray()
           .then(x=> res.status(200).json(x))
           .catch(err => res.status(404).json({message: err.message}));
        })
        .catch(err =>{
            res.status(500).json({message : err.message});
        });

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

/**
 * POST un pedido: Esto inserta un objeto pedido.
 */
router.post("/", (req, res)=>{
    const new_pedido = {
        nombre : req.body.nombre,
        descripcion : req.body.descripcion,
        adjunto : req.body.adjunto,
        fechaGeneracion : req.body.fechaGeneracion,
        fechaRecogida : req.body.fechaRecogida,
        estado : req.body.estado,
        _idUsuario :  ObjectId(req.body._idUsuario),
        _idServicio : ObjectId(req.body._idServicio),
        _idNegocio : ObjectId(req.body._idNegocio)

    };

    try {
        Connection.connectToMongo()
        .then(database => {
            const client = database.db(db).collection(collection);

            client.insertOne(new_pedido, (err, result) =>{
                if(err){
                    res.status(400).json({message : err.message});
                    return;
                }
                res.status(201).send(result.ops);
            });
        })
        .catch(err =>{
            res.status(500).json({message : err.message});
        });
    } catch (err) {
        res.status(500).json({message : err.message});
    }
});

/**
 * PATCH un pedido: Esto modifica un pedido dado un id.
 */
router.patch("/:id", (req,res) =>{
    let update = {};
    if(req.body.nombre){
        update.nombre = req.body.nombre;
    }
    if(req.body.descripcion){
        update.descripcion = req.body.descripcion;
    }
    if(req.body.adjunto){
        update.adjunto = req.body.adjunto;
    }
    if(req.body.fechaGeneracion){
        update.fechaGeneracion = req.body.fechaGeneracion;
    }
    if(req.body.fechaRecogida){
        update.fechaRecogida = req.body.fechaRecogida;
    }
    if(req.body.estado){
        update.estado = req.body.estado;
    }
    if(req.body._idUsuario){
        update._idUsuario =  ObjectId(req.body._idUsuario);
    }
    if(req.body._idServicio){
        update._idServicio = ObjectId(req.body._idServicio);
    }
    if(req.body._idNegocio){
        update._idNegocio = ObjectId(req.body._idNegocio);
    }

    try{
        Connection.connectToMongo()
        .then(database =>{
            const client = database.db(db).collection(collection);

            client.findOneAndUpdate(
                { _id: ObjectId(req.params.id)},
                { $set : update},
                {returnOriginal : false},
                (err, result) =>{
                    if(err){
                        res.status(400).json({message : err.message});
                        return;
                    }
                    res.status(200).json(result.value);
                }
            );
        })
        .catch(err =>{
            res.status(500).json({message : err.message});
        });
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

/**
 * DELETE un pedido: Esto elimina un pedido dado un id.
 */
router.delete("/:id", (req, res)=>{
    try{
        Connection.connectToMongo()
        .then(database =>{
            const client = database.db(db).collection(collection);

            client.findOneAndDelete(
                { _id: ObjectId(req.params.id)}
                , (err, result) =>{
                    if(err){
                        res.status(404).json({message : err.message});
                        return
                    }
                    res.status(200).send({message :result.value});
                });
        })
        .catch(err => {
            res.status(500).json({ message : err.message});
        });
        
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

/**
 * Funciones Extra
 */


/**
 * GET un pedido: Esto obtiene un pedido dado un nombre.
 */
router.get("/nombre/:nombre", (req,res) =>{
    try{
        Connection.connectToMongo()
        .then(database =>{
           const client = database.db(db).collection(collection);
           
           client
           .find({ nombre: req.params.nombre})
           .toArray()
           .then(x=> res.status(200).json(x))
           .catch(err => res.status(404).json({message: err.message}));
        })
        .catch(err =>{
            res.status(500).json({message : err.message});
        });

    } catch(err){
        res.status(500).json({message: err.message});
    }
});



module.exports = router;