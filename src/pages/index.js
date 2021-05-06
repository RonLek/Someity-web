import React, { useState, useEffect, useRef } from "react";
import { SiGooglechrome, SiBrave } from "react-icons/si";
import { StaticImage } from "gatsby-plugin-image";
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
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none title">
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
      <section id="features" className="py-10 lg:pb-40 lg:pt-15">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-medium">Actions</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage className="-z-1" src="../images/globe.png" />
                <h4 className="text-xl mt-5">Say "Open Wikipedia"</h4>
                <p className="mt-4 text-gray-500">
                  Go to websites by just naming them.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage className="-z-1" src="../images/youtube.png" />
                <h4 className="text-xl mt-5">Say "Play Starboy"</h4>
                <p className="mt-4 text-gray-500">
                  Just name your YouTube videos.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage className="-z-1" src="../images/translate.png" />
                <h4 className="text-xl mt-5">Say "Translate Bonjour"</h4>
                <p className="mt-4 text-gray-500">
                  Translate from any language to English by just speaking.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage className="-z-1" src="../images/google-maps.png" />
                <h4 className="text-lg mt-5">
                  Say "Direction Mumbai to Delhi"
                </h4>
                <p className="mt-4 text-gray-500">
                  Go places by just naming your source and destinations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 text-center">
        <StaticImage
          src="../images/icon.png"
          alt="Someity"
          className="w-100 -z-1"
        />
        <p className="mt-8 text-3xl font-medium">Get Started</p>
        <p className="mt-8">
          <Button size="lg">Download Someity Today</Button>
        </p>
      </section>

      <section className="mt-20 py-20 text-center">
        <p className="my-8 text-3xl font-medium">Watch the Video</p>
        <div className="flex justify-center">
          <iframe
            width="900"
            height="500"
            className="rounded-md shadow-xl"
            allowFullScreen
            src="https://www.youtube.com/embed/B8UydVf37yY"
            title="Someity - Making the Web Accessible for All"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowFullScreen"
          />
        </div>
      </section>

      <section className="py-20 px-20 text-center">
        <p className="my-8 text-3xl font-medium">Why Someity?</p>
        <div>
          <p className="text-xl my-10">
            More than 70% websites on the Internet have been classified as
            in-accessible. This is inimical to people with disabilities and
            restricts involving them within the Internet Community. We were
            determined to change this. We built Someity which can make all
            websites on the Internet accessible to individuals with
            accessibility challenges and also serve as a productivity tool
            without having website makers change a single line of source code.
          </p>
          <p className="text-xl">
            We named our extension Someity after the Tokyo 2020 Paralympic
            Mascot. It means "Someiyoshino" — a popular type of cherry blossom —
            and the phrase <strong>"so mighty"</strong>. Someity can show
            enormous mental and physical strength, representing Paralympic
            athletes who overcome obstacles and redefine the boundaries of
            possibility. The logo of Someity is the{" "}
            <a href="https://en.wikipedia.org/wiki/Akita_(dog)">Akita</a> dog
            one of the most powerful and independent Japanese dog breeds.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
