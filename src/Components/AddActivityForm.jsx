import { useState } from "react";
import ActivityService from "../Services/ActivityService";

function AddActivityForm({ token, onSuccess }) {
  const [activityName, setActivityName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      await ActivityService.addActivity(activityName, description, token);
      onSuccess(); // Notify parent component of success
      setActivityName("");
      setDescription("");
    } catch (err) {
      setError("Failed to add activity. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div>
      <h2>Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="activityName">Activity Name:</label>
          <input
            type="text"
            id="activityName"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Add Activity"}
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default AddActivityForm;
