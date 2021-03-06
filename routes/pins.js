const router = require("express").Router();
const Pin = require("../models/Pin")

//Creating new Pin.

router.post("/",async (req,res)=>{
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err)
    }
    
});

// Displaying all Pins.
router.get("/",async (req,res)=>{
    try {
        const pins = await Pin.find();
        res.status(200).json(pins)
    } catch (error) {
        res.status(500).json(error)
    } 
})

//Deleting Pin

router.delete("/delete/:id",async (req,res) => {
    try {
        let data = await Pin.findByIdAndDelete({ _id: req.params.id });
        res.json({
            message:"Pin deleted Successfully!"
        })
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong!"
        })
        console.log(req.params.id)
    }
})

module.exports = router