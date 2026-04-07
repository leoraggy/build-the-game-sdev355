let score = 0;
let pointsPerClick = 1;

let upgrades = [
  {
    name: "Plus 1",
    id: 1,
    cost: 5,
    bonus: 3,
  },
  {
    name: "Plus 2",
    id: 2,
    cost: 7,
    bonus: 4,
  },
  {
    name: "Plus 3",
    id: 3,
    cost: 9,
    bonus: 5,
  },
];

const updateDisplay = () => {
  document.getElementById("score-display").textContent = "Score: " + score;
  document.getElementById("rate-display").textContent =
    "Points per click: " + pointsPerClick;
};

document.getElementById("click-btn").addEventListener("click", () => {
  score += pointsPerClick;
  updateDisplay();
});

const renderUpgrades = () => {
  upgrades.forEach((upgrade) => {
    const upgradeDiv = document.createElement("div");

    upgradeDiv.setAttribute("id", upgrade.id);

    const name = document.createElement("p");
    name.textContent = `${upgrade.name} Cost: ${upgrade.cost} Bonus: ${upgrade.bonus}`;

    upgradeDiv.appendChild(name);

    document.getElementById("upgrades").appendChild(upgradeDiv);
  });
};

renderUpgrades();
