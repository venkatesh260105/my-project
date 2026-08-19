import { Stack, Typography } from "@mui/material";
import React from "react";

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const json = await response.json();

  const paths = json.map((user) => ({
    params: {
      id: user.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  const json = await response.json();

  return {
    props: {
      user: json,
    },
  };
};

const UserDetails = ({ user }) => {
  return (
    <div>
      <Typography variant="h3" textAlign="center">
        User Details
      </Typography>

      <Stack spacing={2} m={10}>
        <Typography variant="h5">
          {user.name}
        </Typography>

        <Typography variant="subtitle1">
          {user.username}
        </Typography>

        <Typography variant="subtitle1">
          {user.email}
        </Typography>
      </Stack>
    </div>
  );
};

export default UserDetails;