const GET_ALL_CUSTOMERS=`
SELECT * FROM customers_list
`;
const GET_CUSTOMER_BY_ID=`
SELECT * FROM customers_list where id=$1
`;
const ADD_CUSTOMER=`
INSERT INTO customers_list
(id,name, email, passwd, contact_number, customer_image, status)
VALUES($1, $2, $3, $4, $5, $6,$7);
`;

module.exports={
    GET_ALL_CUSTOMERS,
    GET_CUSTOMER_BY_ID,
    ADD_CUSTOMER
}