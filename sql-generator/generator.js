document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("jobForm");
  const sqlOutput = document.getElementById("sqlOutput");
  const gradesContainer = document.getElementById("gradesContainer");
  const addGradeBtn = document.getElementById("addGradeBtn");
  const copyBtn = document.getElementById("copySqlBtn"); 
  const presetSelect = document.getElementById("presetSelect");

  let gradeCount = 0;

  function addGrade(label = '', salary = '', level = '') {
    gradeCount++;
    const gradeDiv = document.createElement("div");
    gradeDiv.classList.add("grade-entry");
    gradeDiv.innerHTML = `
      <fieldset style="margin-bottom: 15px; border: 1px solid #ccc; padding: 10px;">
        <legend>Grade ${gradeCount}</legend>
        <label>Label:</label>
        <input type="text" name="grade_label_${gradeCount}" value="${label}" required />
        <label>Salary:</label>
        <input type="number" name="grade_salary_${gradeCount}" value="${salary}" required />
        <label>Grade Level:</label>
        <input type="number" name="grade_level_${gradeCount}" value="${level}" required />
        <button type="button" onclick="this.closest('.grade-entry').remove()">Remove</button>
      </fieldset>
    `;
    gradesContainer.appendChild(gradeDiv);
  }

  // Initial grade setup (if needed, or add one default grade)
  // addGrade(); // Uncomment if you want one grade by default

  addGradeBtn?.addEventListener("click", () => {
    addGrade();
  });

  presetSelect?.addEventListener("change", () => {
    gradesContainer.innerHTML = "";
    gradeCount = 0;

    const preset = presetSelect.value;

    const presets = {
      "1ranks": [
        { label: "Boss", salary: 2000, level: 2 }
      ],
      "2ranks": [
        { label: "Associate", salary: 1000, level: 0 },
        { label: "Boss", salary: 2000, level: 2 }
      ],
      "3ranks": [
        { label: "Recruit", salary: 500, level: 0 },
        { label: "Experienced", salary: 1200, level: 1 },
        { label: "Boss", salary: 2000, level: 2 }
      ],
      "4ranks": [
        { label: "Recruit", salary: 500, level: 0 },
        { label: "Officer", salary: 1000, level: 1 },
        { label: "Manager", salary: 1500, level: 2 },
        { label: "Boss", salary: 2000, level: 3 }
      ],
      "5ranks": [
        { label: "Intern", salary: 400, level: 0 },
        { label: "Junior", salary: 800, level: 1 },
        { label: "Mid", salary: 1200, level: 2 },
        { label: "Senior", salary: 1600, level: 3 },
        { label: "Boss", salary: 2000, level: 4 }
      ]
    };

    if (presets[preset]) {
      presets[preset].forEach(g => addGrade(g.label, g.salary, g.level));
    }
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();

    const jobName = document.getElementById("job_name").value.trim();
    const jobLabel = document.getElementById("job_label").value.trim();
    const jobType = document.getElementById("job_type").value;
    const isWhitelisted = document.getElementById("is_whitelisted").checked ? 1 : 0;
    const framework = document.getElementById("framework").value;
    const gradeDivs = document.querySelectorAll(".grade-entry");

    let sql = "";

    if (framework === "esx") {
      sql += `INSERT INTO jobs (name, label, whitelisted) VALUES ('${jobName}', '${jobLabel}', ${isWhitelisted});\n\n`;
    } else {
      sql += `INSERT INTO job_roles (id, name, is_whitelisted) VALUES ('${jobName}', '${jobLabel}', ${isWhitelisted});\n\n`;
    }

    gradeDivs.forEach((grade) => {
      const label = grade.querySelector(`input[name^="grade_label_"]`).value.trim();
      const salary = grade.querySelector(`input[name^="grade_salary_"]`).value.trim();
      const level = grade.querySelector(`input[name^="grade_level_"]`).value.trim();

      if (!label || !salary || !level) return;

      if (framework === "esx") {
        sql += `INSERT INTO job_grades (job_name, grade, name, label, salary, skin_male, skin_female) VALUES ('${jobName}', ${level}, '${label.toLowerCase()}', '${label}', ${salary}, '{}', '{}');\n`;
      } else {
        sql += `INSERT INTO job_grades (job_id, grade_level, grade_name, salary) VALUES ('${jobName}', ${level}, '${label}', ${salary});\n`;
      }
    });

    if (framework === "esx") {
      sql += `\nINSERT INTO addon_account (name, label, shared) VALUES ('society_${jobName}', '${jobLabel}', 1);\n`;
    }

    sqlOutput.textContent = sql || "// No grades provided yet.";
  });


  copyBtn?.addEventListener("click", () => {
    const sql = sqlOutput.textContent;

    if (!sql) {
      alert("There's nothing to copy yet!");
      return;
    }

    navigator.clipboard.writeText(sql)
      .then(() => {
        copyBtn.textContent = "✅ Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy SQL to Clipboard";
        }, 2000);
      })
      .catch(err => {
        console.error("Copy failed", err);
        alert("Something went wrong copying the SQL.");
      });
  });
});