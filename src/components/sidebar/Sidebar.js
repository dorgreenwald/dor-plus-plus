import Count from "./Count";
import Links from"./Links";
import styles from "./Sidebar.module.css";
import Countdown from "./Countdown";

const Sidebar = ({page, setPage}) => {
  return (
    <div className={styles.sidebar}>
      <Count total={0} day={1}/>
      <div className={styles.line}>
      </div>
      <Links page={page} setPage={setPage}/>
      <div className={styles.line}>
      </div>
      <Countdown left = {100}/>
    </div>
  )
};

export default Sidebar;
