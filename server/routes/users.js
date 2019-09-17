const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const { Connection } = require("../mongo_config/Connection");

const db = "printeardb";
const collection = "users";

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
router.get("/:id", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client
          .find({ _id: ObjectId(req.params.id) })
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
  const new_user = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email
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
router.patch("/:id", (req, res) => {
  let updating = {};
  if (req.body.email) {
    updating.email = req.body.email;
  }
  if (req.body.name) {
    updating.name = req.body.name;
  }
  if (req.body.username) {
    updating.username = req.body.usernmae;
  }

  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.findOneAndUpdate(
          { _id: ObjectId(req.params.id) },
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
router.delete("/:id", (req, res) => {
  try {
    Connection.connectToMongo()
      .then(database => {
        const client = database.db(db).collection(collection);

        client.findOneAndDelete({ _id: ObjectId(req.params.id) }, (err, result) => {
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
