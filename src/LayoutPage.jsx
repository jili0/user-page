import { NavLink, Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <nav>
        <h1>User's Page</h1>
        <ul>
          <li>
            <NavLink to="/">User</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/friends">Friends</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutPage;
