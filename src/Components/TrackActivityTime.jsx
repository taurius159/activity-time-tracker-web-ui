import ActivityService from "../Services/ActivityService";
import { useState, useEffect } from "react";

function TrackActivityTime({ token, activities, onNwRecord }) {
  const [selectedActivity, setSelectedActivity] = useState("");
  const [timer, setTimer] = useState(0);
  const [isTiming, setIsTiming] = useState(false);
  const [message, setMessage] = useState("");
  const [intervalId, setIntervalId] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [sign, setSign] = useState("+");

  const handleStartStop = async () => {
    if (isTiming) {
      clearInterval(intervalId);
      setIsTiming(false);
      setEndTime(new Date());

      try {
        const activityID = activities.find(
          (x) => x.name === selectedActivity
        ).id;
        await ActivityService.saveActivityRecord(
          activityID,
          startTime.toISOString(),
          new Date().toISOString(),
          token
        );
        onNwRecord();
        setMessage("Activity record saved successfully");
      } catch (error) {
        setMessage("Failed to save activity record");
      } finally {
        setTimer(0);
      }
    } else {
      setIsTiming(true);
      setMessage("");
      setStartTime(new Date());
      const id = setInterval(() => {
        setTimer((prev) => prev + 1);
        // Toggle sign every second
        setSign((prevSign) => (prevSign === "-" ? "+" : "-"));
      }, 1000);
      setIntervalId(id);
    }
  };

  return (
    <>
      {message && <p>{message}</p>}
      <div>
        <select
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
        >
          <option value="" disabled>
            Select an activity
          </option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={handleStartStop} disabled={!selectedActivity}>
          {isTiming ? "Stop" : "Start"}
        </button>
      </div>
      {isTiming && (
        <div>
          <h3>
            {`Time (HH:MM): ${new Date(timer * 1000)
              .toISOString()
              .substr(11, 5)}`}
            <span>{` ${sign}`}</span>
          </h3>
          <h3>{`For: ${selectedActivity}`}</h3>
        </div>
      )}
    </>
  );
}

export default TrackActivityTime;
