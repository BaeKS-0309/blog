import ReactDOM from "react-dom/client";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import "./styles/index.scss";
import "./styles/home.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { AuthContextProvider } from "context/AuthContext";
import { ThemeContextProvider } from "context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AuthContextProvider>
  </ThemeContextProvider>
);
