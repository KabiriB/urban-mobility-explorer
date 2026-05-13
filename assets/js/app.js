let summaryData = [];
let chartInstance = null;

function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const row = {};

    headers.forEach((header, index) => {
      row[header.trim()] = values[index] ? values[index].trim() : "";
    });

    row.n = Number(row.n);
    row.denominator = Number(row.denominator);
    row.share = Number(row.share);

    return row;
  });
}

function getUniqueValues(data, field) {
  return [...new Set(data.map((row) => row[field]))];
}

function formatVariableName(variable) {
  const mapping = {
    belong_here: "Sense of Belonging",
    perceived_outsider: "Perceived as an Outsider",
    trust_police: "Trust in Police",
    trust_councillor: "Trust in Councillor",
    trust_neighbours: "Trust in Neighbours",
    stay_or_go: "Intention to Stay or Leave",
    medium_term_goal: "Medium-Term Goal",
    long_term_goal: "Long-Term Goal",
    age_group: "Age Group",
    gender: "Gender",
    migrant_status: "Migrant Status",
    education_group: "Education Group",
    employment_status: "Employment Status",
  };

  return mapping[variable] || variable;
}

function populateDropdown(selectElement, options) {
  selectElement.innerHTML = "";

  options.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;

    if (selectElement.id === "variableSelect") {
      opt.textContent = formatVariableName(option);
    } else {
      opt.textContent = option;
    }

    selectElement.appendChild(opt);
  });
}

function getFilteredData() {
  const geographyLevel = document.getElementById("geographyLevel").value;
  const city = document.getElementById("citySelect").value;
  const neighbourhood = document.getElementById("neighbourhoodSelect").value;

  return summaryData.filter((row) => {
    if (row.geography_level !== geographyLevel) return false;
    if (city !== "All" && row.city !== city) return false;
    if (
      geographyLevel === "neighbourhood" &&
      neighbourhood !== "All" &&
      row.neighbourhood !== neighbourhood
    ) {
      return false;
    }
    return true;
  });
}

function updateVariableOptions() {
  const variableSelect = document.getElementById("variableSelect");
  const filtered = getFilteredData();
  const variables = getUniqueValues(filtered, "variable");

  populateDropdown(variableSelect, variables);
  updateChart();
}

function updateChart() {
  const variable = document.getElementById("variableSelect").value;
  const chartTitle = document.getElementById("chartTitle");
  const metaInfo = document.getElementById("metaInfo");

  const geographyLevel = document.getElementById("geographyLevel").value;
  const city = document.getElementById("citySelect").value;
  const neighbourhood = document.getElementById("neighbourhoodSelect").value;

  let locationLabel = "";

  if (geographyLevel === "city") {
    locationLabel = city;
  } else {
    locationLabel = `${neighbourhood}, ${city}`;
  }

  chartTitle.textContent = `${formatVariableName(variable)} — ${locationLabel}`;

  const filtered = getFilteredData().filter((row) => row.variable === variable);

  const labels = filtered.map((row) => row.category);
  const percentages = filtered.map((row) => row.share * 100);
  const counts = filtered.map((row) => row.n);

  const ctx = document.getElementById("chartCanvas").getContext("2d");

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          data: percentages,
          backgroundColor: "#3b82f6",
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.7,
          categoryPercentage: 0.7,
          maxBarThickness: 56,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#1f2933",
          titleColor: "#ffffff",
          bodyColor: "#ffffff",
          padding: 12,
          callbacks: {
            label: function (context) {
              const index = context.dataIndex;
              return `${percentages[index].toFixed(1)}% (n = ${counts[index]})`;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          grid: {
            color: "#e5e7eb",
            drawBorder: false,
          },
          border: {
            display: false,
          },
          ticks: {
            font: {
              size: 13,
            },
            callback: function (value) {
              return value + "%";
            },
          },
          title: {
            display: true,
            text: "Percent",
            font: {
              size: 15,
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            font: {
              size: 13,
            },
            maxRotation: 0,
            minRotation: 0,
          },
        },
      },
    },
  });

  metaInfo.textContent = `Showing ${formatVariableName(variable)} for ${locationLabel}. Hover over the bars to see percentage and count.`;
}

function updateGeographyControls() {
  const geographyLevel = document.getElementById("geographyLevel").value;
  const citySelect = document.getElementById("citySelect");
  const neighbourhoodSelect = document.getElementById("neighbourhoodSelect");

  if (geographyLevel === "city") {
    const cityOptions = getUniqueValues(
      summaryData.filter((row) => row.geography_level === "city"),
      "city",
    );

    populateDropdown(citySelect, cityOptions);
    populateDropdown(neighbourhoodSelect, ["All"]);
    updateVariableOptions();
    return;
  }

  if (geographyLevel === "neighbourhood") {
    const cityOptions = getUniqueValues(
      summaryData.filter((row) => row.geography_level === "neighbourhood"),
      "city",
    );

    populateDropdown(citySelect, cityOptions);
    updateNeighbourhoodOptions();
    return;
  }
}

function updateNeighbourhoodOptions() {
  const geographyLevel = document.getElementById("geographyLevel").value;
  const city = document.getElementById("citySelect").value;
  const neighbourhoodSelect = document.getElementById("neighbourhoodSelect");

  if (geographyLevel !== "neighbourhood") {
    populateDropdown(neighbourhoodSelect, ["All"]);
    updateVariableOptions();
    return;
  }

  const neighbourhoodOptions = getUniqueValues(
    summaryData.filter(
      (row) => row.geography_level === "neighbourhood" && row.city === city,
    ),
    "neighbourhood",
  ).filter(
    (name) =>
      name !== "All" &&
      name !== "Missing" &&
      name !== "-1" &&
      name !== "-3" &&
      name !== "",
  );

  populateDropdown(neighbourhoodSelect, neighbourhoodOptions);
  updateVariableOptions();
}

async function loadSummaryData() {
  try {
    const response = await fetch("data/survey_public_summary_v2.csv");
    const csvText = await response.text();

    summaryData = parseCSV(csvText);

    const geographyLevels = getUniqueValues(
      summaryData,
      "geography_level",
    ).filter((level) => level !== "overall");

    const geographySelect = document.getElementById("geographyLevel");
    const citySelect = document.getElementById("citySelect");
    const neighbourhoodSelect = document.getElementById("neighbourhoodSelect");
    const variableSelect = document.getElementById("variableSelect");

    populateDropdown(geographySelect, geographyLevels);
    updateGeographyControls();

    geographySelect.addEventListener("change", updateGeographyControls);
    citySelect.addEventListener("change", updateNeighbourhoodOptions);
    neighbourhoodSelect.addEventListener("change", updateVariableOptions);
    variableSelect.addEventListener("change", updateChart);
  } catch (error) {
    console.error("Error loading CSV:", error);
  }
}

loadSummaryData();
