import User from '../models/User';

class UserController{

    async store(req, res){
        const userExists = await User.findOne({ where: { email: req.body.email } });
        
        if(userExists){
            return res.status(400).json({ error: 'User already exists.' });
        }

        const { name, email, id } = await User.create(req.body);
        res.json({ name, email, id });
    }

    async update(req, res){
        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);
        
        if(email !==  user.email){
            const userExists = await User.findOne({ where: { email } });
        
            if(userExists){
                return res.status(400).json({ error: 'User already exists.' });
            }
        }

        if(oldPassword && !(await user.checkPassword(oldPassword))){
            return res.status(401).json({ error: 'Password does not match' });
        }

        // Existe um bug que para sempre que for alterar os dados eu tenho que passar login e senha.
        const { name, id } = await user.update(req.body);

        res.json({
            name,
            id,
            email
        })
    }
}

export default new UserController();