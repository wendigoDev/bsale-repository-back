const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'bsale_test', 'bsale_test', 'bsale_test',{
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql'
});


const conectionDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Successful connection'); //Connection work!
    } catch (error) {
        console.error('Unable to connect to the database', error);
    }
}

module.exports = {
    sequelize,
    conectionDB
}