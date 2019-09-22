const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const { Connection } = require("../mongo_config/Connection");

const db = "printeardb";
const collection = "usuarios";

/**
 * GET ALL
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
 * GET ONE
 */
router.get("/:idUsuario", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client
          .find({ _id: ObjectId(req.params.idUsuario) })
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
 * POST
 */
router.post("/", (req, res) => {
  let metodos = [];
  for(let i of req.body.metodosDePago){
    metodos.push({
      _id: ObjectId(),
      nombre: i.nombre,
      tipo: i.tipo,
      numero: i.numero
    });
  }
  const new_user = {
    nombre: req.body.nombre,
    nombreUsuario: req.body.nombreUsuario,
    email: req.body.email,
    contrasenia: req.body.contrasenia,
    tipo: req.body.tipo,
    metodosDePago: metodos // REVISAR SI SÍ
  };

  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.insertOne(new_user, (err, result) => {
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
 * PATCH
 */
router.patch("/:idUsuario", (req, res) => {
  let updating = {};
  if (req.body.email) {
    updating.email = req.body.email;
  }
  if (req.body.nombre) {
    updating.nombre = req.body.nombre;
  }
  if (req.body.nombreUsuario) {
    updating.nombreUsuario = req.body.nombreUsuario;
  }
  if (req.body.contrasenia) {
    updating.contrasenia = req.body.contrasenia;
  }
  if (req.body.tipo) {
    updating.nombreUsuario = req.body.nombreUsuario;
  }
  if (req.body.metodosDePago) {
    updating.metodosDePago = req.body.metodosDePago; // Confío en que el patch no cambia, quita o algo con los _id
  }

  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.findOneAndUpdate(
          { _id: ObjectId(req.params.idUsuario) },
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
 * DELETE
 */
router.delete("/:idUsuario", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.findOneAndDelete({ _id: ObjectId(req.params.idUsuario) }, (err, result) => {
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
 * Funciones para los METODOSDEPAGO del Usuario
 */

/**
 * GET ALL METODOS
 */
router.get("/:idUsuario/metodosDePago", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(async database => {
        const client = database.db(db).collection(collection);

        await client
          .find({ _id: ObjectId(req.params.idUsuario), metodosDePago: {} }) //REVISAR SI SÍ
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
 * GET ONE METODO
 */
router.get("/:idUsuario/metodosDePago/:id", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client
          .find({ _id: ObjectId(req.params.idUsuario), "metodosDePago._id": ObjectId(req.params.id) })
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
 * POST METODO
 */
router.post("/:idUsuario/metodosDePago", (req, res) => {
  const new_metodo = {
    nombre: req.body.nombre,
    tipo: req.body.tipo,
    numero: req.body.numero
  };

  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.insertOne(new_metodo, (err, result) => {
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
 * PATCH METODO
 */
router.patch("/:idUsuario/metodosDePago/:id", (req, res) => {
  let updating = {};
  if (req.body.nombre) {
    updating.nombre = req.body.nombre;
  }
  if (req.body.tipo) {
    updating.tipo = req.body.tipo;
  }
  if (req.body.numero) {
    updating.numero = req.body.numero;
  }

  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.findOneAndUpdate(
          { _id: ObjectId(req.params.idUsuario), "metodosDePago._id": ObjectId(req.params.id) },
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
 * DELETE METODO
 */
router.delete("/:idUsuario/metodosDePago/:id", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.findOneAndDelete({ _id: ObjectId(req.params.idUsuario), "metodosDePago._id": ObjectId(req.params.id) }, (err, result) => {
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
 * ? Export
 */
module.exports = router;
