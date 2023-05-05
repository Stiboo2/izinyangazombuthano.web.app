import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/showcouples">Show Couples</Link>
          </li>
          <li>
            <Link to="/birthday"> Birthdays</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
