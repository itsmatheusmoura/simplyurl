module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'dburlshrink',
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};