(function () {
    var messages = [
      // Phase 1 — Scanning / Identifying
      "Taking a closer look...",
      "Sniffing out the ingredients...",
      "Identifying your dish...",
      "Reading the plate...",
      // Phase 2 — Analyzing
      "Counting the calories...",
      "Weighing the macros...",
      "Checking what's hiding inside...",
      "Consulting the nutrition tables...",
      // Phase 3 — Deeper Insight
      "Digging into the health score...",
      "Tracing where this dish comes from...",
      "Cooking up some recipe notes...",
      "Comparing it to your daily goals...",
      // Phase 4 — Wrapping Up
      "Plating your results...",
      "Almost served...",
      "Adding the final garnish..."
    ];

    var el = document.getElementById("statusSpan");
    var wrap = document.getElementById("statusText");
    var i = 0;
    var HOLD_MS = 2200;   // how long each phrase stays fully visible
    var OUT_MS = 450;     // must match textFadeOut duration

    function showNext() {
      i = (i + 1) % messages.length;
      var next = document.createElement("span");
      next.id = "statusSpan";
      next.textContent = messages[i];
      next.className = "text-in";
      wrap.innerHTML = "";
      wrap.appendChild(next);
    }

    function cycle() {
      var current = document.getElementById("statusSpan");
      current.classList.remove("text-in");
      current.classList.add("text-out");
      setTimeout(showNext, OUT_MS);
    }

    el.classList.add("text-in");
    setInterval(cycle, HOLD_MS + OUT_MS);
  })();
