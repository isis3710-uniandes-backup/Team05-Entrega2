const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const { Connection } = require("../mongo_config/Connection");

const db = "printeardb";
const collection = "servicios";

/**
 * CRUD
 */

/**
 * GET All servicio: Esto obtiene todos los servicios.
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
            .catch(err => res.status(500).json({ ErrorCliente: err.message}));
        })
        .catch(err =>{
            res.status(500).json({ErrorDatabase: err.message});
        });
    } catch(err) {
        res.status(500).json({ErrorConexion : err.message});
    }
});

/**
 * GET un servicio: Esto obtiene un servicio dado un id.
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
           .catch(err => res.status(404).json({ErrorGET: err.message}));
        })
        .catch(err =>{
            res.status(500).json({ErrorDatabase : err.message});
        });

    } catch(err){
        res.status(500).json({ErrorConexion: err.message});
    }
});

/**
 * POST un servicio: Esto inserta un objeto servicio.
 */
router.post("/", (req, res)=>{
    const new_servicio = {
        tipo : req.body.tipo,
        costo : req.body.costo,
        _idPedido :  ObjectId(req.body._idPedido),
        _idNegocio : ObjectId(req.body._idNegocio)

    };

    try {
        Connection.connectToMongo()
        .then(database => {
            const client = database.db(db).collection(collection);

            client.insertOne(new_servicio, (err, result) =>{
                if(err){
                    res.status(400).json({ErrorInsercion : err.message});
                    return;
                }
                res.status(201).send(result.ops);
            });
        })
        .catch(err =>{
            res.status(500).json({ErrorDatabase : err.message});
        });
    } catch (err) {
        res.status(500).json({ErrorConexion : err.message});
    }
});

/**
 * PATCH un pedido: Esto modifica un pedido dado un id.
 */
router.patch("/:id", (req,res) =>{
    let update = {};
    if(req.body.tipo){
        update.tipo = req.body.tipo;
    }
    if(req.body.costo){
        update.costo = req.body.costo;
    }
    if(req.body._idNegocio){
        update._idNegocio = ObjectId(req.body._idNegocio);
    }
    if(req.body._idPedido){
        update._idPedido = ObjectId(req.body._idPedido);
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
                        res.status(400).json({ErrorPUT : err.message});
                        return;
                    }
                    res.status(200).json(result.value);
                }
            );
        })
        .catch(err =>{
            res.status(500).json({ErrorDatabase : err.message});
        });
    }catch(err){
        res.status(500).json({ErrorConexion: err.message})
    }
});

/**
 * DELETE un servicio: Esto elimina un pedido dado un id.
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
                        res.status(404).json({ErrorDELETE : err.message});
                        return
                    }
                    res.status(200).send({DELETED :result.value});
                });
        })
        .catch(err => {
            res.status(500).json({ ErrorDatabase : err.message});
        });
        
    }catch(err){
        res.status(500).json({ErrorConexion: err.message});
    }
});

/**
 * Funciones Extra
 */


/**
 * GET un servicio: Esto obtiene un servicio dado un nombre.
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
           .catch(err => res.status(404).json({ErrorGET: err.message}));
        })
        .catch(err =>{
            res.status(500).json({ErrorDatabase : err.message});
        });

    } catch(err){
        res.status(500).json({ErrorConexion: err.message});
    }
});



module.exports = router;