import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import Button from "../Button";

const Header = (props) => {
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8 bg-white">
        <div className="flex items-center text-2xl">
          <div className="w-10 mr-1 flex">
            <StaticImage
              alt="Someity"
              src="../../images/icon.png"
              alt="Someity"
              className="w-8"
            />
          </div>
          Someity
        </div>
        <div className="hidden md:block">
          <AnchorLink className="px-4" href="https://github.com/RonLek/Someity">
            Fork on GitHub
          </AnchorLink>
          <Link
            to={
              props.props ? (props.props.path === "/" ? "/feedback" : "/") : "/"
            }
            className="px-4"
          >
            {props.props
              ? props.props.path === "/"
                ? "Feedback"
                : "Home"
              : "Home"}
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chrome.google.com/webstore/detail/someity/jifjdmnjnmpbclnpjlmebkclilekkdho"
          >
            <Button className="text-sm ml-3">Download</Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
