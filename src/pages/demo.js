import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout/Layout";

const NotFound = (props) => (
  <Layout props={props}>
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
      <p className="text-lg py-2">
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

      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <StaticImage
            className="mx-auto flex-initial"
            src="../images/Akita.jpg"
            alt="Akita"
          />
        </div>
        <div className="col-span-2 ">
          The Akita is a powerful, independent and dominant breed, commonly
          aloof with strangers but affectionate with family members. As a breed,
          Akitas are generally hardy.
        </div>
        <div className="row-span-2 col-span-2">3</div>
      </div>
      <p className="text-lg">
        The Akita is a powerful, independent and dominant breed, commonly aloof
        with strangers but affectionate with family members. As a breed, Akitas
        are generally hardy. In all countries except the United States, the
        Japanese and American strains of Akita are considered two separate
        breeds. In the United States, however, the two strains are considered a
        single breed with differences in type. For a while, the American strain
        of Akita was known in some countries as the Great Japanese Dog. Both
        forms of Akita are probably best known worldwide from the true story of
        Hachikō, a loyal Akita who lived in Japan before World War II.
      </p>
    </div>
  </Layout>
);

export default NotFound;
