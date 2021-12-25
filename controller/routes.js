const router=require('express').Router()
const index=require('./index')
const controller_sizes=require(`./controller_sizes`)


router.get(`/healthcheck`,index.healthCheck)
router.post(`/mySizes`,controller_sizes.clientPostSizes)


module.exports=router
