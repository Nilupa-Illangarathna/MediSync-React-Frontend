// NavBar.jsx

import { Button, Stack, Typography, Box } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../../RBAC"; // Import RBAC logic

const NavBar = ({ role }) => {
  const [selectedLink, setSelectedLink] = React.useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const filteredNavLinks = navLinks.filter((link) => {
    return link.roles ? link.roles.includes(role) : true;
  });

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2} width="100%">
      <img width={200} src={logo} alt="" flexGrow={1} style={{ marginRight: "auto" }} /> {/* Adjust logo width and add margin-right */}
      <Stack direction="row" spacing={2}  style={{ marginLeft: "auto" }}> {/* Adjust spacing and add margin-left */}
        {filteredNavLinks.map((link, index) => (
          <Link to={link.link} key={index} onClick={() => handleLinkClick(link)} style={{ textDecoration: "none" }}>
            <Typography variant="body2" sx={{ fontWeight: selectedLink === link ? "bold" : "normal", color: selectedLink === link ? "#424242" : "#757575", padding: "8px", borderRadius: "4px", transition: "background-color 0.3s ease", "&:hover": { backgroundColor: "#f5f5f5" } }}>
              {link.name}
            </Typography>
          </Link>
        ))}
      </Stack>

      <Stack direction="row" spacing={1} padding={{ marginLeft: "1%", marginRight: "1%" }}>
        {/* Sign In Button */}
        <Link to="/signin">
          <Button variant="contained" size="small">
            Sign In
          </Button>
        </Link>

        {/* Sign Up Button */}
        <Link to="/signup">
          <Button variant="contained" size="small">
            Sign Up
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
};

export default NavBar;
