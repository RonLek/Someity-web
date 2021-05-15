import React from "react";
import Layout from "../components/layout/Layout";

import akitaImage from "../images/Akita.jpg";
import americanAkita from "../images/American-akita.jpg";

const NotFound = (props) => (
  <Layout props={props}>
    <div className="container mx-auto text-center mt-10">
      <h2 className="text-3xl lg:text-5xl font-medium">Demo Page</h2>
      <br />
      Experiment with all features of Someity on this page!
    </div>

    <div className="container mx-10 mt-10 px-2 py-2">
      <h1>
        {" "}
        <a
          className="text-3xl"
          href="https://en.wikipedia.org/wiki/Akita_(dog)"
        >
          Akita
        </a>
      </h1>
      <p className="text-lg text-justify py-2">
        The Akita is a large breed of dog originating from the mountainous
        regions of northern{" "}
        <a className="text-xl" href="https://en.wikipedia.org/wiki/Japan">
          Japan
        </a>
        . There are two separate varieties of Akita: a Japanese strain, commonly
        called Akita Inu (inu means dog in Japanese) or Japanese Akita, and an
        American strain, known as the Akita or American Akita. The Japanese
        strain comes in a narrow palette of colors, with all other colors
        considered atypical of the breed, while the American strain comes in all
        dog colors. The Akita has a short double-coat similar to that of many
        other northern spitz breeds such as the{" "}
        <a
          className="text-lg"
          href="https://en.wikipedia.org/wiki/Siberian_Husky"
        >
          Siberian Husky
        </a>
        , but long-coated dogs can also be found in many litters due to a
        recessive gene.
      </p>

      <div className="grid grid-rows-3 grid-flow-col gap-3 text-lg">
        <div className="col-span-2 ">
          <p>
            The Akita is a powerful, independent and dominant breed, commonly
            aloof with strangers but affectionate with family members. As a
            breed, Akitas are generally hardy.
          </p>
        </div>
        <div className="row-span-2 col-span-2">
          <p>
            As a breed, Akitas are generally hardy. In all countries except the
            United States, the Japanese and American strains of Akita are
            considered two separate breeds. In the United States, however, the
            two strains are considered a single breed with differences in type.
            For a while, the American strain of Akita was known in some
            countries as the Great Japanese Dog. Both forms of Akita are
            probably best known worldwide from the true story of{" "}
            <a href="https://en.wikipedia.org/wiki/Hachik%C5%8D">Hachikō</a>, a
            loyal Akita who lived in Japan before{" "}
            <a href="https://en.wikipedia.org/wiki/World_War_II">
              World War II
            </a>
            .
          </p>
        </div>
        <div className="row-span-3">
          <img
            className="mx-auto flex-initial"
            src={akitaImage}
            alt="Akita"
            style={{ width: "20rem" }}
          />
        </div>
      </div>
      <h1
        className="text-3xl mt-10"
        style={{
          color:
            "rgba(65.3055, 153.35444999999999, 225.39449999999997, var(--text-opacity))",
        }}
      >
        Breed Name
      </h1>
      <div className="grid grid-rows-3 grid-flow-col gap-3 text-lg">
        <div className="row-span-2 col-span-2">
          <p className="text-lg my-4">
            There is a debate among fanciers whether there are two separate
            breeds of Akita. As of 2020, the{" "}
            <a href="https://en.wikipedia.org/wiki/American_Kennel_Club">
              American Kennel Club
            </a>
            , now consider American and Japanese Akitas to be two separate
            breeds, no longer allowing free breeding between the two. The United
            Kennel Club The Federation Cynologique Internationale, The Kennel
            Club, the Australian National Kennel Council, the New Zealand Kennel
            Club, and the Japan Kennel Club consider Japanese and American
            Akitas as separate breeds.Some countries refer to the American Akita
            as simply the Akita and not the American Akita. The issue is
            especially controversial in Japan. For the FCI's 84 countries, the
            breed split formally occurred June 1999, when the FCI decided that
            the American type would be called the Great Japanese Dog, later
            renamed the American Akita in January 2006.
          </p>
        </div>
        <div className="row-span-3">
          <img
            className="mx-auto flex-initial"
            src={americanAkita}
            alt="American Akita"
            style={{ width: "20rem" }}
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
