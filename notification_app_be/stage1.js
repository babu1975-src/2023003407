const ACCESS_TOKEN = "MY ACCESS TOKEN, BUT I CANT SHARE ";

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const priority = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

async function getTopNotifications() {
  try {
    console.log("Fetching notifications...");

    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();
    const notifications = data.notifications || [];

    const top10 = notifications
      .sort((a, b) => {
        const priorityDiff =
          priority[b.Type] - priority[a.Type];

        if (priorityDiff !== 0) {
          return priorityDiff;
        }

        return (
          new Date(b.Timestamp) -
          new Date(a.Timestamp)
        );
      })
      .slice(0, 10);

    console.log("\n===== TOP 10 PRIORITY NOTIFICATIONS =====\n");

    top10.forEach((notif, index) => {
      console.log(
        `${index + 1}. ${notif.Type} | ${notif.Message} | ${notif.Timestamp}`
      );
    });

    console.log("\n========================================");
  } catch (err) {
    console.error("ERROR:");
    console.error(err);
  }
}

getTopNotifications();
