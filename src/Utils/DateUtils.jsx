/**
 * Calculates the total time spent on an activity.
 * @param {Array} records - The list of activity records.
 * @returns {string} - The total time spent in hours and minutes.
 */
export const calculateTotalTime = (records) => {
  const totalMinutes = records.reduce((acc, record) => {
    const startTime = new Date(record.startTime);
    const endTime = new Date(record.endTime);
    const duration = (endTime - startTime) / 1000 / 60; // duration in minutes
    return acc + duration;
  }, 0);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = Math.floor(totalMinutes % 60);
  return `${hours}h ${minutes}m`;
};
