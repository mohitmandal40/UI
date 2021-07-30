import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useRef, useState } from "react";
import styleClasses from "./MainContent.module.css";
import image from "../assets/download.jpeg";

const MainContent = () => {
  const [file, setFile] = useState(null);
  let inputRef = useRef();

  const uploadFileHandler = (e) => {
    console.log(e);

    if (e.target.files[0]) {
      let imageStr = e.target.files[0].name.split(" ").join("");
      setFile(imageStr);
    }
  };
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      mt={8}
      style={{ justifyContent: "center" }}
    >
      <Box
        boxShadow={3}
        display="flex"
        flexDirection="column"
        style={{
          minWidth: "19%",
          padding: "3rem",
          height: "25rem",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <Typography
          className={styleClasses.CardHeading}
          component="h4"
          style={{
            marginTop: "1rem",
            marginBottom: "0.3rem",
            fontWeight: "bolder",
            fontSize: "1.3rem",
          }}
        >
          Settings
        </Typography>
        <ul className={styleClasses.Lists}>
          <li className={styleClasses.List}>
            <a href="index.html">Profile</a>
          </li>
          <li className={styleClasses.List}>
            <a href="index.html">Notifications</a>
          </li>
          <li className={styleClasses.List}>
            <a href="index.html">Calls</a>
          </li>
          <li className={styleClasses.List}>
            <a href="index.html">Meetings</a>
          </li>
          <li className={styleClasses.List}>
            <a href="index.html">Audio/Video Settings</a>
          </li>
        </ul>
      </Box>
      <Box
        boxShadow={3}
        display="flex"
        flexDirection="column"
        style={{
          padding: "3rem",
          minWidth: "40%",
          height: "25rem",
          marginLeft: "1rem",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <Typography
          component="h4"
          style={{
            marginTop: "1rem",
            marginBottom: "1rem",
            fontWeight: "bolder",
            fontSize: "1.3rem",
          }}
        >
          Profile
        </Typography>
        <h6>Profile Image</h6>
        <Box display="flex" justifyContent="flex-start">
          <img
            src={file ? file : image}
            alt="hello"
            className={styleClasses.img}
          />
          <input
            onChange={uploadFileHandler}
            type="file"
            id="file"
            ref={(fileInput) => (inputRef = fileInput)}
          />
          <button
            onClick={() => {
              if (inputRef) {
                inputRef.click();
              }
            }}
            className={styleClasses.profileBtn}
          >
            Profile Image
          </button>
          <button className={styleClasses.removeBtn}>Remove</button>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          style={{ width: "100%", marginTop: "1rem" }}
        >
          <div>
            <div>
              <label htmlFor="name">Full Name</label>
            </div>
            <div>
              <input type="text" id="name" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email Address</label>
            </div>
            <div>
              <input type="email" id="email" />
            </div>
          </div>
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <button className={styleClasses.save}>Save</button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
