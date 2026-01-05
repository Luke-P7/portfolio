// Example project data — you can expand this anytime
const projects = [
  {
    title: "Project 1",
    description: "A basic neural network capable of distinguishing between numbers and letters."
  },
  {
    title: "Project 2",
    description: "In progress."
  }
];

// Inject projects into the page
const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
  `;
  projectList.appendChild(card);
});
