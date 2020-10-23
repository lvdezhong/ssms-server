import Router from 'koa-router';
import studentsController from '../controllers/students';

const router = new Router();

router.prefix('/students');
router.get('/query', studentsController.queryStudents);
router.post('/add', studentsController.addStudents);
router.post('/delete', studentsController.deleteStudents);
router.get('/get', studentsController.getStudents);
router.post('/update', studentsController.updateStudents);

export default router;