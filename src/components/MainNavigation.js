import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="showcouples"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Couples
            </NavLink>
          </li>
          <li>
            <NavLink
              to="review"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Fathers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="mothers"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Mothers
            </NavLink>
          </li>
          <li>
            <NavLink
              to="socials"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Socials
            </NavLink>
          </li>
          <li>
            <NavLink
              to="birthday"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Birthdays
            </NavLink>
          </li>
          <li>
            <NavLink
              to="unauthorizedpage"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Church Database
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
