import React, { useState, useEffect } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { fetchModelData } from "../../lib/fetchModelData";

function UserList() {
  const [users, setUsers] = useState([]); // State to store the list of users

  useEffect(() => {
    // Fetch the list of users when the component mounts
    const fetchUsers = async () => {
      try {
        const userList = await fetchModelData("/user/list"); // Fetch users from the server
        setUsers(userList); // Update the state with the fetched users
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUsers(); // Call the fetchUsers function
  }, []); // Empty dependency array ensures useEffect runs only once when the component mounts

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        User List
      </Typography>
      <List component="nav">
        {users.map((user) => (
          <ListItem button key={user._id} component={Link} to={`/users/${user._id}`}>
            {/* Use Link component from react-router-dom to handle navigation */}
            <ListItemText primary={`${user.first_name} ${user.last_name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UserList;
