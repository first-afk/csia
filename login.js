document.getElementById("login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email1").value;
  const password = document.getElementById("password").value;
  // const role = "user"

  const response = await fetch(
    "https://backend-vercel-f4aqq1leu-csia-s-projects.vercel.app/api/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    }
  );
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    alert(data.message);
    localStorage.setItem("token", data.token);
    window.location.href = "/home.html";
  }
});
