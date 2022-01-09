

async function login(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {
            name: req.body.name,
            password: hashedPassword,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }

        service_users.login(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
}







module.exports = { login }


