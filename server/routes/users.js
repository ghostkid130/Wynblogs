const express = require('express');
const router = new express.Router();
const User = require('../models/user');

/*/\/\/\/\/\/\/\/\/\/
- N E W   U S E R - |   
\/\/\/\/\/\/\/\/\/\*/

router.post('/', async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token});
    } catch(e){
        res.status(400).send({ error: e.message })
    }
});


/*/\/\/\/\/\/\/\/\/\/
- N E W   U S E R - |   
\/\/\/\/\/\/\/\/\/\*/
router.post('/login', async (req, res) => {
    try {
      const profile = await User.findByCredentials(
        req.body.email,
        req.body.password
      );
      const user = {
        firstName: profile.firstName,
        email: profile.email
      };
      const token = await profile.generateAuthToken();
      res.send({ user, token });
    } catch (e) {
      res.status(400).send();
    }
});


module.exports = router;