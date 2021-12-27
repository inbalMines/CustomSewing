const router=require('express').Router()
const index=require('./index')
const controllerSizes=require(`./controller_sizes`)


router.get(`/healthcheck`,index.healthCheck)
router.post(`/mySizes`,controllerSizes.addSizes)


module.exports=router
