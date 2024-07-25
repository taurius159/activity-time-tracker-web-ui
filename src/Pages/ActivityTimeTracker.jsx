import TrackActivityTime from "../Components/TrackActivityTime";
import ActivityService from "../Services/ActivityService";
import { useState, useEffect } from "react";

function ActivityTimeTracker({ token }) {
  return (
    <div>
      <h2>Activity Time Tracker Application</h2>
      <TrackActivityTime token={token} />
    </div>
  );
}

export default ActivityTimeTracker;
