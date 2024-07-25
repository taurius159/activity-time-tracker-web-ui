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
}

export default new ActivityService();
