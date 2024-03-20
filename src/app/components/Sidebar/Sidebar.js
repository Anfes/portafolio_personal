"use client";
import Image from "next/image";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";

const useStyle = makeStyles((theme) => ({
  icon: {
    color: "#660066",
    fontSize: "40px",
  },
}));

const Sidebar = () => {
  const classes = useStyle();
  return (
    <div className="w-32 min-h-screen px-6 py-6 bg-slate-50 flex flex-col items-center justify-between">
      <div>
        <Image
          src="/assets/home/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <IconButton>
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton>
          <LinkedInIcon className={classes.icon} />
        </IconButton>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
