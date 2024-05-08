import express,{Request,Response} from 'express'
import userController from '../controller/userController'
const router=express.Router()



router.route('/signup').post(userController.signUp)
router.route('/login').post(userController.login)


export default router