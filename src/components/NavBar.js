import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
  return (
    <header className="bg-blue-700">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-gray-800 text-4xl font-bold cursive tracking-widest"
          >
            Akaljot
          </NavLink>

          <NavLink
            to="/post"
            className="infline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-gray-900"
            activeClassName="text-gray-400 bg-gray-700"
          >
            Blog Post
          </NavLink>

          <NavLink
            to="/project"
            className="infline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-gray-900"
            activeClassName="text-gray-400 bg-gray-700"
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            className="infline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-gray-900"
            activeClassName="text-gray-400 bg-gray-700"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
            <SocialIcon url="https://twitter.com/AkaljotG" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
            <SocialIcon url="https://www.instagram.com/akaljotg/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
            <SocialIcon url="https://www.linkedin.com/in/akaljot-g-67178b9b/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
        </div>
      </div>
    </header>
  );
}
