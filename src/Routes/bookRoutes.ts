
import express,{Request,Response} from 'express'
import authMiddlerware from '../middleware/authMiddlerware'
import BookController from '../controller/bookController'
const router=express.Router()

router.route('/:id').patch(authMiddlerware.authenticate as any,BookController.updateBook).delete(authMiddlerware.authenticate as any,BookController.deleteBook)


router.route('/').get(authMiddlerware.authenticate as any,BookController.getAllBook).post(authMiddlerware.authenticate as any,BookController.createBook)


export default router