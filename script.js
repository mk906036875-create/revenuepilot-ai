/* =========================================================
   REVENUEPILOT AI
   CEO REVENUE COMMAND CENTER
   script.js — V1
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------------
     ELEMENTS
  ------------------------------------------------------- */

  const monthlyLeads = document.getElementById("monthlyLeads");
  const customerValue = document.getElementById("customerValue");
  const conversionRate = document.getElementById("conversionRate");

  const monthlyLeadsValue = document.getElementById("monthlyLeadsValue");
  const customerValueValue = document.getElementById("customerValueValue");
  const conversionRateValue = document.getElementById("conversionRateValue");

  const simulatorResult = document.getElementById("simulatorResult");

  const runAnalysisBtn = document.getElementById("runAnalysisBtn");
  const executiveActionBtn = document.getElementById("executiveActionBtn");

  const insightBtn = document.getElementById("insightBtn");
  const scanLeaksBtn = document.getElementById("scanLeaksBtn");

  const analysisModal = document.getElementById("analysisModal");
  const modalClose = document.getElementById("modalClose");
  const modalDone = document.getElementById("modalDone");
  const modalMessage = document.getElementById("modalMessage");


  /* -------------------------------------------------------
     UTILITY FUNCTIONS
  ------------------------------------------------------- */

  function formatCurrency(value) {

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0
    }).format(value);

  }


  function formatNumber(value) {

    return new Intl.NumberFormat("en-US")
      .format(value);

  }


  /* -------------------------------------------------------
     GROWTH SIMULATOR
  ------------------------------------------------------- */

  function updateSimulator() {

    const leads = Number(monthlyLeads.value);
    const averageValue = Number(customerValue.value);
    const improvement = Number(conversionRate.value);

    monthlyLeadsValue.textContent =
      formatNumber(leads);

    customerValueValue.textContent =
      formatNumber(averageValue);

    conversionRateValue.textContent =
      improvement;

    /*
      Illustrative scenario:
      Monthly leads × customer value × improvement
