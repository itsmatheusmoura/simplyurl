import 'dotenv'
module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: 'postgres',
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};