const API_URL = "https://att-api.azurewebsites.net/api";

class ActivityService {
  async getActivities(token) {
    const response = await fetch(`${API_URL}/Activity`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.log(response);
      throw new Error("Error occured when fetching ctivities of the user."); //TODO: implement more accurate error handling in API and then here
    }
    const data = await response.json();
    return data;
  }

  async saveActivityRecord(activityId, startTime, endTime, token) {
    const response = await fetch(`${API_URL}/ActivityRecord`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Bearer token for authentication
      },
      body: JSON.stringify({
        activityId,
        startTime,
        endTime,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} - ${errorText}`);
    }

    return response.json();
  }
}

export default new ActivityService();
