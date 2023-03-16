import s from "./App.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Assisistiv from "../Assistive/Assistive";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <Footer />
      <Assisistiv />
    </div>
  );
}

export default App;
