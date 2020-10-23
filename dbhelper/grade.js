import db from './db';

const queryFind = params => {
  return new Promise((resolve, reject) => {
    // let sql = `
    //   create view grade_view
    //   as
    //   select
    //     grade.gra_id,
    //     students.stu_no,
    //     students.stu_name,
    //     course.cou_no,
    //     course.cou_name,
    //     grade.gra_score,
    //     grade.gra_remark
    //   from grade
    //     inner join students
    //       on students.stu_no = grade.stu_no
    //     inner join course
    //       on course.cou_no = grade.cou_no
    // `;
    let sql = 'select * from grade_view';
    if (JSON.stringify(params) !== '{}') {
      const findArr = Object.keys(params).map(key => `${key} = '${params[key]}'`);
      sql = `select * from grade_view where ${findArr.join(',')}`;
    }

    db.query(sql, (err, res) => {
      if (err) {
        reject(err);
      };
      resolve(res)
    });
  })
}

const queryAdd = params => {
  return new Promise((resolve, reject) => {
    const sql = `insert into grade set ?`;
    db.query(sql, params, (err, res) => {
      if (err) {
        reject(err);
      };
      resolve(res)
    });
  })
}

const queryDelete = params => {
  return new Promise((resolve, reject) => {
    const sql = `delete from grade where gra_id = ${params.gra_id}`;
    db.query(sql, (err, res) => {
      if (err) {
        reject(err);
      };
      resolve(res)
    });
  })
}

const queryItem = params => {
  return new Promise((resolve, reject) => {
    const sql = `select * from grade where gra_id = ${params.gra_id}`;
    db.query(sql, (err, res) => {
      if (err) {
        reject(err);
      };
      resolve(res)
    });
  })
}

const queryUpdate = params => {
  return new Promise((resolve, reject) => {
    const gra_id = params.gra_id;
    delete params.gra_id;
    const updateArr = Object.keys(params).map(key => `${key} = '${params[key]}'`);
    const sql = `update grade set ${updateArr.join(',')} where gra_id = '${gra_id}'`;
    db.query(sql, (err, res) => {
      if (err) {
        reject(err);
      };
      resolve(res)
    });
  })
}

export default {
  queryFind,
  queryAdd,
  queryDelete,
  queryItem,
  queryUpdate,
}