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
  checkCost();
};

document.getElementById("click-btn").addEventListener("click", () => {
  score += pointsPerClick;
  updateDisplay();
});

const renderUpgrades = () => {
  upgrades.forEach((upgrade) => {
    const upgradeDiv = document.createElement("div");
    const buyButton = document.createElement("button");

    buyButton.textContent = "Buy";
    buyButton.setAttribute("onclick", `buyUpgrades(${upgrade.id})`);
    buyButton.setAttribute("id", `upgrade-${upgrade.id}`);

    upgradeDiv.setAttribute("id", upgrade.id);

    const name = document.createElement("p");
    name.textContent = `${upgrade.name} Cost: ${upgrade.cost} Bonus: ${upgrade.bonus}`;

    upgradeDiv.appendChild(name);
    upgradeDiv.appendChild(buyButton);

    document.getElementById("upgrades").appendChild(upgradeDiv);
  });
};

renderUpgrades();

function buyUpgrades(id) {
  for (let i = 0; i < upgrades.length; i++) {
    if (upgrades[i].id === id) {
      if (score >= upgrades[i].cost) {
        score -= upgrades[i].cost;
        pointsPerClick += upgrades[i].bonus;
        updateDisplay();
        return;
      }
    }
  }
}

const checkCost = () => {
  upgrades.forEach((upgrade) => {
    if (score < upgrade.cost) {
      document.getElementById(`upgrade-${upgrade.id}`).disabled = true;
    } else {
      document.getElementById(`upgrade-${upgrade.id}`).disabled = false;
    }
  });
};

checkCost();
