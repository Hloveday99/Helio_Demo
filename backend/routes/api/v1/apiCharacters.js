const express = require("express");
const router = express.Router();
const db = require("../../../database/mongo");
const app = require("../../../app");
const { response } = require("../../../app");

/* GET character listing. */
router.get("/", function (req, res, next) {
  let info = {
    query: {},
    collection: req.app.locals.collectionCharacters
  };

  db.realAll(info)
    .then((characterss) => {
      res.json(characterss);
    })
    .catch((err) => {
      console.log(err);
    });
});


// whatever the end point is. That's what will get assigned to the charactersName Variable
router.get("/:charactersName", function (req, res, next) {
  let info = {
    query: {
      fName: req.params.charactersName,
    },
    collection: req.app.locals.collectionCharacters,
  };

  db.readOne(info)
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
    });
});
//  Insert a new document
router.post("/", function (req, res, next) {
  const info = {
    body: req.body,
    collection: req.app.locals.collectionCharacters,
  };

  db.createOne(doc)
    .then((characters) => {
      res.json(characters);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete;
"/:charactersName",
  function (req, res, next) {
    let info = {
      query: {
        fName: req.params.charactersName,
      },
      collection: req.app.locals.collectionCharacters,
    }

    db.deleteOne(info)
      .then(response => {
          if (response.deletedCount === 1) {
                    res.json({})               
            } else {
                // toDo develop a proper error handler
                res.json(req.params.charactersName)
            }
        })
      .catch(err => {
        console.log(err)
      })
  }

module.exports = router;

