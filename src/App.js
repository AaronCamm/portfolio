import "./App.css";
import TerminalText from "./TerminalText";
import Desktop from "./Desktop";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

import React, { useState, useRef } from "react";

function App() {
  const ref = useRef();
  const [desktop, setDesktop] = useState();

  function desktopState() {
    setDesktop(
      <Desktop />
    );
  }

  return (
    <div className="App">
      <div className="terminalBody">
        <div className="terminalHead">
          <CancelIcon
            className="closeIcon"
            ref={ref}
            onClick={() => {
              ref.current.parentElement.parentElement.style.display = "none";
              desktopState();
            }}
          />
          <RemoveCircleIcon className="minimiseIcon" />
          <label className="userHead">futureemployer@aaronshell: ~</label>
        </div>
        <div className="terminalText">
          <TerminalText />
        </div>
      </div>
      {desktop}
    </div>
  );
}

export default App;
