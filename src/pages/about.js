import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import History from "../components/History";
import WorkingProcess from "../components/WorkingProcess";

function About() {
  return (
    <React.Fragment>
      <Layout page="About">
        <Header about={true}></Header>
        {/* <Preloader /> */}
        <main id="main">
          <History />
          <WorkingProcess />
        </main>
        <Footer />
      </Layout>
    </React.Fragment>
  );
}

export default About;
