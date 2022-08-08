const passwordToggle = () => {
  const pass = document.getElementById("passwordClick");
  pass.type = pass.type === "password" ? "text" : "password";
}

const passwordStars = (password) => {
  let stars = "";
  for (let i = 0; i < password.length; i++) {
    stars += "*";
  }
  return stars;
}

const lockPass = () => {
  const pass = document.getElementById(`passwordClick`);
  const target = document.getElementById("lockedPassDiv");

  if (pass.value === "") return;

  pass.disabled = true;

  const p = document.createElement("p");
  p.innerHTML = pass.value;

  p.addEventListener("mouseover", () => {
    p.innerHTML = pass.value;
  });
  p.addEventListener("mouseout", () => {
    p.innerHTML = passwordStars(pass.value);
  })

  target.innerHTML = "";
  target.append(p);
}
