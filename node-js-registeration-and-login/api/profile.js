const express = require('express');
const router = express.Router();

router.get("/profile", (req, res) => {
    res.json({msg: "register working."});
})
module.exports = router;