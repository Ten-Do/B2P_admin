import "./styles/App.scss";
import Header from "./components/elements/Header/Header";
import Sidebar from "./components/elements/Sidebar/Sidebar";
import Container from "./components/elements/Container/Container";
import AppRouter from "./components/elements/AppRouter/AppRouter";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import useAuthStore from "./stores/auth";
import Login from "./components/elements/Login/Login";

function App() {
  const isAuth = useAuthStore((state) => state.isAuth);

  return (
    <div className="App">
      {isAuth ? (
        <>
          <Sidebar />
          <Container>
            <Header />
            <AppRouter />
          </Container>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
