import Header from "../components/header";
import Head from "next/head";
import Link from "next/link";

const ShinyColors = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>STREAM@S - Shiny Colors</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header subTitle="Shiny Colors" color="#8dbafe" />
    </div>
  );
};

export default ShinyColors;
