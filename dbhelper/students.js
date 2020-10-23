import db from './db';

const queryFind = params => {
  return new Promise((resolve, reject) => {
    let sql = 'select * from students';
    if (JSON.stringify(params) !== '{}') {
      const findArr = Object.keys(params).map(key => `${key} = '${params[key]}'`);
      sql = `select * from students where ${findArr.join(',')}`;
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
    const sql = `insert into students set ?`;
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
    const sql = `delete from students where stu_no = ${params.stu_no}`;
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
    const sql = `select * from students where stu_no = ${params.stu_no}`;
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
    const stu_no = params.stu_no;
    delete params.stu_no;
    const updateArr = Object.keys(params).map(key => `${key} = '${params[key]}'`);
    const sql = `update students set ${updateArr.join(',')} where stu_no = '${stu_no}'`;
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