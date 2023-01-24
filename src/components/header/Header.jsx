import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <nav>
      <ul className="header">
        <li>
          <Link to="/">Masai Notes</Link>
        </li>
        <li style={{ position: "relative" }}>
          <Link to="/bookmarks">Bookmarks</Link>
        </li>
      </ul>
    </nav>
  );
};
