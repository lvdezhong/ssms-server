import Router from 'koa-router';
import gradeController from '../controllers/grade';

const router = new Router();

router.prefix('/grade');
router.get('/query', gradeController.queryGrade);
router.post('/add', gradeController.addGrade);
router.post('/delete', gradeController.deleteGrade);
router.get('/get', gradeController.getGrade);
router.post('/update', gradeController.updateGrade);

export default router;