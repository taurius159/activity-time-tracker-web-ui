import AddActivityForm from "../Components/AddActivityForm";
import TrackActivityTime from "../Components/TrackActivityTime";
import ActivityService from "../Services/ActivityService";
import { useState, useEffect } from "react";

function ActivityTimeTracker({ token }) {
  const [addActivityFormVisible, setAddActivityFormVisible] = useState(false);
  const [activities, setActivities] = useState([]);

  const handleAddActivity = () => {
    setAddActivityFormVisible(false);
  };

  return (
    <div>
      <h2>Activity Time Tracker Application</h2>
      <TrackActivityTime
        token={token}
        activities={activities}
        setActivities={setActivities}
      />
      <button
        onClick={() => setAddActivityFormVisible(!addActivityFormVisible)}
      >
        {addActivityFormVisible ? "Hide" : "Add New Activity"}
      </button>
      {addActivityFormVisible && (
        <AddActivityForm token={token} onSuccess={handleAddActivity} />
      )}
    </div>
  );
}

export default ActivityTimeTracker;
