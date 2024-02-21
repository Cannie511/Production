import logo from "./logo.svg";
import "./App.scss";
import Nav from "./component/Nav";
import Listfriend from "./component/Listfriend";
import { BrowserRouter } from "react-router-dom";
import Main from "./component/Main";
import UserDetail from "./component/UserDetail";
import ChatBoxELement from "./component/ChatBoxElement";
import { useState } from "react";
import LoginPage from "./component/pages/LoginPage";
function App() {
  let [currentPage, setCurrentPage] = useState("login");
  const handlePage = (page)=>{
    setCurrentPage(page)
  }
  return (
    <>
      <BrowserRouter>
        {currentPage === "home" ? (
          <>
            <Nav />
            <div className="App">
              <header className="App-header">
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    margin: 0,
                    padding: 0,
                    justifyContent: "center",
                  }}
                >
                  <Main />
                </div>
              </header>
            </div>
          </>
        ) : (
          <LoginPage currentpage={handlePage}/>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
