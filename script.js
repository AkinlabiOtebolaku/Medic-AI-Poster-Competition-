function showPage(pageId) {
  let pages = document.querySelectorAll(".page");

  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

function showEmergency() {
  document.getElementById("emergencyPopup").style.display = "flex";
}

function closeEmergency() {
  document.getElementById("emergencyPopup").style.display = "none";
}

function showExploreDetail(section) {
  let output = document.getElementById("exploreOutput");

  if (section === "Diet") {
    output.innerHTML = `
      <h3>Diet Plans</h3>
      <p>DASH and Mediterranean meals are recommended to support healthier blood pressure.</p>
      <button onclick="alert('Recipe added to tracker')">+ Add DASH Meal</button>
    `;
  }

  if (section === "Activity") {
    output.innerHTML = `
      <h3>Activity Plans</h3>
      <p>Today’s goal: 7,500 steps and one 20-minute walk.</p>
      <button onclick="alert('Activity plan started')">Start Plan</button>
    `;
  }

  if (section === "Sleep") {
    output.innerHTML = `
      <h3>Sleep Summary</h3>
      <p>You slept 5h 20m. Pulse suggests a calmer evening routine tonight.</p>
      <button onclick="alert('Sleep advice saved')">Save Advice</button>
    `;
  }
}

function askPulse(topic) {
  let reply = document.getElementById("botReply");

  if (topic === "score") {
    reply.innerText = "Pulse: Your score is based on blood pressure, diet, activity, sleep and medication habits.";
  }

  if (topic === "sleep") {
    reply.innerText = "Pulse: Your sleep was shorter than usual. Aim for a consistent bedtime and reduce screen time before bed.";
  }

  if (topic === "diet") {
    reply.innerText = "Pulse: Try reducing salty foods today. DASH-style meals can help manage hypertension risk.";
  }
}