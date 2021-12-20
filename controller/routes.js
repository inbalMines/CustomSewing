const router=require('express').Router()
const clientSizes = require('./clientSizes')
const index=require('./index')


router.get(`/healthcheck`,index.healthCheck)
router.post(`/sizes`,clientSizes.postClientSizes)


module.exports=router
