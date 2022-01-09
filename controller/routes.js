const router=require('express').Router()
const index=require('./index')
const controllerSizes=require(`./controller_sizes`)
const controllerUsers=require(`./controller_users`)

router.get(`/healthcheck`,index.healthCheck)
router.post(`/mySizes`,controllerSizes.addSizes)
router.post(`/users`,controllerUsers.login )

module.exports=router
