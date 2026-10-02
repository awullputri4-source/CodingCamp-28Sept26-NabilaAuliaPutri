// State management
let transactions = [];
let chart = null;

// Category colors for pie chart
const categoryColors = {
  Food: "#4CAF50",
  Transport: "#2196F3",
  Fun: "#FF9800",
};

// Initialize the app
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("transactionForm");
  form.addEventListener("submit", handleAddTransaction);

  // Initialize chart
  initializeChart();

  // Load transactions from localStorage if available
  loadTransactions();
});

// Handle form submission
function handleAddTransaction(e) {
  e.preventDefault();

  // Get form values
  const itemName = document.getElementById("itemName").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);
  const category = document.getElementById("category").value;

  // Validate all fields are filled
  if (!itemName || !amount || !category) {
    alert("Please fill in all fields");
    return;
  }

  // Validate amount is positive
  if (amount <= 0) {
    alert("Amount must be greater than 0");
    return;
  }

  // Create transaction object
  const transaction = {
    id: Date.now(),
    name: itemName,
    amount: amount,
    category: category,
  };

  // Add to transactions array
  transactions.push(transaction);

  // Save to localStorage
  saveTransactions();

  // Update UI
  updateTransactionsList();
  updateBalance();
  updateChart();

  // Reset form - clear all fields
  document.getElementById("itemName").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";

  // Focus on first input for better UX
  document.getElementById("itemName").focus();
}

// Render transactions list
function updateTransactionsList() {
  const listContainer = document.getElementById("transactionsList");

  if (transactions.length === 0) {
    listContainer.innerHTML = '<p class="empty-state">No transactions yet</p>';
    return;
  }

  listContainer.innerHTML = transactions
    .map(
      (transaction) => `
        <div class="transaction-item">
            <div class="transaction-details">
                <div class="transaction-name">${escapeHtml(transaction.name)}</div>
                <div class="transaction-amount">$${transaction.amount.toFixed(2)}</div>
                <span class="transaction-category category-${transaction.category.toLowerCase()}">
                    ${transaction.category}
                </span>
            </div>
            <button class="btn-delete" onclick="deleteTransaction(${transaction.id})">Delete</button>
        </div>
    `,
    )
    .join("");
}

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter((t) => t.id !== id);
  saveTransactions();
  updateTransactionsList();
  updateBalance();
  updateChart();
}

// Update total balance
function updateBalance() {
  const total = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0,
  );
  document.getElementById("totalBalance").textContent = `$${total.toFixed(2)}`;
}

// Initialize pie chart
function initializeChart() {
  const ctx = document.getElementById("spendingChart").getContext("2d");
  chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Food", "Transport", "Fun"],
      datasets: [
        {
          data: [0, 0, 0],
          backgroundColor: [
            categoryColors["Food"],
            categoryColors["Transport"],
            categoryColors["Fun"],
          ],
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 15,
            usePointStyle: true,
            font: {
              size: 12,
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed || 0;
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage =
                total > 0 ? ((value / total) * 100).toFixed(1) : 0;
              return `${label}: $${value.toFixed(2)} (${percentage}%)`;
            },
          },
        },
      },
    },
  });
}

// Update pie chart with current data
function updateChart() {
  if (!chart) return;

  // Calculate spending by category
  const foodTotal = transactions
    .filter((t) => t.category === "Food")
    .reduce((sum, t) => sum + t.amount, 0);

  const transportTotal = transactions
    .filter((t) => t.category === "Transport")
    .reduce((sum, t) => sum + t.amount, 0);

  const funTotal = transactions
    .filter((t) => t.category === "Fun")
    .reduce((sum, t) => sum + t.amount, 0);

  // Update chart data
  chart.data.datasets[0].data = [foodTotal, transportTotal, funTotal];
  chart.update();
}

// Save transactions to localStorage
function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Load transactions from localStorage
function loadTransactions() {
  const saved = localStorage.getItem("transactions");
  if (saved) {
    try {
      transactions = JSON.parse(saved);
      updateTransactionsList();
      updateBalance();
      updateChart();
    } catch (e) {
      console.error("Error loading transactions:", e);
    }
  }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
