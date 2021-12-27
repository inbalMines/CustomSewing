
const sizesToDal= require(`../dal/dal_Sizes`)


async function postClientSizes(mySizes) {
    try {
        
        sizesToDal.postSizesToDb(mySizes)
        await console.log(`item had been save in service`);
     
    }
    catch (error) { console.log(error); }
}

module.exports = { postClientSizes }