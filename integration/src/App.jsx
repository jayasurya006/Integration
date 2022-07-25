import React, { useState } from "react";
import Main from "./User2";
import "./App.css";
import { IntlProvider as Provider } from "react-intl";
import LOCALES from "./User2/intl/LOCALES";

function App() {
  const [theme, setTheme] = useState("light");
  const [Lang, setLang] = useState("Kan");
  return (
    <Provider locale={Lang} defaultLocale={"En"} messages={LOCALES[Lang]}>
      <div id={theme} className="App" style={{ height: "100vh" }}>
        <Main setTheme={setTheme} setLang={setLang} />
      </div>
    </Provider>
  );
}

export default App;
