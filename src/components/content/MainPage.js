import Home from "./Home";
import Options from "./Options";
import moment from "moment";

const MainPage = ({ page = "home" }) => {
    const isLoading = true;
    let date;
    if (page === 'home') date = moment().format("dddd MMM Do YYYY");
  return (
    <div>
        {isLoading && <div>Loading...</div>}
      {date}
      {page === "home" ? <Home /> : <Options />}
    </div>
  );
};

export default MainPage;
