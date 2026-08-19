import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const getStaticProps = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  return {
    props: {
      users,
    },
  };
};

function AdminHome({ users }) {
  return (
    <div>
      <h1>Admin Users</h1>

      <List>
        {users.map((user) => (
          <ListItem key={user.id}>
            <ListItemButton>
              <ListItemText primary={user.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default AdminHome;