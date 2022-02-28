import type { NextPage } from "next";
import Head from "next/head";

import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Main from "../components/Main/Main";
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Geek Code Planet | We create</title>
        <meta
          name="description"
          content="Geek Code Planet is an IT and Education consultancy firm."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="lg:px-16 py-4">
        <Header />
        <div className=" md:mx-8  lg:mx-16 md:mt-20">
         
          <Hero />
        </div>
        <div className=" md:mx-8  lg:mx-16 md:mt-20">
         
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Home;
