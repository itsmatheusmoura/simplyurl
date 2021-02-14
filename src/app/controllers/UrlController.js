import uniqid from 'uniqid';
import Urls from '../models/Url';

class UrlController{

    async index(req, res){
        console.log(req.userId);

        const UrlsByUser = await Urls.findAll({
            where:{
                user_id: req.userId
            }
        });

        res.send(UrlsByUser);
    }

    async show(req, res){
        const foundUrl = await Urls.findOne({
            where: { shrink_url: req.params.id }
        });

        if(!foundUrl || foundUrl == null){
            res.status(401).json({ error: 'Url not found, try again' });
        }
        else{
            const { original_url } = foundUrl;
            res.redirect(original_url);
        }
    }

    async store(req, res){
        const { original_url } = req.body;
        const { userId } = req;

        if(!original_url || original_url === ''){
            res.status(401).json({ error: 'Send true url' });
        }

        const shrink_url = uniqid();
        const url= await Urls.create({
            user_id: userId,
            original_url,
            shrink_url
        })

        res.json({userId, original_url, shrink_url});
    }
}

export default new UrlController();