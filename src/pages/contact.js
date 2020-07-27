import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Forms from "../components/Forms";
import Footer from "../components/Footer";



function contact(){
    return(
        <React.Fragment>
      <Layout>
        <Header contact={true}></Header>
        <main id="main" className="mainer">
            <Forms />
        </main>
        <Footer />
      </Layout>
    </React.Fragment>
    );
}

export default contact;