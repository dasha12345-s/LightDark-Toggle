const onOff = document.querySelector(".on-off");

document.querySelector(".theme-toggle-button").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const currentRotation = parseInt(
    getComputedStyle(onOff).getPropertyValue("--rotation")
  );
  onOff.style.setProperty("--rotation", currentRotation + 180);
});
