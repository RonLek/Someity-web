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
            to={props.props.path === "/demo/" ? "/" : "/demo"}
            className="px-4"
          >
            {props.props.path === "/demo/" ? "Home" : "Demo Page"}
          </Link>
          <Button className="text-sm ml-3">Download</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
