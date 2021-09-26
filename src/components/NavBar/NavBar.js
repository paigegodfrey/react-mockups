import "./NavBar.css";

const NavBar = () => {

  return (
    <div className="NavBar">
      <div className="nav-brand">Jobly</div>
      <div className="nav-links">
        <ul className="nav-list">
          <li className="nav-list-item">Companies</li>
          <li className="nav-list-item">Jobs</li>
          <li className="nav-list-item">Profile</li>
          <li className="nav-list-item">Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;