import Image from "next/image";
import AddUser from "./components/AddUser";
import DisplayUsers from "./components/DisplayUsers";

export default function Home() {
  return (
    <main className="p-[40px]">
      <AddUser />
      <DisplayUsers />
    </main>
  );
}
