"use client";
import React, { useState } from "react";

import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import ArrowCircleDownRoundedIcon from "@mui/icons-material/ArrowCircleDownRounded";

import { Button, Menu, MenuItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";

const useStyle = makeStyles((theme) => ({
  button: {
    textTransform: "none",
  },
  typography: {
    color: "#4F5053",
    fontSize: "12px",
    fontWeight: "bold",
  },
  icon: {
    color: "#660066",
    fontSize: "20px",
    marginRight: "5px",
  },
}));

const Header = () => {
  const classes = useStyle();
  const [language, setLanguage] = useState("ES");

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuLang = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (prop) => () => {
    setLanguage(prop);
    setAnchorEl(null);
  };

  return (
    <header className="flex justify-between px-24 py-6 ">
      <div className="flex items-center">
        <EmailIcon className={classes.icon} />
        <Typography className={classes.typography}>
          andresfelipesalazarpena@gmail.com
        </Typography>
      </div>
      <div className="grid gap-4 grid-flow-col ">
        <Button className={classes.button}>
          <PersonRoundedIcon className={classes.icon} />
          <Typography className={classes.typography}>
            {language === "ES" ? "Sobre mi" : "About me"}
          </Typography>
        </Button>
        <Button className={classes.button}>
          <InsertDriveFileRoundedIcon className={classes.icon} />
          <Typography className={classes.typography}>
            {language === "ES" ? "Trabajos" : "Works"}
          </Typography>
        </Button>
        <Button className={classes.button}>
          <ArrowCircleDownRoundedIcon className={classes.icon} />
          <Typography className={classes.typography}>
            {language === "ES" ? "Descargar CV" : "Download CV"}
          </Typography>
        </Button>
        <div>
          <Button className={classes.button} onClick={handleMenuLang}>
            <div className=" mr-2 ">
              <Image
                src={
                  language === "ES"
                    ? "/assets/flags/spain.png"
                    : "/assets/flags/united-states.png"
                }
                alt={language === "ES" ? "Spain flag" : "USA flag"}
                width={30}
                height={30}
              />
            </div>
            <Typography className={classes.typography}>{language}</Typography>
          </Button>
          <Menu
            id="language-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose("ES")}>
              <div className="mr-2">
                <Image
                  src="/assets/flags/spain.png"
                  alt="Spain flag"
                  width={30}
                  height={30}
                />
              </div>
              <Typography className={classes.typography}>ES</Typography>
            </MenuItem>
            <MenuItem onClick={handleClose("EN")}>
              <div className="mr-2">
                <Image
                  src="/assets/flags/united-states.png"
                  alt="USA flag"
                  width={30}
                  height={30}
                />
              </div>
              <Typography className={classes.typography}>EN</Typography>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
