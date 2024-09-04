import html from "/public/skills/html.svg";
import css from "/public/skills/css.svg";
import expressjs from "/public/skills/expressjs.svg";
import react from "/public/skills/react.svg";
import figma from "/public/skills/figma.svg";
import git from "/public/skills/git.svg";
import javascript from "/public/skills/javascript.svg";
import materialui from "/public/skills/materialui.svg";
import mongodb from "/public/skills/mongodb.svg";
import nextjs from "/public/skills/nextjs.svg";
import reactbootstrap from "/public/skills/reactbootstrap.svg";
import tailwindcss from "/public/skills/tailwindcss.svg";
import redux from "/public/skills/redux.svg";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;

    case "css":
      return css;

    case "javascript":
      return javascript;
    case "next js":
      return nextjs;

    case "react":
      return react;

    case "mongodb":
      return mongodb;

    case "redux":
      return redux;

    case "git":
      return git;

    case "materialui":
      return materialui;

    case "figma":
      return figma;

    case "express js":
      return expressjs;

    case "reactbootstrap":
      return reactbootstrap;

    case "tailwind css":
      return tailwindcss;
    default:
      break;
  }
};
