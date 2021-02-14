import Sequelize, { Model } from 'sequelize';

class Urls extends Model{
    static init(sequelize){
        super.init({
            user_id: Sequelize.INTEGER,
            original_url: Sequelize.STRING,
            shrink_url: Sequelize.STRING,
        },
        {
            sequelize
        }
        );
    }
}

export default Urls;