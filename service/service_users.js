
const dal_users=require(`../modules/dal/dal_users`)

async function login(postUsers){

    await dal_users.addUsersToDB(postUsers)
    console.log(`user had been save`);

}
module.exports = { login }