import express,{Router} from 'express'
import AuthorController from '../controller/authorController'
import Authenticator,{extendedReq} from '../middleware/authMiddlerware';

const router:Router=express.Router();
router.route('/:id').get(AuthorController.updateBook).post(AuthorController.deleteBook)

router.route('/').get(AuthorController.createBook)



export default router