", function () {

  // =====================================================
  // REVENUEPILOT AI — CLIENT DEMO ENGINE
  // =====================================================

  console.log("REVENUEPILOT AI initialized successfully.");


  // =====================================================
  // HELPERS
  // =====================================================

  function get(id) {
    return document.getElementById(id);
  }

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


  // =====================================================
  // GROWTH SIMULATOR
  // =====================================================

  const monthlyLeads = get("monthlyLeads");
  const customerValue = get("customerValue");
  const conversionRate = get("conversionRate");

  const monthlyLeadsValue = get("monthlyLeadsValue");
  const customerValueValue = get("customerValueValue");
  const conversionRateValue = get("conversionRateValue");
  const simulatorResult = get("simulatorResult");

  function updateSimulator() {

    if (
      !monthlyLeads ||
      !customerValue ||
      !conversionRate ||
      !simulatorResult
    ) {
      return;
    }

    const leads = Number(monthlyLeads.value);
    const value = Number(customerValue.value);
    const rate = Number(conversionRate.value);

    const result = leads * value * (rate / 100);

    if (monthlyLeadsValue) {
      monthlyLeadsValue.textContent = number(leads);
    }

    if (customerValueValue) {
      customerValueValue.textContent = number(value);
    }

    if (conversionRateValue) {
      conversionRateValue.textContent = rate + "%";
    }

    simulatorResult.textContent = currency(result);
  }

  if (monthlyLeads) {
    monthlyLeads.addEventListener("input", updateSimulator);
  }

  if (customerValue) {
    customerValue.addEventListener("input", updateSimulator);
  }

  if (conversionRate) {
    conversionRate.addEventListener("input", updateSimulator);
  }

  updateSimulator();


  // =====================================================
  // AI ANALYSIS MODAL
  // =====================================================

  const runAnalysisBtn = get("runAnalysisBtn");
  const executiveActionBtn = get("executiveActionBtn");

  const analysisModal = get("analysisModal");
  const modalClose = get("modalClose");
  const modalDone = get("modalDone");
  const modalMessage = get("modalMessage");

  function openAnalysis(message) {

    if (!analysisModal) {
      alert(message || "AI analysis completed.");
      return;
    }

    if (modalMessage) {
      modalMessage.textContent =
        message ||
        "AI analysis recommends reviewing high-value opportunities first, improving follow-up speed, and reducing revenue leakage.";
    }

    analysisModal.classList.add("show");
    analysisModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
  }

  function closeAnalysis() {

    if (!analysisModal) return;

    analysisModal.classList.remove("show");
    analysisModal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
  }


  if (runAnalysisBtn) {

    runAnalysisBtn.addEventListener("click", function () {

      const oldText = runAnalysisBtn.textContent;

      runAnalysisBtn.textContent = "⏳ Analyzing...";
      runAnalysisBtn.disabled = true;

      setTimeout(function () {

        runAnalysisBtn.textContent = "✓ Analysis Complete";
        runAnalysisBtn.disabled = false;

        openAnalysis(
          "AI analysis complete. Priority recommendation: recover high-value opportunities first, improve follow-up speed, and reduce revenue leakage."
        );

        setTimeout(function () {
          runAnalysisBtn.textContent = oldText;
        }, 1800);

      }, 1200);

    });

  }


  if (executiveActionBtn) {

    executiveActionBtn.addEventListener("click", function () {

      openAnalysis(
        "Executive recommendation: focus your team on high-intent opportunities first. The highest potential impact is currently concentrated in a small number of opportunities."
      );

    });

  }


  if (modalClose) {
    modalClose.addEventListener("click", closeAnalysis);
  }

  if (modalDone) {
    modalDone.addEventListener("click", closeAnalysis);
  }


  if (analysisModal) {

    analysisModal.addEventListener("click", function (event) {

      if (event.target === analysisModal) {
        closeAnalysis();
      }

    });

  }


  document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
      closeAnalysis();
    }

  });


  // =====================================================
  // DETAILED INSIGHT
  // =====================================================

  const insightBtn = get("insightBtn");

  if (insightBtn) {

    insightBtn.addEventListener("click", function () {

      openAnalysis(
        "Detailed AI insight: your biggest opportunity is improving conversion on high-intent leads. Recommended sequence: respond faster → prioritize high-value leads → follow up consistently → measure conversion."
      );

    });

  }


  // =====================================================
  // REVENUE LEAK SCANNER
  // =====================================================

  const scanLeaksBtn = get("scanLeaksBtn");

  if (scanLeaksBtn) {

    scanLeaksBtn.addEventListener("click", function () {

      const oldText = scanLeaksBtn.textContent;

      scanLeaksBtn.textContent = "⏳ Scanning...";
      scanLeaksBtn.disabled = true;

      setTimeout(function () {

        scanLeaksBtn.textContent = "✓ Scan Complete";

        openAnalysis(
          "Revenue Leak Scan complete. AI detected three areas requiring attention: delayed follow-ups, inactive opportunities, and conversion leakage."
        );

        setTimeout(function () {

          scanLeaksBtn.textContent = oldText;
          scanLeaksBtn.disabled = false;

        }, 1800);

      }, 1400);

    });

  }


  // =====================================================
  // OPPORTUNITY ACTION BUTTONS
  // =====================================================

  const actionButtons =
    document.querySelectorAll(".action-btn");

  actionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const oldText = button.textContent;

      button.textContent = "⏳ Analyzing...";
      button.disabled = true;

      setTimeout(function () {

        button.textContent = "✓ Reviewed";

        openAnalysis(
          "Opportunity reviewed successfully. AI recommends prioritizing this opportunity based on potential value, intent and conversion probability."
        );

        setTimeout(function () {

          button.textContent = oldText;
          button.disabled = false;

        }, 1800);

      }, 900);

    });

  });


  // =====================================================
  // NAVIGATION
  // =====================================================

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


  // =====================================================
  // LIVE TIME
  // =====================================================

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

  setInterval(updateTime, 60000);


  // =====================================================
  // TRY LIVE DEMO BUTTON
  // =====================================================

  const demoButtons =
    document.querySelectorAll(
      'a[href="#overview"], .demo-button'
    );

  demoButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      setTimeout(function () {

        const overview =
          document.getElementById("overview");

        if (overview) {

          overview.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }, 50);

    });

  });


  // =====================================================
  // WHATSAPP CTA
  // =====================================================

  const whatsappButtons =
    document.querySelectorAll(
      'a[href*="wa.me"]'
    );

  whatsappButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      console.log(
        "RevenuePilot AI WhatsApp CTA clicked."
      );

    });

  });


  // =====================================================
  // BOOK DEMO TRACKING
  // =====================================================

  const bookingButtons =
    document.querySelectorAll(
      'a[href="#contact"]'
    );

  bookingButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      console.log(
        "RevenuePilot AI Demo booking CTA clicked."
      );

    });

  });


  // =====================================================
  // CLIENT DEMO READY
  // =====================================================

  console.log(
    "✓ RevenuePilot AI Client Demo Engine Ready"
  );

});
