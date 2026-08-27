 /* =========================================================
   REVENUEPILOT AI
   CEO REVENUE COMMAND CENTER
   script.js — FINAL WORKING VERSION
========================================================= */

(function () {

  "use strict";

  /* =======================================================
     WAIT FOR PAGE
  ======================================================= */

  document.addEventListener("DOMContentLoaded", function () {

    console.log("REVENUEPILOT AI: JavaScript loaded");


    /* =====================================================
       HELPER FUNCTIONS
    ===================================================== */

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


    /* =====================================================
       GROWTH SIMULATOR
    ===================================================== */

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
        conversionRateValue.textContent = rate;
      }

      /*
        Illustrative scenario only.
        It is NOT a revenue guarantee.
      */

      const result =
        leads *
        value *
        (rate / 100);

      simulatorResult.textContent =
        currency(result);
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


    /* =====================================================
       MODAL
    ===================================================== */

    const analysisModal = get("analysisModal");
    const modalClose = get("modalClose");
    const modalDone = get("modalDone");
    const modalMessage = get("modalMessage");


    function openModal(message) {

      if (!analysisModal) {
        return;
      }

      if (modalMessage && message) {
        modalMessage.textContent = message;
      }

      analysisModal.classList.add("show");

      analysisModal.setAttribute(
        "aria-hidden",
        "false"
      );

      document.body.style.overflow = "hidden";
    }


    function closeModal() {

      if (!analysisModal) {
        return;
      }

      analysisModal.classList.remove("show");

      analysisModal.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow = "";
    }


    if (modalClose) {
      modalClose.addEventListener(
        "click",
        closeModal
      );
    }


    if (modalDone) {
      modalDone.addEventListener(
        "click",
        closeModal
      );
    }


    const modalOverlay =
      document.querySelector(".modal-overlay");


    if (modalOverlay) {

      modalOverlay.addEventListener(
        "click",
        closeModal
      );

    }


    document.addEventListener(
      "keydown",
      function (event) {

        if (event.key === "Escape") {
          closeModal();
        }

      }
    );


    /* =====================================================
       RUN AI ANALYSIS
    ===================================================== */

    const runAnalysisBtn =
      get("runAnalysisBtn");


    if (runAnalysisBtn) {

      runAnalysisBtn.addEventListener(
        "click",
        function () {

          openModal(
            "AI analysis recommends reviewing high-value opportunities first, improving follow-up speed, and reducing revenue leakage."
          );

        }
      );

    }


    /* =====================================================
       EXECUTIVE ACTION
    ===================================================== */

    const executiveActionBtn =
      get("executiveActionBtn");


    if (executiveActionBtn) {

      executiveActionBtn.addEventListener(
        "click",
        function () {

          openModal(
            "Executive recommendation: prioritize high-intent opportunities first. Then improve response speed and follow-up consistency to reduce revenue leakage."
          );

        }
      );

    }


    /* =====================================================
       DETAILED AI INSIGHT
    ===================================================== */

    const insightBtn =
      get("insightBtn");


    if (insightBtn) {

      insightBtn.addEventListener(
        "click",
        function () {

          openModal(
            "Priority #1: Recover high-value opportunities. Priority #2: Improve follow-up speed. Priority #3: Increase conversion efficiency."
          );

        }
      );

    }


    /* =====================================================
       REVENUE LEAK SCANNER
    ===================================================== */

    const scanLeaksBtn =
      get("scanLeaksBtn");


    if (scanLeaksBtn) {

      scanLeaksBtn.addEventListener(
        "click",
        function () {

          const originalText =
            scanLeaksBtn.textContent;

          scanLeaksBtn.disabled = true;

          scanLeaksBtn.textContent =
            "Scanning...";


          setTimeout(
            function () {

              scanLeaksBtn.textContent =
                "✓ Scan Complete";


              setTimeout(
                function () {

                  scanLeaksBtn.textContent =
                    originalText;

                  scanLeaksBtn.disabled =
                    false;

                },
                1800
              );

            },
            1000
          );

        }
      );

    }


    /* =====================================================
       OPPORTUNITY ACTION BUTTONS
    ===================================================== */

    const actionButtons =
      document.querySelectorAll(
        ".action-btn"
      );


    actionButtons.forEach(
      function (button) {

        button.addEventListener(
          "click",
          function () {

            const originalText =
              button.textContent;

            button.disabled = true;

            button.textContent =
              "Analyzing...";


            setTimeout(
              function () {

                button.textContent =
                  "✓ Reviewed";


                setTimeout(
                  function () {

                    button.textContent =
                      originalText;

                    button.disabled =
                      false;

                  },
                  1400
                );

              },
              900
            );

          }
        );

      }
    );


    /* =====================================================
       NAVIGATION
    ===================================================== */

    const navItems =
      document.querySelectorAll(
        ".nav-item"
      );


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


    /* =====================================================
       LIVE TIME
    ===================================================== */

    const liveLabel =
      document.querySelector(
        ".live-label"
      );


    function updateLiveTime() {

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


    updateLiveTime();


    /* =====================================================
       BUTTON LOADING EFFECT
    ===================================================== */

    const primaryButtons =
      document.querySelectorAll(
        ".primary-btn"
      );


    primaryButtons.forEach(
      function (button) {

        button.addEventListener(
          "mouseenter",
          function () {

            button.style.transition =
              "all 0.2s ease";

          }
        );

      }
    );


    /* =====================================================
       KEYBOARD SHORTCUT
       CTRL + ENTER = AI ANALYSIS
    ===================================================== */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.ctrlKey &&
          event.key === "Enter"
        ) {

          if (runAnalysisBtn) {
            runAnalysisBtn.click();
          }

        }

      }
    );


    /* =====================================================
       FINAL STATUS
    ===================================================== */

    console.log(
      "✓ REVENUEPILOT AI initialized successfully"
    );

    console.log(
      "✓ Growth Simulator ready"
    );

    console.log(
      "✓ AI Analysis ready"
    );

    console.log(
      "✓ Revenue Leak Scanner ready"
    );

    console.log(
      "✓ Opportunity Intelligence ready"
    );

  });

})();
