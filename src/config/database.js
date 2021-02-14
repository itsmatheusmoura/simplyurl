import 'dotenv'
module.exports = {
    dialect: 'postgres',
    host: process.env.HOST,
    username: 'postgres',
    password: 'docker',
    database: 'dburlshrink',
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};