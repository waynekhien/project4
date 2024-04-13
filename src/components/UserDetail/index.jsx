import React from "react";
import { Typography, Link } from "@mui/material";
import models from "../../modelData/models"; // Import models from modelData
import { useParams } from "react-router-dom";
import "./styles.css"; // Import CSS file for styling

function UserDetail() {
  const { userId } = useParams(); // Extract userId from route params
  const user = models.userModel(userId); // Fetch details of the user with userId

  return (
    <div >
      <Typography variant="h4" className="heading">User Detail</Typography>
      <div className="user-detail-container">
      <Typography variant="h5" className="user-name">{user.first_name} {user.last_name}</Typography>
      <Typography className="user-info">Location: {user.location}</Typography>
      <Typography className="user-info">Description: {user.description}</Typography>
      <Typography className="user-info">Occupation: {user.occupation}</Typography>
      <Link href={`/photos/${userId}`} className="view-photos-link">View Photos</Link> 
      </div>
    </div>
  );
}

export default UserDetail;
