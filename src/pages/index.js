import React, { useState, useEffect, useRef } from "react";
import { SiGooglechrome, SiBrave } from "react-icons/si";
import { StaticImage } from "gatsby-plugin-image";
import { FormiumForm, defaultComponents } from "@formium/react";
import { graphql } from "gatsby";
import { withSnackbar } from "react-simple-snackbar";
import Button from "../components/Button";
import Card from "../components/Card";
import Layout from "../components/layout/Layout";
import SplitSection from "../components/SplitSection";
import introWalkThrough from "../images/intro-walkthrough.mp4";
import focusMode from "../images/focus-mode.mp4";
import magnifier from "../images/magnifier.mp4";
import colorBlindness from "../images/color-blindness.mp4";
import formium from "../lib/formium";

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

function TextInput(props) {
  return (
    <input
      {...props}
      placeholder="Your Email"
      style={{ border: "1px solid gray", borderRadius: "15px" }}
      className="p-3 mr-3"
    />
  );
}

function SubmitButton(props) {
  return (
    <button
      {...props}
      type="submit"
      className="py-3 px-8 bg-primary-darker hover:bg-blue-700 rounded-full text-white "
    >
      Submit
    </button>
  );
}

function PageWrapper(props) {
  return <div {...props} className="flex flex-row justify-center" />;
}

const Index = (props) => {
  const { openSnackbar, closeSnackbar } = props;

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
      "lg:pl-32 xl:pl-48 animation-element slide-right in-view";
  }

  if (isVisibler2) {
    refr2.current.className = "animation-element slide-left in-view";
  }

  if (isVisiblel3) {
    refl3.current.className =
      "lg:pr-32 xl:pr-48 animation-element slide-left in-view";
  }

  if (isVisibler3) {
    refr3.current.className = "animation-element slide-right in-view";
  }

  return (
    <Layout props={props}>
      <section className="pt-20 mb-20 md:pt-40">
        <div className="container mx-auto px-8 lg:flex">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none title">
              Your all in one accessibility and productivity tool.
            </h1>
            <p className="text-lg lg:text-2lg mt-6 font-light">
              Start taking control of how webpages display in your browser and
              more!
            </p>
            <div
              style={{ borderLeft: "3px solid #a0a5b0" }}
              className="mt-6 p-2 items-center flex items-center"
            >
              <StaticImage
                width={15}
                height={15}
                className="-z-1 mr-3"
                src="../images/trophy.png"
                alt="Winner at Hack-ccessible"
              />{" "}
              <span className="text-gray-700">
                Winner at Hack-ccessible Hackathon
              </span>
            </div>
            <div className="mt-6 md:mt-10 flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://chrome.google.com/webstore/detail/someity/jifjdmnjnmpbclnpjlmebkclilekkdho"
              >
                <Button size="default">Download now</Button>
              </a>
              <a
                className="ml-5 flex items-center"
                href="https://www.producthunt.com/posts/someity?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-someity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=295632&theme=light"
                  alt="Someity - Making the web accessible for all | Product Hunt"
                />
              </a>
            </div>
            <div className="mt-4 ml-2 text-gray-600 flex flex-row items-center">
              Available on:{" "}
              <SiGooglechrome className="mx-4 " title="Google Chrome" />{" "}
              <SiBrave title="Brave Browser" />
            </div>
          </div>
          <div className="flex lg:w-1/2">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                boxShadow: "-13px 10px 20px 0px rgb(0 0 0 / 8%)",
                borderRadius: "10px",
              }}
            >
              <source src={introWalkThrough} type="video/mp4" />
            </video>
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
            <h3 className="text-3xl font-semibold leading-tight">Focus Mode</h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Suffering from cognitive impairments, short attention span or just
              want to stay focussed? Focus Mode is just for you!
            </p>
          </div>
        }
        secondarySlot={
          <div className="animation-element slide-right" ref={refr1}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                boxShadow: "-13px 10px 20px 0px rgb(0 0 0 / 8%)",
                borderRadius: "10px",
              }}
            >
              <source src={focusMode} type="video/mp4" />
            </video>
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
              Image Magnifier
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Image too small to be clearly visible? Don't strain your eyes!
              Magnify the smallest of images with just a hover.
            </p>
          </div>
        }
        secondarySlot={
          <div className="animation-element slide-left" ref={refr2}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                boxShadow: "-13px 10px 20px 0px rgb(0 0 0 / 8%)",
                borderRadius: "10px",
              }}
            >
              <source src={magnifier} type="video/mp4" />
            </video>
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
              Color Blindness Support
            </h3>
            <p className="mt-8 text-xl font-light leading-relaxed">
              Have red-green, blue-yellow or total color blindness and wish if
              only texts and link were better visible? We got you covered!
            </p>
          </div>
        }
        secondarySlot={
          <div className="animation-element slide-right" ref={refr3}>
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                boxShadow: "-13px 10px 20px 0px rgb(0 0 0 / 8%)",
                borderRadius: "10px",
              }}
            >
              <source src={colorBlindness} type="video/mp4" />
            </video>
          </div>
        }
      />
      <section id="features" className="py-10 lg:pb-40 lg:pt-15">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-medium">Actions</h2>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage
                  alt="Open Websites"
                  className="-z-1"
                  src="../images/globe.png"
                />
                <h4 className="text-xl mt-5">Say "Open Wikipedia"</h4>
                <p className="mt-4 text-gray-500">
                  Go to websites by just naming them.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage
                  alt="Play YouTube videos"
                  className="-z-1"
                  src="../images/youtube.png"
                />
                <h4 className="text-xl mt-5">Say "Play Starboy"</h4>
                <p className="mt-4 text-gray-500">
                  Just name your YouTube videos.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage
                  alt="Translate from any language"
                  className="-z-1"
                  src="../images/translate.png"
                />
                <h4 className="text-xl mt-5">Say "Translate Bonjour"</h4>
                <p className="mt-4 text-gray-500">
                  Translate from any language to English by just speaking.
                </p>
              </Card>
            </div>
            <div className="flex-1 px-1">
              <Card className="mb-8">
                <StaticImage
                  alt="Get Directions"
                  className="-z-1"
                  src="../images/google-maps.png"
                />
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chrome.google.com/webstore/detail/someity/jifjdmnjnmpbclnpjlmebkclilekkdho"
          >
            <Button size="lg">Download Someity Today</Button>
          </a>
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
            src="https://www.youtube.com/embed/sIABhzXg6_A"
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
      <section className="py-20 px-20 text-center">
        <p className="my-8 text-3xl font-medium">Receive our Newsletter</p>
        <p className="mb-20">
          Be the first to know about the latest updates and announcements to
          Someity{" "}
        </p>
        <FormiumForm
          data={props.data.formiumForm}
          components={{
            ...defaultComponents,
            TextInput,
            SubmitButton,
            PageWrapper,
          }}
          onSubmit={async (values) => {
            // Send form values to Formium
            await formium.submitForm("someity-email-sign-up", values);
            openSnackbar("Submitted! Thanks for signing up. Woof.");
          }}
        />
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    formiumForm(slug: { eq: "someity-email-sign-up" }) {
      id
      createAt
      name
      projectId
      schema
      slug
      updateAt
      version
    }
  }
`;

const options = {
  position: "top-right",
  style: {
    backgroundColor: "#4caf50",
    border: "1px solid #4caf50",
    color: "white",
    fontWeight: 500,
    fontFamily: "Menlo, monospace",
    fontSize: "0.875rem",
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    borderRadius: "4px",
  },
  closeStyle: {
    color: "white",
    fontSize: "0.875rem",
  },
};

export default withSnackbar(Index, options);
