const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const { Connection } = require("../mongo_config/Connection");

const db = "printeardb";
const collection = "negocios";
const pedidosCollection = "pedidos";
const serviciosCollection = "servicios";

/**
 * Get all negocios, permite obtener todos los negocios de la base de datos
 */
router.get("/", (req, res) => {
    try {
        Connection.connectToMongo()
            .then(async database => {
                const client = database.db(db).collection(collection);

                await client
                    .find({})
                    .toArray()
                    .then(x => res.status(200).json(x))
                    .catch(err => res.status(500).json({ message: err.message }));
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * Get one, permite obtener el detalle de un negocio dado su id
 */
router.get("/:idNegocio", (req, res) => {
    try {
        Connection.connectToMongo()
            .then(database => {
                const client = database.db(db).collection(collection);

                client
                    .find({ _id: ObjectId(req.params.idNegocio) })
                    .toArray()
                    .then(x => res.status(200).json(x))
                    .catch(err => res.status(404).json({ message: err.message }));
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * Post, permite realizar la creación de un negocio y persistirlo en la base de datos
 */
router.post("/", (req, res) => {
    const new_negocio = {
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        categorias: req.body.categorias,
        _idUsuario: req.body.idUsuario
    };

    try {
        Connection.connectToMongo()
            .then(database => {
                const client = database.db(db).collection(collection);

                client.insertOne(new_negocio, (err, result) => {
                    if (err) {
                        res.status(400).json({ message: err.message });
                        return;
                    }
                    res.status(201).send(result.ops);
                });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * Put, permite modificar un negocio dado su id
 */
router.patch('/:idNegocio', (req, res) => {
    let updating = {};
    if (req.body.nombre) {
        updating.nombre = req.body.nombre;
    }

    if (req.body.direccion) {
        updating.direccion = req.body.direccion
    }

    if (req.body.categorias) {
        updating.categorias = req.body.categorias
    }

    if (req.body.idUsuario) {
        updating.idUsuario = req.body.idUsuario
    }

    try {
        Connection.connectToMongo()
            .then(database => {
                const client = database.db(db).collection(collection);

                client.findOneAndUpdate(
                    { _id: ObjectId(req.params.idNegocio) },
                    { $set: updating },
                    { returnOriginal: false },
                    (err, result) => {
                        if (err) {
                            res.status(400).json({ message: err.message });
                            return;
                        }
                        res.status(200).json(result.value);
                    }
                );
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});

/**
 * Delete, permite eliminar un negocio dado su id
 */
router.delete("/:idNegocio", (req, res) => {
    try {
        Connection.connectToMongo()
            .then(database => {
                const client = database.db(db).collection(collection);

                client.findOneAndDelete({ _id: ObjectId(req.params.idNegocio) }, (err, result) => {
                    if (err) {
                        res.status(404).json({ message: err.message });
                        return;
                    }
                    res.status(200).send(result.value);
                });
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

/**
 * GET all pedidos from negocio given an id
 */
router.get("/:idNegocio/pedidos", (req, res) => {
    try {
        Connection.connectToMongo()
            .then(database => {
                const client = database.db(db).collection(pedidosCollection);

                client
                    .find({ _idNegocio: ObjectId(req.params.idNegocio) })
                    .toArray()
                    .then(x => res.status(200).json(x))
                    .catch(err => res.status(404).json({ message: err.message }));
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

/**
 * GT all servicios from negocio given an id
 */
router.get("/:idNegocio/servicios", (req, res) => {
    try {
        Connection.connectToMongo()
            .then(database => {
                const client = database.db(db).collection(serviciosCollection);

                client
                    .find({ _idNegocio: ObjectId(req.params.idNegocio) })
                    .toArray()
                    .then(x => res.status(200).json(x))
                    .catch(err => res.status(404).json({ message: err.message }));
            })
            .catch(err => {
                res.status(500).json({ message: err.message });
            });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

/**
 * ? Export
 */
module.exports = router;