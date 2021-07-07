import React from "react";
import Layout from "../components/layout/Layout";

const Feedback = (props) => {
  return (
    <Layout props={props}>
      <div className="container mx-auto text-center mt-10 flex items-center flex-col">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none title my-10">
          Help us make Someity better ❤️
        </h1>

        <iframe
          title="Feedback form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSegaJcOaA_fSNwJoSlJHdZErrKKGnVahAzjAUEXV21qdt4edQ/viewform?embedded=true"
          width="640"
          height="1050"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </Layout>
  );
};

export default Feedback;
