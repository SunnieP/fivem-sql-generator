<form id="jobForm">
  <label for="job_name">Job Name:</label>
  <input type="text" id="job_name" name="job_name" required />

  <label for="job_label">Job Label:</label>
  <input type="text" id="job_label" name="job_label" required />

  <label for="job_type">Type:</label>
  <select id="job_type" name="job_type">
    <option value="job">Job</option>
    <option value="gang">Gang</option>
  </select>

<div class="checkbox-wrapper">
  <input type="checkbox" id="is_whitelisted" name="is_whitelisted" />
  <label for="is_whitelisted">Whitelisted</label>
</div>

  <hr />

  <label for="preset">Grade Preset:</label>
<select id="presetSelect" name="presetSelect">
    <option value="">-- Choose a preset --</option>
    <option value="1ranks">Boss</option>    
    <option value="2ranks">Associate, Boss</option>    
    <option value="3ranks">Recruit, Experienced, Boss</option>    
    <option value="4ranks">Recruit, Officer, Manager, Boss</option>
    <option value="5ranks">Intern, Junior, Mid, Senior, Boss</option>
  </select>

  <h3>Grades</h3>
  <div id="gradesContainer"></div>
  <button type="button" id="addGradeBtn">+ Add Grade</button>

  <hr />

  <label for="framework">Framework:</label>
  <select id="framework" name="framework">
    <option value="esx">ESX</option>
    <option value="qb">QBCore</option>
  </select>

  <br /><br />
  <button type="submit">Generate SQL</button>
</form>

<div id="sqlOutput" style="margin-top: 30px; white-space: pre-wrap;"></div>
<button type="button" id="copySqlBtn" class="copy-button">Copy SQL to Clipboard</button>