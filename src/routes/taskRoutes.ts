import { Router } from 'express';
import taskController from '../controllers/taskController';

const router = Router()

router.post('/', taskController.create)
router.get('/', taskController.getTasks)
router.get('/:id', taskController.getTask)
router.delete('/:id', taskController.deleteTask)

export default router