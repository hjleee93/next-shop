import React from "react";

const OrderDetails = ({params, searchParams}) => {

  const {id} = params;
  console.log(id);

  return (
    <div>
      <h1>Order Details : {id}</h1>
    </div>
  );
}

export default OrderDetails;