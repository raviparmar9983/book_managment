import express,{Router} from 'express'
import AuthorController from '../controller/authorController'
import Authenticator,{extendedReq} from '../middleware/authMiddlerware';

const router:Router=express.Router();
router.route('/:id').get(Authenticator.authenticate as any,AuthorController.updateBook).post(Authenticator.authenticate as any,AuthorController.deleteBook)

router.route('/').get(Authenticator.authenticate as any,AuthorController.getAllBook).post(Authenticator.authenticate as any,AuthorController.createBook)



export default router