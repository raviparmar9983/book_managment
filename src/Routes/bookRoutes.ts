import { IUser } from './../models/userModel';

import express,{Request,Response} from 'express'
import authMiddlerware from '../middleware/authMiddlerware'
import BookController from '../controller/bookController'
const router=express.Router()

router.route('/:id')
.patch((authMiddlerware as any)
.authenticate,(authMiddlerware as any).
isAdminOrAuthor,BookController.updateBook)
.delete((authMiddlerware as any).
authenticate,(authMiddlerware as any)
.isAdminOrAuthor,BookController.deleteBook)

router.route('/')
.get((authMiddlerware as any)
.authenticate,(authMiddlerware as any)
.authenticate,(authMiddlerware as any)
.isUser,BookController.getAllBook)
.post((authMiddlerware as any)
.authenticate,(authMiddlerware as any)
.isAdminOrAuthor,BookController.updateBook)
.delete((authMiddlerware as any).authenticate,(authMiddlerware as any).isAdminOrAuthor,BookController.createBook)

export default router