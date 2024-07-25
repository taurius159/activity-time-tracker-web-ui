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

  useEffect(() => {
    //fix bug to be able to add activity when user has no activity. have loading and 0 activities as different conditions
    ActivityService.getActivities(token).then(setActivities);
  }, [token]);

  return (
    <div>
      <h2>Activity Time Tracker Application</h2>

      {activities.length > 0 ? (
        <>
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
          <ActivityTable activities={activities} />
        </>
      ) : (
        <p>Loading Data..</p>
      )}
      {addActivityFormVisible && (
        <AddActivityForm token={token} onSuccess={handleAddActivity} />
      )}
    </div>
  );
}

export default ActivityTimeTracker;
