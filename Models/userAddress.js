module.exports = (sequelize, DataTypes) => {
    const userAddress = sequelize.define("user_addresses", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        company: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        default_address: {
            type: DataTypes.TINYINT,
            defaultValue: 0
        },
        status: {
            type: DataTypes.TINYINT,
            defaultValue: 1
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    })

    return userAddress
}


