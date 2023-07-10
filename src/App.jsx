import { useState } from "react";
import "./styles/App.scss";
import Header from "./components/elements/Header/Header";
import Sidebar from "./components/elements/Sidebar/Sidebar";
import Container from "./components/elements/Container/Container";
import AppRouter from "./components/elements/AppRouter/AppRouter";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import useAuthStore from "./stores/auth";
import Login from "./components/elements/Login/Login";
import { useEffect } from "react";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const { isAuth, isLoading, checkAuth } = useAuthStore((state) => ({
    isAuth: state.isAuth,
    isLoading: state.isLoading,
    checkAuth: state.checkAuth,
  }));

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const setHtmlAttribute = (attribute, value) => {
    document.documentElement.setAttribute(attribute, value);
  };

  const changeTheme = () => {
    setHtmlAttribute("data-theme", !isDarkTheme ? "dark" : "light");
    localStorage.setItem("theme", !isDarkTheme ? "dark" : "light");
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setIsDarkTheme(true);
      setHtmlAttribute("data-theme", "dark");
    } else {
      setHtmlAttribute("data-theme", "light");
    }

    if (localStorage.getItem("token")) checkAuth();
  }, []);

  if (isLoading) {
    return (
      <div className={"loader"}>
        <Loader />
      </div>
    );
  }

  if (!isAuth) {
    return <Login />;
  }

  return (
    <div className="App">
      <Sidebar />
      <Container>
        <Header isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;
