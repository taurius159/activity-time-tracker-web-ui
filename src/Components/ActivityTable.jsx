import { useEffect, useState } from "react";
import { calculateTotalTime } from "../Utils/DateUtils";

function ActivityTable({ activities }) {
  return (
    <div>
      <h2>Your Progress</h2>
      <table>
        <thead>
          <tr>
            <th>Activity Name</th>
            <th>Total Time Spent</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td>{activity.name}</td>
              <td>{calculateTotalTime(activity.activityRecords)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ActivityTable;
