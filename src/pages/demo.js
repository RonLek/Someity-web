import React from "react";
import Layout from "../components/layout/Layout";

import akitaImage from "../images/Akita.jpg";
import americanAkita from "../images/American-akita.jpg";
import americanAkita9yo from "../images/American-akita-9yo.jpg";

const NotFound = (props) => (
  <Layout props={props}>
    <div
      className="bg-gradient-to-r from-green-400 to-blue-500"
      style={{
        height: "400px",
        textAlign: "center",
        fontSize: "5rem",
        color: "white",
      }}
    >
      <p style={{ paddingTop: "50px" }}>
        {" "}
        Demo Page
        <br />
        Experiment with all features of Someity on this page!
      </p>
    </div>
    <div className="container mx-auto px-2 py-2">
      <h1>
        {" "}
        <a
          className="text-3xl"
          href="https://en.wikipedia.org/wiki/Akita_(dog)"
        >
          Akita
        </a>
      </h1>
      <p className="text-xl py-2">
        The Akita is a large breed of dog originating from the mountainous
        regions of northern{" "}
        <a className="text-xl" href="https://en.wikipedia.org/wiki/Japan">
          Japan
        </a>{" "}
        . There are two separate varieties of Akita: a Japanese strain, commonly
        called Akita Inu (inu means dog in Japanese) or Japanese Akita, and an
        American strain, known as the Akita or American Akita.The Japanese
        strain comes in a narrow palette of colors, with all other colors
        considered atypical of the breed, while the American strain comes in all
        dog colors.The Akita has a short double-coat similar to that of many
        other northern spitz breeds such as the{" "}
        <a
          className="text-xl"
          href="https://en.wikipedia.org/wiki/Siberian_Husky"
        >
          Siberian Husky
        </a>
        , but long-coated dogs can also be found in many litters due to a
        recessive gene.
      </p>

      <div className="grid grid-rows-3 grid-flow-col gap-3 text-xl">
        <div className="row-span-3">
          <img className="mx-auto flex-initial" src={akitaImage} alt="Akita" />
        </div>
        <div className="col-span-2 ">
          <p>
            The Akita is a powerful, independent and dominant breed, commonly
            aloof with strangers but affectionate with family members. As a
            breed, Akitas are generally hardy.
          </p>
        </div>
        <div className="row-span-2 col-span-2">
          <p>
            The Akita is a powerful, independent and dominant breed, commonly
            aloof with strangers but affectionate with family members. As a
            breed, Akitas are generally hardy. In all countries except the
            United States, the Japanese and American strains of Akita are
            considered two separate breeds. In the United States, however, the
            two strains are considered a single breed with differences in type.
            For a while, the American strain of Akita was known in some
            countries as the Great Japanese Dog. Both forms of Akita are
            probably best known worldwide from the true story of Hachikō, a
            loyal Akita who lived in Japan before World War II.
          </p>
        </div>
      </div>
      <p className="text-xl my-4">
        There is a debate among fanciers whether there are two separate breeds
        of Akita. As of 2020, the American Kennel Club, now consider American
        and Japanese Akitas to be two separate breeds, no longer allowing free
        breeding between the two. The United Kennel Club The Federation
        Cynologique Internationale, The Kennel Club, the Australian National
        Kennel Council, the New Zealand Kennel Club, and the Japan Kennel Club
        consider Japanese and American Akitas as separate breeds.Some countries
        refer to the American Akita as simply the Akita and not the American
        Akita. The issue is especially controversial in Japan. For the FCI's 84
        countries, the breed split formally occurred June 1999, when the FCI
        decided that the American type would be called the Great Japanese Dog,
        later renamed the American Akita in January 2006.
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          {" "}
          <img
            className="mx-auto flex-initial"
            src={americanAkita}
            // style={{ width: "50%" }}
            alt="American Akita"
          />
        </div>
        <div>
          <img
            className="mx-auto flex-initial"
            src={americanAkita9yo}
            // style={{ width: "50%" }}
            alt="American Akita 9yo"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default NotFound;
