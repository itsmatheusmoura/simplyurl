import Sequelize from 'sequelize';

import User from '../app/models/User';
import Urls from '../app/models/Url';

import databaseConfig from '../config/database';


const models = [User, Urls];

class Database{
    constructor(){
        this.init();
    }

    init(){
        // Conexão com db e carregar models
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database;
