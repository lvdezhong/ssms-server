import db from './db';

const queryFind = params => {
  return new Promise((resolve, reject) => {
    let sql = 'select * from course';
    if (JSON.stringify(params) !== '{}') {
      const findArr = Object.keys(params).map(key => `${key} = '${params[key]}'`);
      sql = `select * from course where ${findArr.join(',')}`;
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
    const sql = `insert into course set ?`;
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
    const sql = `delete from course where cou_no = ${params.cou_no}`;
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
    const sql = `select * from course where cou_no = ${params.cou_no}`;
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
    const cou_no = params.cou_no;
    delete params.cou_no;
    const updateArr = Object.keys(params).map(key => `${key} = '${params[key]}'`);
    const sql = `update course set ${updateArr.join(',')} where cou_no = '${cou_no}'`;
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