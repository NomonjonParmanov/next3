import Dashboard from "@/components/dashbord/Dashboard";
import Navbar from "@/components/navbar/Navbar";
import Users from "@/components/users/Users";
import Image from "next/image";
async function getData() {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Home() {
  let data = await getData();
  return (
    <div>
      <Dashboard />
      <Navbar />
      <Users data={data} />
    </div>
  );
}
