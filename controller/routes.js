const router=require('express').Router()
const sizes = require('../modules/schema/sizes')
const service_sizes = require('../service/service_sizes')
const index=require('./index')
const controller_sizes=require(`./controller_sizes`)

router.get(`/healthcheck`,index.healthCheck)
router.post(`/sizes`,service_sizes.postClientSizes)
router.get(`/mySizes`,controller_sizes.getClientSizes)


module.exports=router
