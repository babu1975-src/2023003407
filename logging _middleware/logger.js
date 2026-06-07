export async function Log(stack, level, packageName, message) {
  const token = "YOUR_ACCESS_TOKEN";

  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message
        })
      }
    );

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
