import React from "react";
import "./GitHub.css";
import { Button, Typography } from "@mui/material";
import HamburgerMenu from "../../atoms/HamburgerMenu";
import Footer from "../../organisms/Footer";

export default function GitHub() {
  return (
    <>
      <HamburgerMenu></HamburgerMenu>
      <div className="wiki_title">Learn more about Git</div>
      <div className="inner_div">
        <Typography className="inner_text">
        GitHub is a web-based platform for version control and collaborative software development. It enables developers to work together on projects, manage source code, track changes and provide feedback. GitHub is based on the distributed version control system Git and provides an easy-to-use interface that allows developers to host, publish, and manage their projects. Each project is stored in a so-called "repository" (repo) where all files, folders, changes and history of the code are managed. The platform offers features such as branching and merging to enable parallel development strands and efficiently merge changes. Developers can create pull requests to suggest changes and get feedback from team members before they are incorporated into the main code. GitHub also enables collaboration in teams. Developers can report issues, conduct discussions, and track tasks. In addition, it offers features such as wikis, project management tools, and continuous integration to improve the efficiency and quality of software development. The platform is not only limited to open source projects, but is also used by companies for their private projects. GitHub offers both free and paid subscription plans with enhanced features and options for managing private repositories. Overall, GitHub has become an important tool for developers and teams to work together on projects, manage code, and collaborate on software development.
        </Typography>

        <Button className="button" variant="contained">
          How the video was made
        </Button>
        <iframe width="1118" height="629" src="https://www.youtube.com/embed/CT5LbGWp1e4" title="Lernvideo Anojan Pirabakaran" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
      <Footer />
    </>
  );
}
