import ActivityTable from "../Components/ActivityTable";
import AddActivityForm from "../Components/AddActivityForm";
import TrackActivityTime from "../Components/TrackActivityTime";
import ActivityService from "../Services/ActivityService";
import { useState, useEffect } from "react";

function ActivityTimeTracker({ token }) {
  const [addActivityFormVisible, setAddActivityFormVisible] = useState(false);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddActivity = () => {
    setAddActivityFormVisible(false);
    setLoading(true);
    ActivityService.getActivities(token)
      .then(setActivities)
      .finally(() => {
        setLoading(false);
      });
  };

  function handleAddTimeRecord() {
    setLoading(true);
    ActivityService.getActivities(token)
      .then(setActivities)
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    setLoading(true);
    ActivityService.getActivities(token)
      .then(setActivities)
      .finally(() => {
        setLoading(false);
      });
  }, [token]);

  return (
    <div>
      <h2>Activity Time Tracker Application</h2>

      {loading && <p>Loading Data..</p>}

      {activities.length === 0 && !loading && (
        <div>
          <h3>Add Your First Activity!</h3>
          <AddActivityForm token={token} onSuccess={handleAddActivity} />
        </div>
      )}

      {!loading && activities.length > 0 && (
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
      )}
      {addActivityFormVisible && (
        <AddActivityForm token={token} onSuccess={handleAddActivity} />
      )}
    </div>
  );
}

export default ActivityTimeTracker;
