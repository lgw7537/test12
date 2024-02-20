import Image from "next/image";
import Header from "./component/header";
import Main from "./component/main";
import Link from "next/link";
import InfoCard from "./component/InfoCard";
import Chart from "./component/Chart";


export default function Home() {
  return (
    <main>
      <Header />
      <Chart />
      <InfoCard />

    </main>
  );
}
