import ActivityTable from "../Components/ActivityTable";
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

  function handleAddTimeRecord() {
    ActivityService.getActivities(token).then(setActivities);
  }

  return (
    <div>
      <h2>Activity Time Tracker Application</h2>
      <TrackActivityTime
        token={token}
        activities={activities}
        setActivities={setActivities}
        disabled={activities.length === 0}
        onNwRecord={handleAddTimeRecord}
      />
      <button
        onClick={() => setAddActivityFormVisible(!addActivityFormVisible)}
      >
        {addActivityFormVisible ? "Hide" : "Add New Activity"}
      </button>
      {addActivityFormVisible && (
        <AddActivityForm token={token} onSuccess={handleAddActivity} />
      )}
      {activities.length > 0 ? (
        <ActivityTable activities={activities} />
      ) : (
        <p>Loading Data..</p>
      )}
    </div>
  );
}

export default ActivityTimeTracker;
