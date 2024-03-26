import { useState } from "react";
import styles from "./App.module.css";
import MainPage from "./components/content/MainPage";
//import MyButton from "./components/MyButton";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div className={styles.App}>
      <Sidebar page={page} setPage={setPage} />
      <MainPage page={page} />
    </div>
  );
}

export default App;
