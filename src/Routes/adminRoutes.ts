import express,{Router} from 'express'
import adminController from '../controller/adminController';
import Authenticator,{extendedReq} from '../middleware/authMiddlerware';

const router=express.Router();

router.route('/signup').post((Authenticator as any).adminAuthenticate,adminController.createAuthor)
router.route('/login').post((Authenticator as any).adminAuthenticate,adminController.loginAdmin)

export default router