 document.addEventListener("DOMContentLoaded", function () {

  "use strict";

  // =====================================================
  // REVENUEPILOT AI
  // Complete Client Demo + Dashboard Script
  // =====================================================


  // =====================================================
  // HELPER FUNCTIONS
  // =====================================================

  function get(selector) {
    return document.querySelector(selector);
  }

  function getAll(selector) {
    return document.querySelectorAll(selector);
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

  const monthlyLeads = get("#monthlyLeads");
  const customerValue = get("#customerValue");
  const conversionRate = get("#conversionRate");

  const monthlyLeadsValue = get("#monthlyLeadsValue");
  const customerValueValue = get("#customerValueValue");
  const conversionRateValue = get("#conversionRateValue");
  const simulatorResult = get("#simulatorResult");

  function updateSimulator() {

    if (
      !monthlyLeads ||
      !customerValue ||
      !conversionRate
    ) {
      return;
    }

    const leads = Number(monthlyLeads.value) || 0;
    const value = Number(customerValue.value) || 0;
    const rate = Number(conversionRate.value) || 0;

    if (monthlyLeadsValue) {
      monthlyLeadsValue.textContent = number(leads);
    }

    if (customerValueValue) {
      customerValueValue.textContent = number(value);
    }

    if (conversionRateValue) {
      conversionRateValue.textContent = rate + "%";
    }

    const result =
      leads * value * (rate / 100);

    if (simulatorResult) {
      simulatorResult.textContent =
        currency(result);
    }
  }

  if (monthlyLeads) {
    monthlyLeads.addEventListener(
      "input",
      updateSimulator
    );
  }

  if (customerValue) {
    customerValue.addEventListener(
      "input",
      updateSimulator
    );
  }

  if (conversionRate) {
    conversionRate.addEventListener(
      "input",
      updateSimulator
    );
  }

  updateSimulator();


  // =====================================================
  // AI ANALYSIS MODAL
  // =====================================================

  const runAnalysisBtn =
    get("#runAnalysisBtn");

  const executiveActionBtn =
    get("#executiveActionBtn");

  const insightBtn =
    get("#insightBtn");

  const analysisModal =
    get("#analysisModal");

  const modalClose =
    get("#modalClose");

  const modalDone =
    get("#modalDone");

  const modalMessage =
    get("#modalMessage");


  function openAnalysis(message) {

    if (!analysisModal) {
      return;
    }

    if (modalMessage) {

      modalMessage.textContent =
        message ||
        "AI analysis recommends reviewing high-value opportunities first, improving follow-up speed, and reducing revenue leakage.";

    }

    analysisModal.classList.add("show");

    analysisModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow =
      "hidden";
  }


  function closeAnalysis() {

    if (!analysisModal) {
      return;
    }

    analysisModal.classList.remove(
      "show"
    );

    analysisModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow =
      "";
  }


  if (runAnalysisBtn) {

    runAnalysisBtn.addEventListener(
      "click",
      function () {

        openAnalysis(
          "AI analysis recommends reviewing high-value opportunities first, improving follow-up speed, and reducing revenue leakage."
        );

      }
    );

  }


  if (executiveActionBtn) {

    executiveActionBtn.addEventListener(
      "click",
      function () {

        openAnalysis(
          "Executive recommendation: focus your team on high-intent opportunities, accelerate follow-up and recover revenue currently at risk."
        );

      }
    );

  }


  if (insightBtn) {

    insightBtn.addEventListener(
      "click",
      function () {

        openAnalysis(
          "Priority recommendation: focus first on high-intent opportunities, then improve response speed and follow-up consistency."
        );

      }
    );

  }


  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeAnalysis
    );
  }


  if (modalDone) {
    modalDone.addEventListener(
      "click",
      closeAnalysis
    );
  }


  const modalOverlay =
    get(".modal-overlay");

  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      function (event) {

        if (
          event.target === modalOverlay
        ) {
          closeAnalysis();
        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape"
      ) {
        closeAnalysis();
      }

    }
  );


  // =====================================================
  // REVENUE LEAK SCANNER
  // =====================================================

  const scanLeaksBtn =
    get("#scanLeaksBtn");

  if (scanLeaksBtn) {

    scanLeaksBtn.addEventListener(
      "click",
      function () {

        const oldText =
          scanLeaksBtn.textContent;

        scanLeaksBtn.textContent =
          "⏳ Scanning...";

        scanLeaksBtn.disabled =
          true;


        setTimeout(
          function () {

            scanLeaksBtn.textContent =
              "✓ Scan Complete";

          },
          1200
        );


        setTimeout(
          function () {

            scanLeaksBtn.textContent =
              oldText;

            scanLeaksBtn.disabled =
              false;

          },
          3000
        );

      }
    );

  }


  // =====================================================
  // OPPORTUNITY ACTION BUTTONS
  // =====================================================

  const actionButtons =
    getAll(".action-btn");

  actionButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const oldText =
            button.textContent;

          button.textContent =
            "⏳ Analyzing...";

          button.disabled =
            true;


          setTimeout(
            function () {

              button.textContent =
                "✓ Reviewed";

              button.disabled =
                false;

            },
            900
          );


          setTimeout(
            function () {

              button.textContent =
                oldText;

            },
            2600
          );

        }
      );

    }
  );


  // =====================================================
  // SIDEBAR NAVIGATION
  // =====================================================

  const navItems =
    getAll(".nav-item");

  navItems.forEach(
    function (item) {

      item.addEventListener(
        "click",
        function () {

          navItems.forEach(
            function (nav) {

              nav.classList.remove(
                "active"
              );

            }
          );

          item.classList.add(
            "active"
          );

        }
      );

    }
  );


  // =====================================================
  // LIVE ANALYTICS TIME
  // =====================================================

  const liveLabel =
    get(".live-label");

  function updateTime() {

    if (!liveLabel) {
      return;
    }

    const now =
      new Date();

    const time =
      now.toLocaleTimeString(
        "en-US",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      );

    liveLabel.textContent =
      "● Updated " + time;
  }

  updateTime();


  // =====================================================
  // CLIENT DEMO MODE
  // =====================================================

  const demoModeBtn =
    get("#demoModeBtn");

  let demoRunning =
    false;


  function animateNumber(
    selector,
    start,
    end,
    duration
  ) {

    const element =
      get(selector);

    if (!element) {
      return;
    }

    const startTime =
      performance.now();


    function animate(currentTime) {

      const progress =
        Math.min(
          (currentTime - startTime) /
            duration,
          1
        );


      const value =
        Math.floor(
          start +
          (end - start) *
            progress
        );


      element.textContent =
        currency(value);


      if (progress < 1) {

        requestAnimationFrame(
          animate
        );

      }

    }


    requestAnimationFrame(
      animate
    );
  }


  function runClientDemo() {

    if (demoRunning) {
      return;
    }

    demoRunning =
      true;


    if (demoModeBtn) {

      demoModeBtn.disabled =
        true;

      demoModeBtn.textContent =
        "⏳ Running AI Demo...";

    }


    // ---------------------------------------------
    // STEP 1
    // ---------------------------------------------

    const eyebrow =
      get(".eyebrow");

    if (eyebrow) {

      eyebrow.textContent =
        "AI ANALYZING BUSINESS SIGNALS...";

    }


    const liveIndicator =
      get(".live-indicator");

    if (liveIndicator) {

      liveIndicator.innerHTML =
        "<span></span> ANALYZING...";

    }


    // ---------------------------------------------
    // STEP 2 — UPDATE KPIs
    // ---------------------------------------------

    setTimeout(
      function () {

        animateNumber(
          ".kpi-card:nth-child(1) strong",
          184600,
          197850,
          1200
        );


        animateNumber(
          ".kpi-card:nth-child(2) strong",
          221400,
          238600,
          1400
        );


        animateNumber(
          ".kpi-card:nth-child(3) strong",
          28750,
          21400,
          1200
        );


        const growthScore =
          get(
            ".kpi-card:nth-child(4) strong"
          );

        if (growthScore) {

          growthScore.textContent =
            "93/100";

        }


        const scoreFill =
          get(".score-fill");

        if (scoreFill) {

          scoreFill.style.width =
            "93%";

        }

      },
      900
    );


    // ---------------------------------------------
    // STEP 3 — COMPLETE
    // ---------------------------------------------

    setTimeout(
      function () {

        if (eyebrow) {

          eyebrow.textContent =
            "AI ANALYSIS COMPLETE";

        }


        if (liveIndicator) {

          liveIndicator.innerHTML =
            "<span></span> AI INSIGHTS READY";

        }


        if (demoModeBtn) {

          demoModeBtn.textContent =
            "✓ Demo Complete";

        }


        demoRunning =
          false;


        // Show result

        openAnalysis(
          "Client Demo Result: RevenuePilot AI identified high-value opportunities, detected revenue leakage and improved the projected growth score. Recommended action: prioritize high-intent opportunities and accelerate follow-up."
        );


      },
      3000
    );


    // ---------------------------------------------
    // RESET DEMO BUTTON
    // ---------------------------------------------

    setTimeout(
      function () {

        if (demoModeBtn) {

          demoModeBtn.disabled =
            false;

          demoModeBtn.textContent =
            "🚀 Run Client Demo";

        }

      },
      5500
    );

  }


  if (demoModeBtn) {

    demoModeBtn.addEventListener(
      "click",
      runClientDemo
    );

  }


  // =====================================================
  // AUTO DEMO
  // URL:
  // ?demo=true
  // =====================================================

  const urlParams =
    new URLSearchParams(
      window.location.search
    );


  if (
    urlParams.get("demo") === "true"
  ) {

    setTimeout(
      runClientDemo,
      1200
    );

  }


  // =====================================================
  // SMOOTH LANDING NAVIGATION
  // =====================================================

  const landingLinks =
    getAll(
      'a[href^="#"]'
    );


  landingLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function (event) {

          const targetId =
            link.getAttribute("href");


          if (
            !targetId ||
            targetId === "#"
          ) {
            return;
          }


          const target =
            get(targetId);


          if (target) {

            event.preventDefault();


            target.scrollIntoView(
              {
                behavior: "smooth",
                block: "start"
              }
            );

          }

        }
      );

    }
  );


  // =====================================================
  // BOOK DEMO TRACKING
  // =====================================================

  const demoLinks =
    getAll(
      'a[href*="wa.me"], a[href^="mailto:"]'
    );


  demoLinks.forEach(
    function (link) {

      link.addEventListener(
        "click",
        function () {

          console.log(
            "RevenuePilot AI: Demo CTA clicked."
          );

        }
      );

    }
  );


  // =====================================================
  // INITIALIZATION
  // =====================================================

  console.log(
    "REVENUEPILOT AI initialized successfully."
  );

});
