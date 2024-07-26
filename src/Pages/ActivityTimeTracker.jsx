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
    <div className="row">
      {loading && (
        <div className="row">
          <div className="column">
            <p>Loading Data..</p>
          </div>
        </div>
      )}

      {activities.length === 0 && !loading && (
        <div>
          <h3>Add Your First Activity!</h3>
          <AddActivityForm token={token} onSuccess={handleAddActivity} />
        </div>
      )}

      {!loading && activities.length > 0 && (
        <>
          <div className="column">
            <h2>Track Progress</h2>
            <TrackActivityTime
              token={token}
              activities={activities}
              setActivities={setActivities}
              disabled={activities.length === 0}
              onNwRecord={handleAddTimeRecord}
            />
          </div>
          <div className="column">
            <ActivityTable activities={activities} />
          </div>
        </>
      )}
      <div className="column">
        {activities.length > 0 && !loading && (
          <>
            <h2>Add More Activities</h2>
            <button
              className="add-activity-button"
              onClick={() => setAddActivityFormVisible(!addActivityFormVisible)}
            >
              {addActivityFormVisible ? "Hide" : "Add New Activity"}
            </button>
            {addActivityFormVisible && (
              <AddActivityForm token={token} onSuccess={handleAddActivity} />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ActivityTimeTracker;
