import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import { LINKS } from "@/static";
import Link from "next/link";
const Dashboard = () => {
  let card = LINKS?.map((el) => (
    <div className="list" key={el.id}>
      <Image src={el.img} alt={el.title} />
      <p>{el.title}</p>
    </div>
  ));
  return (
    <div className="dash">
      <Link href={"/"}>
        <div className="logo">
          <Image src={logo} alt="product" />
          <h1>Dashboard</h1>
        </div>
      </Link>
      <div className="lists">
        <Link href={"/"}>
          <div className="list">
            <Image src={icon1} alt="uesr" />
            <p>Users</p>
          </div>
        </Link>
        <Link href={"/products"}>
          <div className="list">
            <Image src={icon2} alt="prod" />
            <p>Products</p>
          </div>
        </Link>
        {card}
      </div>
    </div>
  );
};

export default Dashboard;
