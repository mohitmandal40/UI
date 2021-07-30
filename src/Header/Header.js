import React from "react";
import image from "../assets/download.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge varient="dot" color="secondary">
            <NotificationsOutlinedIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <SettingsOutlinedIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "white" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img src={image} alt="hello" width="50" height="50" />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            style={{ color: "#8a2be2" }}
          >
            Talkie
          </Typography>

          <div className={classes.grow} />
          <div className={classes.grow}>
            <Box display="flex" justifyContent="flex-end">
              <p style={{ color: "gray", fontSize: "0.7rem" }}>
                You are on a
                <span style={{ color: "#8a2be2", fontFamily: "Recursive" }}>
                  Trial plan
                </span>
                ,Your plan will expire in next 6 days.
              </p>
            </Box>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge variant="dot" color="primary">
                <NotificationsOutlinedIcon style={{ color: "gray" }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <SettingsOutlinedIcon style={{ color: "gray" }} />
            </IconButton>

            <IconButton color="inherit">
              <Badge variant="dot" color="secondary">
                <AccountCircleOutlinedIcon style={{ color: "gray" }} />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <KeyboardArrowDownOutlinedIcon style={{ color: "gray" }} />
            </IconButton>
          </div>
          <div className={classes.sectionMobile} style={{ color: "gray" }}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default Header;
