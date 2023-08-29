const Pool = require("../config/db");

const createCustomer = (data) => {
  const {
    customer_id,
    customer_email,
    customer_passwordHash,
    customer_fullname,
    role,
    customer_address,
    customer_phone,
  } = data;
  return Pool.query(
    `INSERT INTO customer(customer_id,customer_email,customer_password,customer_fullname,role,customer_address,customer_phone ) VALUES('${customer_id}','${customer_email}','${customer_passwordHash}','${customer_fullname}','${role}','${customer_address}','${customer_phone}')`
  );
};

const updateCustomer = (data) => {
  const {
    customer_id,
    customer_email,
    customer_fullname,
    customer_address,
    customer_phone,
  } = data;
  return Pool.query(
    `UPDATE customer SET customer_email='${customer_email}', customer_fullname='${customer_fullname}', customer_address='${customer_address}', customer_phone='${customer_phone}' WHERE customer_id='${customer_id}'`
  );
};

const findEmail = (customer_email) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT * FROM customer WHERE customer_email='${customer_email}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

const findId = (customer_id) => {
  return new Promise((resolve, reject) =>
    Pool.query(
      `SELECT customer_id FROM customer WHERE customer_id='${customer_id}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    )
  );
};

module.exports = {
  createCustomer,
  updateCustomer,
  findEmail,
  findId,
};
