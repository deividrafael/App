const routes = require('express').Router();
const Users = require('../models/Users')
const controller = require('../controller/controller')

routes.post('/users', async (req,res) =>{
   const post = await Users.create({
       email: req.body.email,
       password: req.body.password

   })
   post.save()
   .then(data=>{
       console.log(data)
       res.send("sucess")
   }).catch(err=>{
       console.log(err)
   })
})

routes.post("/auth", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }
  
      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: "Invalid password" });
      }
  
      return res.json({
        user,
        token: user.generateToken()
      });
    } catch (err) {
      return res.status(400).json({ error: "User authentication failed" });
    }
  });

//API
routes.post('/api/users',controller.create);
routes.get('/api/users',controller.find);
routes.put('/api/users/:id',controller.update);
routes.delete('/api/users/:id',controller.delete);
routes.get('/api/users/:id',controller.show);

module.exports = routes;