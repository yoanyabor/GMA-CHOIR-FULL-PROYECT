import React, { useState } from "react";
import Form from "./components/form";

import "bootstrap/dist/css/bootstrap.min.css";
import ChildrensChoir from "./components/childrenschoir_EN";

/////

function Choir() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [isSpanish, setIsSpanish] = useState(false);

  const englishHandle = () => {
    // console.log("english");
    setIsEnglish(true);
  };
  const spanishHandle = () => {
    // console.log("spanish");
    setIsEnglish(true);
  };

  return (
    <main>
      {!isEnglish && !isSpanish && (
        <div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh", flexDirection: "column" }}
          >
            <p className="btnContainer d-flex align-items-center">
              Pick Your Language / Escoja Su Idioma
            </p>
            <div className="btnContainer d-flex align-items-center">
              <div className="d-grid gap-2 mx-auto">
                <button
                  onClick={englishHandle}
                  className="btn btn-primary"
                  type="button"
                >
                  English
                </button>
                <button
                  onClick={spanishHandle}
                  className="btn btn-primary"
                  type="button"
                >
                  Español
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isEnglish && (
        <div>
          <ChildrensChoir />
        </div>
      )}
    </main>
  );
}

export default Choir;
