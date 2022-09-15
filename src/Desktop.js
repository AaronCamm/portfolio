import React, { useState } from "react";
import "./desktop.css";
import TerminalIcon from "@mui/icons-material/Terminal";
import App from "./App";

const Desktop = () => {
  const [app, setApp] = useState(
    <div className="desktop">
        <div
          className="dragger"
          draggable
          onClick={() => {
            window.location.reload(false);
          }}
        >
          <TerminalIcon className="terminalIcon" fontSize="large" />
          <label>Terminal</label>
        </div>
      </div>
  );

  function setDesktop() {
    setApp(<App/>);
  }

  return (
    <div>
      {app}
    </div>
  );
};

export default Desktop;
