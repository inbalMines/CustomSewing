const usersSchema =require('../schema/users');

async function addUsersToDB(postUsers) {

        const users = new Users(postUsers)
        await users.save()
        console.log(`user had been save to db`);
}


// // app.post('/users/login', 

// async function login1 (req, res) {
//   const user = users.find(user => user.name = req.body.name)
//   if (user == null) {
//     return res.status(400).send('Cannot find user')
//   }
//   try {
//     if(await bcrypt.compare(req.body.password, user.password)) {
//       res.send('Success')
//     } else {
//       res.send('Not Allowed')
//     }
//   } catch {
//     res.status(500).send()
//   }}

module.exports = { addUsersToDB }