const dbConfig = require('../Config/database');
const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        // define: {
        //   timestamps: false
        // },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./user')(sequelize, DataTypes)
db.userAddress = require('./userAddress')(sequelize, DataTypes)

db.sequelize.sync()
.then(() => {
  // console.log("Synced db.");
})
.catch((err) => {
  console.log("Failed to sync db: " + err.message);
});

db.users.hasMany(db.userAddress, {
    foreignKey: 'id',
    as: 'addresses'
})

db.userAddress.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'product'
})

module.exports = db;

