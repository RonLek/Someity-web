import React, { useState, useEffect, useRef } from "react";
import { SiGooglechrome, SiBrave } from "react-icons/si";
import Button from "../components/Button";
import Card from "../components/Card";
import CustomerCard from "../components/CustomerCard";
import LabelText from "../components/LabelText";
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";
import StatsBox from "../components/StatsBox";
import customerData from "../data/customer-data";
import HeroImage from "../svg/HeroImage";
import SvgCharts from "../svg/SvgCharts";

function useOnScreen(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

const Index = () => {
  const refl1 = useRef();
  const refr1 = useRef();
  const refl2 = useRef();
  const refr2 = useRef();
  const refl3 = useRef();
  const refr3 = useRef();

  const isVisiblel1 = useOnScreen(refl1);
  const isVisibler1 = useOnScreen(refr1);
  const isVisiblel2 = useOnScreen(refl2);
  const isVisibler2 = useOnScreen(refr2);
  const isVisiblel3 = useOnScreen(refl3);
  const isVisibler3 = useOnScreen(refr3);

  if (isVisiblel1) {
    refl1.current.className =
      "lg:pr-32 xl:pr-48 animation-element slide-left in-view";
  }

  if (isVisibler1) {
    refr1.current.className = "animation-element slide-right in-view";
  }

  if (isVisiblel2) {
    refl2.current.className =
      "lg:pr-32 xl:pr-48 animation-element slide-left in-view";
  }

  if (isVisibler2) {
    refr2.current.className = "animation-element slide-right in-view";
  }

  if (isVisiblel3) {
    refl3.current.className =
      "lg:pr-32 xl:pr-48 animation-element slide-left in-view";
  }

  if (isVisibler3) {
    refr3.current.className = "animation-element slide-right in-view";
  }

  return (
    <Layout>
      <section className="pt-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">
              Your all in one accessibility and productivity tool.
            </h1>
            <p className="text-lg lg:text-2lg mt-6 font-light">
              Start taking control of how webpages display in your browser and
              more!
            </p>
            <p className="mt-6 md:mt-10">
              <Button size="default">Download now</Button>
            </p>
            <div className="mt-4 ml-2 text-gray-600 flex flex-row items-center">
              Available on:{" "}
              <SiGooglechrome className="mx-4 " title="Google Chrome" />{" "}
              <SiBrave title="Brave Browser" />
            </div>
          </div>
          <div className="lg:w-1/2">
            <HeroImage />
          </div>
        </div>
      </section>
      <SplitSection
        id="services"
        primarySlot={
          <div
            ref={refl1}
            className="lg:pr-32 xl:pr-48 animation-element slide-left"
          >
            <h3 className="text-3xl font-semibold leading-tight">
              Market Analysis
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Our team of enthusiastic marketers will analyse and evaluate how
              your company stacks against the closest competitors
            </p>
          </div>
        }
        secondarySlot={
          <div className="animation-element slide-right" ref={refr1}>
            <SvgCharts />{" "}
          </div>
        }
      />
      <SplitSection
        reverseOrder
        primarySlot={
          <div
            ref={refl2}
            className="lg:pl-32 xl:pl-48 animation-element slide-right"
          >
            <h3 className="text-3xl font-semibold leading-tight">
              Design And Plan Your Business Growth Steps
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Once the market analysis process is completed our staff will
              search for opportunities that are in reach
            </p>
          </div>
        }
        secondarySlot={
          <div className="animation-element slide-left" ref={refr2}>
            <SvgCharts />{" "}
          </div>
        }
      />
      <SplitSection
        primarySlot={
          <div
            ref={refl3}
            className="lg:pr-32 xl:pr-48 animation-element slide-left"
          >
            <h3 className="text-3xl font-semibold leading-tight">
              Search For Performance Optimization
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              With all the information in place you will be presented with an
              action plan that your company needs to follow
            </p>
          </div>
        }
        secondarySlot={
          <div className="animation-element slide-right" ref={refr3}>
            <SvgCharts />{" "}
          </div>
        }
      />
      <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-semibold">Main Features</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Service One</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta
                  justo integer odio velna vitae auctor integer.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Service Two</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta
                  justo integer odio velna vitae auctor integer.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-3">
              <Card className="mb-8">
                <p className="font-semibold text-xl">Service Three</p>
                <p className="mt-4">
                  An enim nullam tempor gravida donec enim ipsum blandit porta
                  justo integer odio velna vitae auctor integer.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="stats" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600">
            Our customers get results
          </LabelText>
          <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
            <div className="w-full sm:w-1/3">
              <StatsBox primaryText="+100%" secondaryText="Stats Information" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 lg:py-40">
        <div className="container mx-auto">
          <LabelText className="mb-8 text-gray-600 text-center">
            What customers are saying
          </LabelText>
          <div className="flex flex-col md:flex-row md:-mx-3">
            {customerData.map((customer) => (
              <div key={customer.customerName} className="flex-1 px-3">
                <CustomerCard customer={customer} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
        <h3 className="text-5xl font-semibold">Ready to grow your business?</h3>
        <p className="mt-8 text-xl font-light">
          Quis lectus nulla at volutpat diam ut. Enim lobortis scelerisque
          fermentum dui faucibus in.
        </p>
        <p className="mt-8">
          <Button size="xl">Get Started Now</Button>
        </p>
      </section>
    </Layout>
  );
};

export default Index;
