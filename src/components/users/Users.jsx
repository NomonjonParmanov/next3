"use client";

import Image from "next/image";
import React from "react";

const Users = ({ data }) => {
  let user = data?.users?.map((el) => (
    <div className="user" key={el.id}>
      <div className="name">
        <Image src={el.image} width={50} height={50} alt={el.firstName} />
        <p>
          {el.firstName} {el.lastName}
        </p>
      </div>
      <div className="data">
        <p>{el.bank.cardExpire}</p>
      </div>

      <div className="address">
        <p>$2000</p>
      </div>
      <div className="lose">
        <p>$1000</p>
      </div>
      <div className="phone">
        <p>{el.phone}</p>
      </div>
    </div>
  ));
  return (
    <div className="user">
      <div className="head">
        <p>Owner</p>
        <p>End date</p>
        <p>Profits</p>
        <p>Losses</p>
        <p>Phone</p>
      </div>
      <div className="users">{user}</div>
    </div>
  );
};

export default Users;
