import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Process from "../components/Process";
import ImgDescription from "../components/ImgDescription";
import Services from "../components/Services";
import Footer from "../components/Footer";
// import Preloader from "../components/Preloader";

function Home() {
  return (
    <React.Fragment>
      <Layout>
        <Header home={true}></Header>
        {/* <Preloader /> */}
        <main id="main">
          <Process />
          <ImgDescription />
          <Services />
        </main>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default Home;
