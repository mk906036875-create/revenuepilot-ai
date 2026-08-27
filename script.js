document.addEventListener("DOMContentLoaded", function () {, function () {

  // ==============================
  // Growth Simulator
  // ==============================

  const monthlyLeads = document.getElementById("monthlyLeads");
  const customerValue = document.getElementById("customerValue");
  const conversionRate = document.getElementById("conversionRate");

  const monthlyLeadsValue = document.getElementById("monthlyLeadsValue");
  const customerValueValue = document.getElementById("customerValueValue");
  const conversionRateValue = document.getElementById("conversionRateValue");
  const simulatorResult = document.getElementById("simulatorResult");

  function currency(value) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);
  }

  function number(value) {
    return new Intl.NumberFormat("en-US").format(value);
  }

  function updateSimulator() {

    const leads = Number(monthlyLeads.value);
    const value = Number(customerValue.value);
    const rate = Number(conversionRate.value);

    monthlyLeadsValue.textContent = number(leads);
    customerValueValue.textContent = number(value);
    conversionRateValue.textContent = rate;

    const result = leads * value * (rate / 100);

    simulatorResult.textContent = currency(result);
  }

  monthlyLeads.addEventListener("input", updateSimulator);
  customerValue.addEventListener("input", updateSimulator);
  conversionRate.addEventListener("input", updateSimulator);

  updateSimulator();


  // ==============================
  // AI Analysis Modal
  // ==============================

  const runAnalysisBtn = document.getElementById("runAnalysisBtn");
  const executiveActionBtn = document.getElementById("executiveActionBtn");

  const analysisModal = document.getElementById("analysisModal");
  const modalClose = document.getElementById("modalClose");
  const modalDone = document.getElementById("modalDone");
  const modalMessage = document.getElementById("modalMessage");

  function openAnalysis() {

    modalMessage.textContent =
      "AI analysis recommends reviewing high-value opportunities first, improving follow-up speed, and reducing revenue leakage.";

    analysisModal.classList.add("show");
    analysisModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeAnalysis() {

    analysisModal.classList.remove("show");
    analysisModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  runAnalysisBtn.addEventListener("click", openAnalysis);
  executiveActionBtn.addEventListener("click", openAnalysis);

  modalClose.addEventListener("click", closeAnalysis);
  modalDone.addEventListener("click", closeAnalysis);

  const modalOverlay = document.querySelector(".modal-overlay");

  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeAnalysis);
  }

  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeAnalysis();
    }

  });


  // ==============================
  // Generate Detailed Insight
  // ==============================

  const insightBtn = document.getElementById("insightBtn");

  insightBtn.addEventListener("click", function () {

    modalMessage.textContent =
      "Priority recommendation: focus first on high-intent opportunities, then improve response speed and follow-up consistency.";

    analysisModal.classList.add("show");
    analysisModal.setAttribute("aria-hidden", "false");

  });


  // ==============================
  // Revenue Leak Scanner
  // ==============================

  const scanLeaksBtn = document.getElementById("scanLeaksBtn");

  scanLeaksBtn.addEventListener("click", function () {

    const oldText = scanLeaksBtn.textContent;

    scanLeaksBtn.textContent = "Scanning...";
    scanLeaksBtn.disabled = true;

    setTimeout(function () {

      scanLeaksBtn.textContent = "✓ Scan Complete";

      setTimeout(function () {

        scanLeaksBtn.textContent = oldText;
        scanLeaksBtn.disabled = false;

      }, 1500);

    }, 1000);

  });


  // ==============================
  // Opportunity Buttons
  // ==============================

  const actionButtons =
    document.querySelectorAll(".action-btn");

  actionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const oldText = button.textContent;

      button.textContent = "Analyzing...";
      button.disabled = true;

      setTimeout(function () {

        button.textContent = "✓ Reviewed";
        button.disabled = false;

      }, 900);

    });

  });


  // ==============================
  // Navigation
  // ==============================

  const navItems =
    document.querySelectorAll(".nav-item");

  navItems.forEach(function (item) {

    item.addEventListener("click", function () {

      navItems.forEach(function (nav) {
        nav.classList.remove("active");
      });

      item.classList.add("active");

    });

  });


  // ==============================
  // Live Update
  // ==============================

  const liveLabel =
    document.querySelector(".live-label");

  function updateTime() {

    if (!liveLabel) return;

    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });

    liveLabel.textContent =
      "● Updated " + time;
  }

  updateTime();


  // ==============================
  // Console
  // ==============================

  console.log("REVENUEPILOT AI initialized successfully.");

});
