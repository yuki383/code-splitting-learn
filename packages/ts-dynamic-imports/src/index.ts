async function getComponent() {
  const element = document.createElement("div");
  const { join } = await import("lodash");

  element.innerHTML = join(["Hello", "webpack"], " ");

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});
