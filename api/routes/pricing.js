const router = require("express").Router();
const mongoose = require("mongoose");
const Pricing = require("../models/Pricing");

const multer = require("multer");

function fileFilter(req, file, cb) {
  const allowedFileTypes = ["image/png", "image/jpeg", "image/gif"];
  if (!allowedFileTypes.includes(file.mimetype)) {
    let err = "Only images are allowed";
    return cb(err, false);
  }
  cb(null, true);
}

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public/images");
  },
  filename: (req, file, callBack) => {
    callBack(
      null,
      String(file.originalname)
        .toLowerCase()
        .split(" ")
        .join("-")
    );
  }
});

const upload = multer({ storage, fileFilter });

// @GET
// Return pricing list of every product
router.get("/pricing", (req, res) => {
  Pricing.find({})
    .then(pricingList => res.status(200).json({ success: true, pricingList }))
    .catch(err =>
      res.status(404).json({ error: true, errorMessage: err.message })
    );
});

// @POST
// Add pricing to list of products
router.post("/pricing", upload.single("image"), (req, res) => {
  const { name, price, discount } = req.body;
  const errors = [];
  let image = String(file.originalname)
    .toLowerCase()
    .split(" ")
    .join("-");

  if (!name || name === "") errors.push("Name cannot be empty");
  if (!price || price < 1) errors.push("Price must be greater than 0");

  const pricing = new Pricing({
    name,
    price,
    discount,
    image
  });

  console.log(pricing);

  if (errors.length > 0) {
    console.log(errors);
    res.status("301").json({ error: true, errors });
    return;
  }

  pricing
    .save()
    .then(pricing =>
      res.status(201).json({
        success: true,
        successMessage: "Pricing Data Added Successfully",
        pricing
      })
    )
    .catch(err => res.status(401).json({ error: true, message: err.message }));
});

router.put("/pricing/edit", upload.single("image"), (req, res) => {
  const { id, name, price, discount, image } = req.body;

  if (image === undefined) {
    /// That means a new image was uploaded

    const update = {
      name,
      price,
      discount,
      image: String(file.originalname)
        .toLowerCase()
        .split(" ")
        .join("-")
    };

    Pricing.findOneAndUpdate(
      { id: id },
      { ...update },
      { new: true },
      (err, pricing, response) => {
        if (err) res.status(401).json({ error: true, message: err.message });
        res.status(201).json({
          success: true,
          successMessage: "Pricing Data Edited Successfully",
          pricing,
          response
        });
      }
    );
    return;
  } else {
    let update = { name, price, discount };
    Pricing.findOneAndUpdate(
      { id: id },
      { ...update },
      { new: true },
      (err, pricing, response) => {
        if (err) res.status(401).json({ error: true, message: err.message });
        res.status(201).json({
          success: true,
          successMessage: "Pricing Data Edited Successfully",
          pricing,
          response
        });
      }
    );
  }
});

module.exports = router;
