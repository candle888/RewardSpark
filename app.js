const tasks = [
  { id: 1, title: "Install Partner App", note: "Complete onboarding for 2 minutes", payout: 1.5 },
  { id: 2, title: "Watch 30s Video Ad", note: "One short ad, instant reward", payout: 0.25 },
  { id: 3, title: "Try Featured Game", note: "Reach level 2 in the partner game", payout: 2.0 },
  { id: 4, title: "Survey + Ad Combo", note: "Quick 4-question check-in", payout: 0.9 }
];

let balance = 0;
let completed = 0;

const balanceEl = document.getElementById("balance");
const completedEl = document.getElementById("completed");
const taskList = document.getElementById("taskList");

function refreshStats() {
  balanceEl.textContent = `$${balance.toFixed(2)}`;
  completedEl.textContent = completed;
}

function completeTask(task, button) {
  balance += task.payout;
  completed += 1;
  refreshStats();
  button.textContent = "Done";
  button.disabled = true;
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const wrapper = document.createElement("article");
    wrapper.className = "task";

    wrapper.innerHTML = `
      <div>
        <h3>${task.title}</h3>
        <p class="task-note">${task.note}</p>
      </div>
      <div>
        <p class="payout">+$${task.payout.toFixed(2)}</p>
        <button type="button">Complete</button>
      </div>
    `;

    const button = wrapper.querySelector("button");
    button.addEventListener("click", () => completeTask(task, button));
    taskList.appendChild(wrapper);
  });
}

renderTasks();
refreshStats();
