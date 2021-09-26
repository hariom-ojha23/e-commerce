import express from 'express'
import {
  loginUser,
  getUserProfile,
  registerUser,
} from '../controllers/userController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', loginUser)
router.route('/profile').get(protect, getUserProfile)

export default router
