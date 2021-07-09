const cors = require("cors");

const dbName = "project-work";

const url = `mongodb://localhost:27017/`;


var express = require("express");

var router = express.Router();

var Validator = require("jsonschema").Validator;

var MongoClient = require("mongodb").MongoClient;


router.use(cors());
router.use(express.json());
const v = new Validator();

router.post("/login", function(req, res) {
    var obj = req.body;
    let schema = {
        type: "object",
        properties: {
            email: {
                type: "string",
            },
            password: {
                type: "string",
            },
        },
        required: ["email", "password"],
    };
    let check = v.validate(obj, schema).valid;

    if (check) {
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
            if (err) {
                res.status(500).json({ msg: "Error" });
            }
            let dbo = db.db(dbName);
            console.log(obj);
            dbo
                .collection("utenti")
                .find(obj)
                .count(function(error, count) {
                    console.log(obj);
                    if (count === 0) {
                        res.status(404).json({ err: "Non funziona" });
                    } else {
                        res.status(200).json({ msg: "Funziona" });
                    }
                });
            db.close();
        });
    } else {
        res.status(400);
    }
});

router.post("/registrazione", function(req, res) {
    var obj = req.body;
    let schema = {
        type: "object",
        properties: {
            nome: {
                type: "string",
            },
            cognome: {
                type: "string",
            },
            email: {
                type: "string",
            },
            categoria_preferita: {
                type: "string",
            },
            password: {
                type: "string",
            },
        },
        required: ["nome", "cognome", "email", "categoria_preferita", "password"],
    };
    let check = v.validate(obj, schema).valid;

    if (check) {
        MongoClient.connect(url, { useUnifiedTopology: true }, (err, db) => {
            if (err) {
                res.status(500).json({ msg: "Error" });
            }
            let dbo = db.db(dbName);
            console.log(obj);
            dbo
                .collection("utenti").insertOne(obj, function(err, resp) {
                    if (err) {
                        res.status(500).json({ msg: err })
                        console.log(err)
                    } else {
                        var objres = {
                            msg: "utente inserito"
                        }
                        res.status(201).json(objres)
                    }
                })
                // db.close();
        });
    } else {
        res.status(400);
    }
});

module.exports = router;