
import express,{Request,Response} from 'express'
import authMiddlerware from '../middleware/authMiddlerware'
import BookController from '../controller/bookController'
const router=express.Router()

router.route('/:id').patch(authMiddlerware.adminAuthenticate as any,BookController.updateBook).delete(authMiddlerware.adminAuthenticate as any,BookController.deleteBook)

router.route('/').get(BookController.getAllBook).post(authMiddlerware.adminAuthenticate as any,BookController.createBook)

export default router