import React, { useRef, useState, useEffect } from "react";
import TypeWriterEffect from "react-typewriter-effect";

const TerminalText = () => {
  const inputRef = useRef();
  const [terminalValue, setTerminalValue] = useState(
    <div>
      <TypeWriterEffect
        textStyle={{
          height: "50px",
          width: "98vh",
          fontSize: "18px",
          color: "#aaaaaa",
        }}
        disabled
        startDelay={100}
        cursorColor="white"
        hideCursorAfterText
        text="Welcome to my portfolio! I hope you appreciate my design and enjoy browsing through my projects.
    Let's start with the help command.."
        typeSpeed={30}
      />
      <div className="futureEmployer">
        futureemployer:~$
        <input
          className="terminalInput"
          spellCheck="false"
          autoFocus
          ref={inputRef}
        />
      </div>
    </div>
  );

  useEffect(() => {
    var previousCommand = "";
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();

        if (event.target.value === "help") {
          setTerminalValue(
            <div>
              <ul>
                Available commands:
                <li>help ~ Lists all available commands</li>
                <li>resume ~ Gives mediafire link to download my resume</li>
                <li>projects ~ Lists all current projects</li>
                <li>github ~ Link to my GitHub to see my projects and code</li>
                <li>aboutme ~ Just a bit about me</li>
                <li>clear ~ Clears terminal</li>
              </ul>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value === "clear") {
          setTerminalValue(
            <div>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value === "resume") {
          setTerminalValue(
            <div>
              <p>
                You can access my resume{" "}
                <a
                  href="https://www.mediafire.com/file/o9jn3ag4q0zf1l8/Resume_W.pdf/file"
                  target="_blank"
                  rel="noreferrer"
                >
                  HERE
                </a>
              </p>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value === "projects") {
          setTerminalValue(
            <div>
              <ul>
                Current Projects:
                <li>This portfolio</li>
                <li>Customer Management Panel for NDIS businesses</li>
                <li>Chess AI in JS</li>
                <li>
                  Website with API for weightlifters to store weight and reps +
                  features like 1 rep max calculator
                </li>
              </ul>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value === "github") {
          setTerminalValue(
            <div>
              <p>
                You can access my GitHub{" "}
                <a
                  href="https://github.com/AaronCamm"
                  target="_blank"
                  rel="noreferrer"
                >
                  HERE
                </a>
              </p>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value === "aboutme") {
          setTerminalValue(
            <div>
              <p>
                I am currently working as a mental health practitioner. I have a
                Bachelor of Psychological Science and a Diploma of IT. I am
                currently wanting to pivot into a software engineering role. I
                also love to lead having had great experiences working as a Team
                Leader and would like to eventually work in management within
                the IT industry. I started off programming in C# and completed
                multiple private projects for both individuals and businesses. I
                have now gained a great deal of knowledge working with HTML, JS,
                CSS, ReactJS, Firebase and Mongo. I also have experience with
                SQL databases (mySQL & postGre).
              </p>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value === "contact") {
          setTerminalValue(
            <div>
              <p>
                Feel free to reach out to me at:&nbsp;
                <a href="mailto:contact@aaronc.xyz">contact@aaronc.xyz</a>
              </p>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else if (event.target.value.replaceAll(" ", "").length !== 0) {
          setTerminalValue(
            <div>
              <p>
                Unknown command '{event.target.value}'. Try 'help' command for
                list of commands.
              </p>
              <div className="futureEmployer">
                futureemployer:~$
                <input
                  className="terminalInput"
                  spellCheck="false"
                  autoFocus
                  ref={inputRef}
                />
              </div>
            </div>
          );
        } else {
          <div>
            <div className="futureEmployer">
              futureemployer:~$
              <input
                className="terminalInput"
                spellCheck="false"
                autoFocus
                ref={inputRef}
              />
            </div>
          </div>;
        }
        if (event.target.value != null) {
          previousCommand = event.target.value;
        }
        event.target.value = "";
      } else if (event.code === "ArrowUp") {
        event.target.value = previousCommand;
        console.log(inputRef);
        inputRef.dispatchEvent(
          new KeyboardEvent("keypress", {
            key: "e",
          })
        );
      }
    };

    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return <div>{terminalValue}</div>;
};

export default TerminalText;
