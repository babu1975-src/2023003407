const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

fetch("http://4.224.186.213/evaluation-service/logs", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  },
  body: JSON.stringify({
    stack: "frontend",
    level: "info",
    package: "component",
    message: "Testing logger"
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
