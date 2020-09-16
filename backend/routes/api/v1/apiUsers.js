const express = require("express");
const router = express.Router();
const db = require("../../../database/mongo");
const bcrypt = require("bcrypt");
const {validateJWT} = require('../../../lib/jwt')

const bcryptSalt = 8;
// makes sure user doc has a userName property
// forces userName to be lower case.
async function formatUser(user) {
  let rtnValue = null;
  // check for userName Property
  if (!user.hasOwnProperty("userName")) {
    throw new Error("No userName Property");
  } else {
    //  copy user object
    rtnValue = { ...user };

    // force userName to be lower case
    rtnValue.userName = rtnValue.userName.toLowerCase();

    // encrypt password
    if (user.hasOwnProperty("password")) {
      try {
        rtnValue.password = await bcrypt.hash(user.password, bcryptSalt);
      } catch (err) {
        throw err;
      }
    }
  }

  return rtnValue;
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  let info = {
    query: {},
    collection: req.app.locals.collectionUsers,
  };

  db.readAll(info)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).send("Unable to Get Document ", err.message);
    });
}); //end of Get users

// localhost:3000/api/v1/users/Jo
// whatever the end point is. That's what will get assigned to the userName Variable
router.get("/:userName", function (req, res, next) {
  if (req.params.userName !== undefined) {
    const userName = req.params.userName.toLowerCase();

    let info = {
      query: {
        userName: userName,
      },
      collection: req.app.locals.collectionUsers,
    };

    db.readOne(info)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(500).send(err.message);
      });
  } else {
    res.status(400).send("User Name not Found");
  }
});

//  Insert a new document
router.post("/", validateJWT, function (req, res, next) {
  formatUser(req.body).then(
    (user) => {
      // handle user object
      console.log("USER", user);

      const info = {
        doc: user,
        collection: req.app.locals.collectionUsers,
      };

      db.readOne({
        query: { userName: user.userName },
        collection: req.app.locals.collectionUsers,
      })
        .then((foundUser) => {
          if (foundUser !== null) {
            throw new Error(`User ${user.userName} Already Exist`);
          }

          return db.createOne(info);
        })
        .then((user) => {
          if (user.insertedCount === 1) {
            // ops is an array of all inserted documents
            res.json(user.ops[0]);
          }
        })
        .catch((err) => {
          console.log("500",err.message)
          res.status(500).send(err.message);
        });
    },
    (err) => {
      console.log(err.message);
      res.status(400).send(err.message);
    }
  ) // end of then 
});

router.put("/:userName", function (req, res, next) {
  if (req.params.userName !== undefined) {
    const userName = req.params.userName.toLowerCase();

    const info = {
      query: {
        userName: userName,
      },
      doc: req.body,
      collection: req.app.locals.collectionUsers,
    };

    db.replaceOne(info)
      .then((response) => {
        if (response.value === null) {
          //  replacement failed so create
          return db.createOne(info);
        }
        res.json(response);
      })
      .catch((err) => {
        res.status(500).send("Failed to Replace", err);
      });
  } else {
    res.status(400).send("userName is undefined");
  }
});

router.patch("/:userName", function (req, res, next) {
  if (req.params.userName !== undefined) {
    const userName = req.params.userName.toLowerCase();

    let user = req.body;

    const info = {
      query: {
        userName: userName,
      },
      doc: user,
      collection: req.app.locals.collectionUsers,
    };

    db.changeOne(info)
      .then((response) => {
        if (response.ok !== 1) {
          //  update failed
          throw new Error(`Username ${userName} Not Found`);
        }

        return db.readOneById({
          id: response.value._id,
          collection: req.app.locals.collectionUsers,
        });
      })
      .then((resDoc) => {
        res.json(resDoc);
      })
      .catch((err) => {
        res.status(500).send("Failed to Update", err.message);
      });
  } else {
    res.status(400).send("Username is undefined");
  }
});

router.delete("/:userName", function (req, res, next) {
  if (req.params.userName !== undefined) {
    let userName = req.params.userName.toLowerCase();
    const info = {
      query: {
        userName: userName,
      },
      collection: req.app.locals.collectionUsers,
    };

    db.deleteOne(info)
      .then((response) => {
        if (response.deletedCount === 1) {
          res.json({});
        } else {
          // toDo develop a proper error handler
          res.json(req.params.userName);
        }
      })
      .catch((err) => {
        console.log(err).send(err.message);
      });
  } else {
    res.status(400).send("Username is not defined");
  }
});

module.exports = router;
