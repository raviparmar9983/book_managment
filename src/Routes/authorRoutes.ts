import express,{Router} from 'express'
import AuthorController from '../controller/authorController'
import Authenticator,{extendedReq} from '../middleware/authMiddlerware';
import authorController from '../controller/authorController';

const router:Router=express.Router();
router.route('/:id')
.patch((Authenticator as any).authenticate,(Authenticator as any).isAdminOrAuthor,AuthorController.updateAuthor)
.delete((Authenticator as any).authenticate,(Authenticator as any).isAdminOrAuthor,AuthorController.deleteAuthor)

router.route('/')
.get((Authenticator as any).authenticate,(Authenticator as any).isAdminOrAuthor,AuthorController.getAllAuthor)
.post((Authenticator as any).authenticate,(Authenticator as any).isAdminOrAuthor,authorController.creatAuthor)



export default router