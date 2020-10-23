import Router from 'koa-router';
import courseController from '../controllers/course';

const router = new Router();

router.prefix('/course');
router.get('/query', courseController.queryCourse);
router.post('/add', courseController.addCourse);
router.post('/delete', courseController.deleteCourse);
router.get('/get', courseController.getCourse);
router.post('/update', courseController.updateCourse);

export default router;