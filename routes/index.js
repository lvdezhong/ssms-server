import Router from 'koa-router';
import students from './students';
import course from './course';
import grade from './grade';

const router = new Router();
router.prefix('/api');
router.use(students.routes(), students.allowedMethods());
router.use(course.routes(), course.allowedMethods());
router.use(grade.routes(), grade.allowedMethods());

export default router;