const starter = {
  targetRoles: [
    "CMC Technical Project Manager / CMC Coordinator",
    "MSAT Scientist or Engineer - biologics / sterile manufacturing",
    "Tech Transfer Scientist or Engineer - drug product / biologics",
    "Regulatory CMC Associate / CMC Documentation Specialist",
    "Drug Product Development Scientist - biologics / injectable",
    "Process Development Scientist - injectable mAb / sterile DP",
    "Pharma PMO / R&D Project Coordinator",
    "Process Validation / Industrialization Engineer"
  ].join("\n"),
  locations: "France: Paris, Lyon, Strasbourg, Toulouse, Montpellier, Grenoble, remote or hybrid",
  preferences: "CDI or CDD; English working environment welcome; French-friendly team preferred",
  mustHaveKeywords: [
    "formulation",
    "drug product",
    "biologics",
    "mAb",
    "injectable",
    "process development",
    "CMC",
    "MSAT",
    "tech transfer",
    "project management"
  ].join("\n"),
  niceKeywords: [
    "stability",
    "fill-finish",
    "sterile",
    "CDMO",
    "regulatory CMC",
    "PMO",
    "validation",
    "DoE",
    "HPLC",
    "DLS"
  ].join("\n"),
  excludeKeywords: [
    "commercial sales",
    "cosmetics only",
    "senior director",
    "10+ years",
    "animal health only"
  ].join("\n"),
  coreExperience: [
    "3.5 years as a formulation and process development scientist for injectable monoclonal antibody medicines.",
    "Experience supporting biologics drug product development from formulation screening through process definition.",
    "Worked on sterile injectable mAb development with attention to stability, manufacturability, quality, and CMC expectations.",
    "Comfortable collaborating with analytical, manufacturing, quality, regulatory, and external partner teams."
  ].join("\n"),
  skills: [
    "Biologics formulation development, protein stability, excipient screening, buffer selection",
    "Injectable drug product process development, sterile manufacturing, fill-finish awareness",
    "DoE mindset, data analysis, technical reports, protocol writing, deviation follow-up",
    "CMC documentation, cross-functional coordination, timeline tracking, risk/action logs",
    "Stakeholder communication in English; French job market targeting"
  ].join("\n"),
  achievements: [
    "Add numbers here: batches supported, formulation candidates compared, stability time points reviewed, reports written, meetings led.",
    "Example: supported X formulation/process studies for injectable mAb candidates and translated results into development recommendations.",
    "Example: improved study follow-up by creating a clear action tracker for analytical, process, and CMC stakeholders."
  ].join("\n"),
  pmExperience: [
    "4 months of CMC project management experience coordinating actions, timelines, risks, and cross-functional communication.",
    "Prepared meeting notes, tracked decisions, followed deliverables, and helped align technical teams around CMC milestones.",
    "Use this section to record concrete examples: project phase, teams involved, documents handled, and outcomes."
  ].join("\n"),
  sourceCv: "",
  relevantExperience: "",
  quickRelevantExperience: "",
  jobDescription: "",
  companyName: "",
  roleTitle: "",
  selectedJobNotes: "",
  cvLanguage: "fr",
  formattedCvTitle: "",
  cvDraft: "",
  letterDraft: "",
  tracker: []
};

const fields = [
  "targetRoles",
  "locations",
  "preferences",
  "mustHaveKeywords",
  "niceKeywords",
  "excludeKeywords",
  "coreExperience",
  "skills",
  "achievements",
  "pmExperience",
  "sourceCv",
  "relevantExperience",
  "quickRelevantExperience",
  "jobDescription",
  "companyName",
  "roleTitle",
  "selectedJobNotes",
  "cvLanguage",
  "formattedCvTitle",
  "cvDraft",
  "letterDraft"
];

const keywordGroups = [
  { label: "formulation development", terms: ["formulation", "excipient", "buffer", "stability", "protein", "aggregation"] },
  { label: "injectable biologics", terms: ["injectable", "biologics", "mab", "monoclonal", "drug product", "sterile"] },
  { label: "process development", terms: ["process", "fill", "finish", "manufacturing", "scale", "tech transfer"] },
  { label: "CMC project management", terms: ["cmc", "project", "timeline", "risk", "stakeholder", "deliverable"] },
  { label: "documentation", terms: ["protocol", "report", "regulatory", "quality", "gmp", "deviation"] },
  { label: "analytical interface", terms: ["analytical", "assay", "characterization", "method", "data"] }
];

const searchTemplates = [
  '"CMC project manager" biologics France',
  '"technical project manager" CMC France',
  '"MSAT scientist" biologics France',
  '"tech transfer" "drug product" biologics France',
  '"regulatory CMC" pharmaceutical France',
  '"process validation" biologics France',
  '"drug product development" mAb France',
  '"formulation scientist" biologics France'
];

const dailySources = [
  {
    name: "LinkedIn",
    buildUrl: (query) => `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(query)}&location=${encodeURIComponent("France")}&f_TPR=r86400`
  },
  {
    name: "France Travail",
    buildUrl: (query) => `https://candidat.francetravail.fr/offres/recherche?motsCles=${encodeURIComponent(query)}&lieux=France&offresPartenaires=true&rayon=10&tri=0`
  },
  {
    name: "APEC",
    buildUrl: (query) => `https://www.apec.fr/candidat/recherche-emploi.html/emploi?motsCles=${encodeURIComponent(query)}&lieux=France`
  },
  {
    name: "Welcome to the Jungle",
    buildUrl: (query) => `https://www.welcometothejungle.com/fr/jobs?query=${encodeURIComponent(query)}&aroundQuery=France`
  },
  {
    name: "Indeed France",
    buildUrl: (query) => `https://fr.indeed.com/jobs?q=${encodeURIComponent(query)}&l=France&fromage=1`
  }
];

const companyWatchlist = [
  "Sandoz Biologics",
  "Evotec / Just-Evotec Biologics",
  "Sanofi",
  "Servier",
  "bioMerieux",
  "LFB",
  "Guerbet",
  "Yposkesi",
  "Fareva",
  "Eurofins CDMO",
  "Catalent",
  "Recipharm"
];

const worldwideSearchTemplates = [
  '"drug product formulation" biologics Europe',
  '"CMC project manager" biologics remote',
  '"MSAT scientist" biologics Europe',
  '"tech transfer scientist" biologics Europe',
  '"regulatory CMC associate" Europe remote',
  '"biologics drug product" "formulation and process development"'
];

const trackerStages = ["To apply", "Applied", "Interview", "Follow-up", "Closed"];

let state = { ...starter };
const careerVersion = 2;

function $(id) {
  return document.getElementById(id);
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function saveState() {
  fields.forEach((field) => {
    state[field] = $(field).value;
  });
  localStorage.setItem("franceBiopharmaJobStudio", JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem("franceBiopharmaJobStudio");
  state = saved ? { ...starter, ...JSON.parse(saved) } : { ...starter };
  if ((state.careerVersion || 1) < careerVersion) {
    state.targetRoles = starter.targetRoles;
    state.mustHaveKeywords = starter.mustHaveKeywords;
    state.niceKeywords = starter.niceKeywords;
    state.excludeKeywords = starter.excludeKeywords;
    state.preferences = starter.preferences;
    state.careerVersion = careerVersion;
    localStorage.setItem("franceBiopharmaJobStudio", JSON.stringify(state));
  }
  state.tracker = (state.tracker || []).map((item) => createTrackerItem(item));
  fields.forEach((field) => {
    $(field).value = state[field] || "";
  });
  syncRelevantExperience("profile");
}

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9+.#\s-]/g, " ");
}

function splitLines(text) {
  return text.split("\n").map((line) => line.trim()).filter(Boolean);
}

function collectProfileText() {
  return [
    $("coreExperience").value,
    $("skills").value,
    $("achievements").value,
    $("pmExperience").value,
    $("sourceCv").value,
    $("relevantExperience").value,
    $("quickRelevantExperience").value
  ].join("\n");
}

function analyzeJob() {
  saveState();
  const jd = normalize($("jobDescription").value);
  const profile = normalize(collectProfileText());
  const matched = [];
  const gaps = [];
  const mirrored = new Set();

  keywordGroups.forEach((group) => {
    const jdHits = group.terms.filter((term) => jd.includes(term));
    const profileHits = group.terms.filter((term) => profile.includes(term));
    if (jdHits.length && profileHits.length) {
      matched.push(`${group.label}: emphasize ${profileHits.slice(0, 4).join(", ")}.`);
      jdHits.forEach((term) => mirrored.add(term));
    } else if (jdHits.length) {
      gaps.push(`${group.label}: JD mentions ${jdHits.join(", ")}. Add honest evidence if you have it.`);
      jdHits.forEach((term) => mirrored.add(term));
    }
  });

  const jdWords = jd.split(/\s+/).filter((word) => word.length > 5);
  const frequent = [...new Set(jdWords)]
    .filter((word) => !["responsible", "working", "candidate", "within", "including", "company"].includes(word))
    .slice(0, 18);
  frequent.forEach((word) => mirrored.add(word));

  renderList("strongMatches", matched.length ? matched : ["Paste a detailed JD, then click Analyze JD."]);
  renderList("gaps", gaps.length ? gaps : ["No major gaps detected from the current keyword scan."]);
  renderChips("keywords", [...mirrored].slice(0, 26));
  showToast("JD analysis updated");
}

function renderList(id, items) {
  const list = $(id);
  list.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

function renderChips(id, items) {
  const container = $(id);
  container.innerHTML = "";
  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = item;
    container.appendChild(chip);
  });
}

function generateDocuments() {
  saveState();
  const company = $("companyName").value.trim() || "your company";
  const role = $("roleTitle").value.trim() || "this role";
  const jd = [$("jobDescription").value.trim(), $("selectedJobNotes").value.trim()].filter(Boolean).join("\n\n");
  const sourceCv = $("sourceCv").value.trim();
  const relevantExperience = [
    $("relevantExperience").value.trim(),
    $("quickRelevantExperience").value.trim()
  ].filter(Boolean).join("\n");
  const topSkills = splitLines($("skills").value).slice(0, 4);
  const achievements = splitLines($("achievements").value).slice(0, 3);
  const pm = splitLines($("pmExperience").value).slice(0, 2);
  const experience = splitLines($("coreExperience").value).slice(0, 4);
  const cvEvidence = sourceCv ? extractCvEvidence(`${relevantExperience}\n${sourceCv}`) : extractCvEvidence(relevantExperience);
  const customEvidence = splitLines(relevantExperience).slice(0, 6);
  const jdKeywords = extractKeywords(jd).slice(0, 8);

  $("cvDraft").value = [
    `Profile for ${role}`,
    "",
    `I bring 3.5 years of hands-on formulation and process development experience for injectable monoclonal antibody medicines, plus recent exposure to CMC project coordination. My strongest value is at the point where technical drug product work, clear documentation, and cross-functional follow-up need to come together.`,
    "",
    "Evidence I would put forward for this role:",
    ...customEvidence.map((item) => `- ${item}`),
    ...cvEvidence.map((item) => `- ${item}`),
    ...experience.map((item) => `- ${item}`),
    ...achievements.map((item) => `- ${item}`),
    ...pm.map((item) => `- ${item}`),
    "",
    "Terms to reflect naturally, without forcing them:",
    jdKeywords.length ? jdKeywords.join(", ") : topSkills.join(", ")
  ].join("\n");

  $("letterDraft").value = [
    `Dear Hiring Team,`,
    "",
    `I was interested in the ${role} position at ${company} because it sits close to the kind of work I want to keep building toward: biologics drug product development, CMC coordination, and practical problem-solving with several teams involved.`,
    "",
    `For the last 3.5 years, I have worked on formulation and process development for injectable monoclonal antibody medicines. That experience gave me a concrete understanding of formulation choices, process constraints, stability thinking, technical documentation, and the importance of good communication with analytical, quality, manufacturing, and CMC colleagues.`,
    "",
    cvEvidence.length
      ? `The parts of my experience that I would connect most directly to this role are these: ${cvEvidence.map(cleanSentence).join(" ")}`
      : `I would connect my application especially to injectable drug product development, CMC documentation, and cross-functional follow-up.`,
    "",
    achievements.length
      ? `A few concrete examples I can bring are: ${achievements.map(cleanSentence).join(" ")}`
      : `I would bring a careful scientific approach, honest follow-through, and the ability to turn development data into clear next steps.`,
    "",
    jdKeywords.length
      ? `I also noticed the emphasis on ${jdKeywords.slice(0, 5).join(", ")}. These are areas where I can connect my current experience with the next step I am looking for.`
      : `What attracts me is the mix of technical work and coordination. It feels like a realistic next step from my current experience, while still giving me room to grow.`,
    "",
    `I would be glad to discuss how my formulation, process development, and CMC coordination experience could support your team. Thank you for taking the time to consider my application.`,
    "",
    `Sincerely,`,
    `[Your name]`
  ].join("\n");

  saveState();
  showToast("Drafts generated");
}

function cleanSentence(text) {
  const trimmed = text.replace(/^example:\s*/i, "").trim();
  return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
}

function extractKeywords(text) {
  const source = normalize(text);
  const picked = [];
  keywordGroups.forEach((group) => {
    group.terms.forEach((term) => {
      if (source.includes(term) && !picked.includes(term)) picked.push(term);
    });
  });
  return picked;
}

function extractCvEvidence(text) {
  const usefulTerms = [
    "formulation",
    "process",
    "mAb",
    "monoclonal",
    "injectable",
    "stability",
    "CMC",
    "project",
    "analytical",
    "HPLC",
    "DLS",
    "DoE",
    "GMP",
    "sterile",
    "technology transfer",
    "tech transfer"
  ];
  return text
    .split(/\n|•/)
    .map((line) => line.replace(/^[-*]\s*/, "").trim())
    .filter((line) => line.length > 35)
    .filter((line) => usefulTerms.some((term) => line.toLowerCase().includes(term.toLowerCase())))
    .slice(0, 5);
}

function syncRelevantExperience(source) {
  const profileBox = $("relevantExperience");
  const quickBox = $("quickRelevantExperience");
  if (!profileBox || !quickBox) return;
  if (source === "quick" && quickBox.value !== profileBox.value) {
    profileBox.value = quickBox.value;
  }
  if (source === "profile" && profileBox.value !== quickBox.value) {
    quickBox.value = profileBox.value;
  }
}

function handleCvUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  const status = $("cvUploadStatus");
  const reader = new FileReader();
  reader.onload = () => {
    const raw = typeof reader.result === "string"
      ? reader.result
      : new TextDecoder("utf-8", { fatal: false }).decode(reader.result);
    const cleaned = cleanUploadedCvText(raw);
    $("sourceCv").value = cleaned;
    saveState();
    status.textContent = `${file.name} loaded. Review the Profile tab if the text looks messy.`;
    showToast("CV loaded");
  };
  reader.onerror = () => {
    status.textContent = "Could not read this CV file. Try exporting it as .txt, or send the file to Codex in chat.";
    showToast("CV upload failed");
  };
  if (/\.(txt|md|rtf|csv)$/i.test(file.name)) {
    reader.readAsText(file);
  } else {
    reader.readAsArrayBuffer(file);
    status.textContent = "Trying best-effort extraction. For PDF/DOCX, exported text gives better results.";
  }
}

function cleanUploadedCvText(text) {
  return text
    .replace(/\u0000/g, " ")
    .replace(/[^\S\r\n]+/g, " ")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 1)
    .join("\n")
    .slice(0, 25000);
}

function renderTracker() {
  const list = $("trackerList");
  list.innerHTML = "";
  if (!state.tracker.length) {
    const empty = document.createElement("p");
    empty.textContent = "No applications yet.";
    empty.style.color = "var(--muted)";
    list.appendChild(empty);
    return;
  }
  state.tracker.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "tracker-item";
    row.innerHTML = `<div><strong>${escapeHtml(item.company)} - ${escapeHtml(item.role)}</strong><span>${escapeHtml(item.stage)}${item.nextFollowUp ? ` · Follow up ${escapeHtml(item.nextFollowUp)}` : ""}</span></div>`;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => {
      state.tracker.splice(index, 1);
      saveState();
      renderTracker();
      renderTrackerBoard();
    });
    row.appendChild(remove);
    list.appendChild(row);
  });
}

function addTrackerItem() {
  const company = $("trackerCompany").value.trim();
  const role = $("trackerRole").value.trim();
  const stage = $("trackerStage").value;
  if (!company || !role) {
    showToast("Add a company and role first");
    return;
  }
  state.tracker.unshift(createTrackerItem({ company, role, stage }));
  $("trackerCompany").value = "";
  $("trackerRole").value = "";
  saveState();
  renderTracker();
  renderTrackerBoard();
}

function createTrackerItem(job) {
  return {
    id: job.id || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    company: job.company || "",
    role: job.role || job.title || "",
    stage: job.stage || "To apply",
    date: job.date || new Date().toISOString(),
    url: job.url || "",
    salaryEstimate: job.salaryEstimate || "",
    fitScore: job.fitScore || "",
    priority: job.priority || "",
    contactEmail: job.contactEmail || "",
    lastEmailDate: job.lastEmailDate || "",
    nextFollowUp: job.nextFollowUp || "",
    emailLog: job.emailLog || "",
    notes: job.notes || ""
  };
}

function trackRecommendedJob(job) {
  const exists = state.tracker.some((item) => item.url && item.url === job.url);
  if (exists) {
    showToast("Already in tracker");
    return;
  }
  state.tracker.unshift(createTrackerItem({
    ...job,
    role: job.title,
    notes: `${job.fit}\n\nCheck: ${job.concern}\n\nAngles: ${job.angles.join("; ")}`
  }));
  saveState();
  renderTracker();
  renderTrackerBoard();
  showToast("Job added to tracker");
}

function renderTrackerBoard() {
  const board = $("trackerBoard");
  if (!board) return;
  board.innerHTML = "";
  trackerStages.forEach((stage) => {
    const column = document.createElement("section");
    column.className = "tracker-column";
    const items = state.tracker.filter((item) => item.stage === stage);
    column.innerHTML = `<h3>${escapeHtml(stage)} <span>${items.length}</span></h3>`;
    const stack = document.createElement("div");
    stack.className = "tracker-stack";
    items.forEach((item) => stack.appendChild(createTrackerCard(item)));
    column.appendChild(stack);
    board.appendChild(column);
  });
}

function createTrackerCard(item) {
  const card = document.createElement("article");
  card.className = "tracker-card";
  card.innerHTML = `
    <div class="tracker-card-head">
      <div>
        <strong>${escapeHtml(item.role)}</strong>
        <span>${escapeHtml(item.company)}</span>
      </div>
      ${item.url ? `<a href="${item.url}" target="_blank" rel="noreferrer">Open</a>` : ""}
    </div>
    <p>${item.fitScore ? `Fit ${escapeHtml(String(item.fitScore))}/100` : "Manual entry"}${item.salaryEstimate ? ` · ${escapeHtml(item.salaryEstimate)}` : ""}</p>
    <label>Stage<select data-tracker-field="stage">${trackerStages.map((stage) => `<option ${stage === item.stage ? "selected" : ""}>${stage}</option>`).join("")}</select></label>
    <label>Contact email<input data-tracker-field="contactEmail" type="email" value="${escapeHtml(item.contactEmail || "")}" placeholder="recruiter@company.com"></label>
    <label>Last email date<input data-tracker-field="lastEmailDate" type="date" value="${escapeHtml(item.lastEmailDate || "")}"></label>
    <label>Next follow-up<input data-tracker-field="nextFollowUp" type="date" value="${escapeHtml(item.nextFollowUp || "")}"></label>
    <label>Email exchange<textarea data-tracker-field="emailLog" rows="5" placeholder="Paste recruiter replies, your sent emails, interview notes, follow-up reminders...">${escapeHtml(item.emailLog || "")}</textarea></label>
    <div class="tracker-actions">
      <button type="button" class="secondary email-draft">Draft follow-up</button>
      <button type="button" class="ghost remove-tracked">Remove</button>
    </div>
  `;
  card.querySelectorAll("[data-tracker-field]").forEach((field) => {
    field.addEventListener("change", () => updateTrackerItem(item.id, field.dataset.trackerField, field.value));
  });
  card.querySelector(".email-draft").addEventListener("click", () => draftFollowUpEmail(item.id));
  card.querySelector(".remove-tracked").addEventListener("click", () => removeTrackedItem(item.id));
  return card;
}

function updateTrackerItem(id, field, value) {
  const item = state.tracker.find((entry) => entry.id === id);
  if (!item) return;
  item[field] = value;
  saveState();
  renderTracker();
  if (field === "stage") renderTrackerBoard();
}

function removeTrackedItem(id) {
  state.tracker = state.tracker.filter((entry) => entry.id !== id);
  saveState();
  renderTracker();
  renderTrackerBoard();
}

function draftFollowUpEmail(id) {
  const item = state.tracker.find((entry) => entry.id === id);
  if (!item) return;
  const today = new Date().toISOString().slice(0, 10);
  const draft = [
    `[${today}] Follow-up draft`,
    `Subject: Follow-up - ${item.role}`,
    "",
    `Dear ${item.contactEmail ? "Hiring Team" : "Hiring Team"},`,
    "",
    `I hope you are well. I wanted to follow up on my application for the ${item.role} position at ${item.company}. I remain very interested in the role, especially because it connects with my experience in injectable mAb formulation/process development and CMC coordination.`,
    "",
    `Please let me know if I can provide any additional information.`,
    "",
    `Best regards,`,
    `[Your name]`
  ].join("\n");
  item.emailLog = [item.emailLog, draft].filter(Boolean).join("\n\n---\n\n");
  item.lastEmailDate = today;
  saveState();
  renderTrackerBoard();
  renderTracker();
  showToast("Follow-up draft added");
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function renderSearchStrings() {
  const container = $("searchStrings");
  container.innerHTML = "";
  searchTemplates.forEach((template) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = template;
    container.appendChild(chip);
  });
}

function buildDailyQueries() {
  const must = splitLines($("mustHaveKeywords").value);
  const nice = splitLines($("niceKeywords").value);
  const roleLines = splitLines($("targetRoles").value);
  const baseQueries = [
    '"CMC technical project manager" biopharma',
    '"MSAT scientist" biologics',
    '"tech transfer scientist" pharmaceutical',
    '"regulatory CMC" pharmaceutical',
    '"process validation engineer" pharma',
    '"drug product development" biologics formulation',
    '"formulation scientist" injectable biologics',
    '"process development scientist" mAb'
  ];

  const profileQueries = roleLines.slice(0, 3).map((role) => role.replace(/\s+-\s+/g, " "));
  const keywordQuery = [...must.slice(0, 4), ...nice.slice(0, 2)].join(" ");
  return [...new Set([...profileQueries, keywordQuery, ...baseQueries])].filter(Boolean);
}

function renderDailyFinder() {
  const container = $("dailySearchLinks");
  const queries = buildDailyQueries();
  container.innerHTML = "";
  queries.slice(0, 5).forEach((query, index) => {
    const source = dailySources[index % dailySources.length];
    const link = document.createElement("a");
    link.className = "job-link";
    link.href = source.buildUrl(query);
    link.target = "_blank";
    link.rel = "noreferrer";
    link.innerHTML = `<strong>${escapeHtml(source.name)}</strong><span>${escapeHtml(query)}</span>`;
    container.appendChild(link);
  });

  renderList("scoreChecklist", [
    "Role mentions biologics, mAb, injectable drug product, formulation, process development, CMC, MSAT, or tech transfer.",
    "Experience requested is close to 2-5 years, or the role welcomes scientist-level candidates.",
    "Work is in France, hybrid, or realistically commutable.",
    "Tasks include hands-on development, cross-functional CMC work, or external CMO coordination.",
    "Avoid roles that are mostly sales, unrelated cosmetics, very senior leadership, or outside your work authorization."
  ]);
  renderChips("companyWatchlist", companyWatchlist);
  renderJobSuggestions();
}

function renderJobSuggestions() {
  const container = $("jobSuggestions");
  const jobs = sortJobs(window.dailyJobSuggestions || []);
  container.innerHTML = "";
  if (!jobs.length) {
    container.innerHTML = "<p>No curated jobs have been added yet. The daily automation should update this list after it runs.</p>";
    return;
  }
  $("suggestionMeta").textContent = `${jobs.length} suggestions curated for fit, salary potential, and future growth.`;
  jobs.forEach((job, index) => {
    const card = document.createElement("section");
    card.className = "job-card";
    card.innerHTML = `
      <header>
        <div>
          <span class="priority">${escapeHtml(job.priority || "Recommended")}</span>
          <span class="score">Rank ${index + 1} - Fit ${escapeHtml(String(job.fitScore || "n/a"))}/100</span>
          <h4>${escapeHtml(job.title)}</h4>
          <p class="meta">${escapeHtml(job.company)} - ${escapeHtml(job.location)}</p>
        </div>
        <div class="job-actions">
          <button type="button" class="secondary prepare-job">Prepare application</button>
          <button type="button" class="secondary track-job">Track job</button>
          <a href="${job.url}" target="_blank" rel="noreferrer">Open job</a>
        </div>
      </header>
      <p class="salary"><strong>Salary:</strong> ${escapeHtml(job.salaryEstimate || "No estimate available yet.")}</p>
      <p class="fit-note"><strong>Fit note:</strong> ${escapeHtml(getFitNote(job.fitScore))}</p>
      <p>${escapeHtml(job.fit)}</p>
      <p class="concern"><strong>Check:</strong> ${escapeHtml(job.concern)}</p>
      <div class="chips">${job.angles.map((angle) => `<span class="chip">${escapeHtml(angle)}</span>`).join("")}</div>
    `;
    card.querySelector(".prepare-job").addEventListener("click", () => prepareApplication(job));
    card.querySelector(".track-job").addEventListener("click", () => trackRecommendedJob(job));
    container.appendChild(card);
  });
}

function renderWorldwideSuggestions() {
  const container = $("worldwideSuggestions");
  const jobs = sortJobs(window.worldwideJobSuggestions || []);
  container.innerHTML = "";
  $("worldwideMeta").textContent = `${jobs.length} worldwide suggestions kept separate from France.`;
  if (!jobs.length) {
    container.innerHTML = "<p>No worldwide suggestions have been added yet.</p>";
    return;
  }
  jobs.forEach((job, index) => {
    const card = document.createElement("section");
    card.className = "job-card";
    card.innerHTML = `
      <header>
        <div>
          <span class="priority">${escapeHtml(job.priority || "Recommended")}</span>
          <span class="score">Rank ${index + 1} - Fit ${escapeHtml(String(job.fitScore || "n/a"))}/100</span>
          <h4>${escapeHtml(job.title)}</h4>
          <p class="meta">${escapeHtml(job.company)} - ${escapeHtml(job.location)}</p>
        </div>
        <div class="job-actions">
          <button type="button" class="secondary prepare-job">Prepare application</button>
          <button type="button" class="secondary track-job">Track job</button>
          <a href="${job.url}" target="_blank" rel="noreferrer">Open job</a>
        </div>
      </header>
      <p class="salary"><strong>Salary:</strong> ${escapeHtml(job.salaryEstimate || "No estimate available yet.")}</p>
      <p class="fit-note"><strong>Fit note:</strong> ${escapeHtml(getFitNote(job.fitScore))}</p>
      <p>${escapeHtml(job.fit)}</p>
      <p class="concern"><strong>Check:</strong> ${escapeHtml(job.concern)}</p>
      <div class="chips">${job.angles.map((angle) => `<span class="chip">${escapeHtml(angle)}</span>`).join("")}</div>
    `;
    card.querySelector(".prepare-job").addEventListener("click", () => prepareApplication(job));
    card.querySelector(".track-job").addEventListener("click", () => trackRecommendedJob(job));
    container.appendChild(card);
  });
}

function sortJobs(jobs) {
  return [...jobs].sort((a, b) => (b.fitScore || 0) - (a.fitScore || 0));
}

function getFitNote(score = 0) {
  if (score >= 88) return "Excellent fit. Prioritize this application and tailor deeply.";
  if (score >= 78) return "Strong fit. Apply if the location, language, and salary make sense.";
  if (score >= 68) return "Good bridge role. Use it to move toward higher-salary CMC/MSAT/tech transfer work.";
  if (score >= 55) return "Ambitious role. Apply only with a targeted letter and strong transferable evidence.";
  return "Future target. Useful for direction, salary benchmark, and skill planning.";
}

function prepareApplication(job) {
  $("companyName").value = job.company;
  $("roleTitle").value = job.title;
  $("formattedCvTitle").value = suggestCvTitle(job);
  $("selectedJobNotes").value = [
    `${job.title} - ${job.company}`,
    `Location: ${job.location}`,
    `Priority: ${job.priority || "Recommended"}`,
    `Fit score: ${job.fitScore || "n/a"}/100`,
    `Salary: ${job.salaryEstimate || "No estimate available yet."}`,
    `Fit: ${job.fit}`,
    `Concern: ${job.concern}`,
    `Angles: ${job.angles.join("; ")}`,
    `Link: ${job.url}`
  ].join("\n");
  $("jobDescription").value = $("selectedJobNotes").value;
  saveState();
  generateDocuments();
  generateFormattedCv();
  document.querySelectorAll(".tab, .panel").forEach((el) => el.classList.remove("active"));
  document.querySelector('[data-tab="documents"]').classList.add("active");
  $("documents").classList.add("active");
  showToast("Application drafts prepared");
}

function suggestCvTitle(job) {
  const title = (job.title || "").toLowerCase();
  if (title.includes("cmc") || title.includes("project")) return "CMC Project Manager | Drug Product Biologics | CDMO Coordination";
  if (title.includes("msat") || title.includes("tech transfer")) return "Drug Product / MSAT Scientist | Biologics | Tech Transfer";
  if (title.includes("regulatory")) return "Regulatory CMC Associate | Injectable Biologics | Drug Product";
  if (title.includes("proposal")) return "Technical Proposal Writer | CDMO | Biologics Drug Product";
  return "Pharmaceutical Development Scientist | Sterile Injectable Biologics";
}

function copyJobSummary() {
  const jobs = window.dailyJobSuggestions || [];
  const text = jobs.map((job, index) => [
    `${index + 1}. ${job.title} - ${job.company} (${job.priority || "Recommended"})`,
    `Location: ${job.location}`,
    `Link: ${job.url}`,
    `Salary: ${job.salaryEstimate || "No estimate available yet."}`,
    `Fit: ${job.fit}`,
    `Concern: ${job.concern}`,
    `Angles: ${job.angles.join("; ")}`
  ].join("\n")).join("\n\n");
  navigator.clipboard.writeText(text).then(
    () => showToast("Shortlist copied"),
    () => showToast("Copy failed")
  );
}

function copyWorldwideSummary() {
  const jobs = window.worldwideJobSuggestions || [];
  const text = jobs.map((job, index) => [
    `${index + 1}. ${job.title} - ${job.company} (${job.priority || "Recommended"})`,
    `Location: ${job.location}`,
    `Link: ${job.url}`,
    `Salary: ${job.salaryEstimate || "No estimate available yet."}`,
    `Fit: ${job.fit}`,
    `Concern: ${job.concern}`,
    `Angles: ${job.angles.join("; ")}`
  ].join("\n")).join("\n\n");
  navigator.clipboard.writeText(text).then(
    () => showToast("Global shortlist copied"),
    () => showToast("Copy failed")
  );
}

function renderWorldwideSearchStrings() {
  renderChips("worldwideSearchStrings", worldwideSearchTemplates);
}

function buildCvProfile() {
  const source = $("sourceCv").value || "";
  const relevant = [
    $("relevantExperience").value,
    $("quickRelevantExperience").value,
    $("coreExperience").value,
    $("skills").value,
    $("pmExperience").value
  ].filter(Boolean).join("\n");
  const combined = `${source}\n${relevant}`;
  const language = $("cvLanguage").value || "fr";
  const selectedTitle = $("formattedCvTitle").value.trim() || $("roleTitle").value.trim();
  const isFrench = language === "fr";
  const email = (combined.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i) || [""])[0];
  const phone = (combined.match(/(\+33\s?\d(?:[\s.-]?\d{2}){4}|0\d(?:[\s.-]?\d{2}){4})/) || [""])[0];

  return {
    name: "Yawen GUO",
    title: selectedTitle || (isFrench
      ? "Chargée de Développement Pharmaceutique CMC - Drug Product"
      : "CMC Pharmaceutical Development Scientist - Drug Product"),
    location: "Lyon, France",
    email,
    phone,
    languages: isFrench
      ? ["Chinois : langue maternelle", "Français : bilingue", "Anglais : bilingue"]
      : ["Chinese: native", "French: bilingual", "English: bilingual"],
    summary: isFrench
      ? [
          "Scientifique en développement pharmaceutique spécialisée dans les produits injectables stériles et biologiques.",
          "Expérience en formulation, procédés, lyophilisation, QbD/DoE, documentation CMC et coordination transverse en environnement CDMO et Big Pharma.",
          "Profil à l'interface entre Drug Product, MSAT/tech transfer, CMC project management et partenaires CDMO/CRO."
        ]
      : [
          "Pharmaceutical development scientist specialized in sterile injectable and biologics drug products.",
          "Experience in formulation, process development, lyophilization, QbD/DoE, CMC documentation and cross-functional coordination in CDMO and Big Pharma environments.",
          "Profile positioned between Drug Product development, MSAT/tech transfer, CMC project management and CDMO/CRO coordination."
        ],
    skills: isFrench
      ? [
          "Développement pharmaceutique - injectables stériles, biologiques, Drug Product",
          "Formulation liquide et lyophilisée, stabilité, compatibilité, troubleshooting",
          "Procédés : mixing, filtration, remplissage aseptique, lyophilisation, scale-up",
          "QbD / ICH Q8 : QTPP, CQA, CPP, CMA, design space",
          "DoE, JMP, Minitab, R, Python, visualisation et outils IA",
          "Analytique : HPLC, DLS, DSC, NanoDSF, CE-SDS, TFF, MFI",
          "CMC : protocoles, SOP, rapports, CTD Module 3, IMP, change controls",
          "Coordination QC, MSAT, production, analytique, qualité, CDMO/CRO"
        ]
      : [
          "Pharmaceutical development - sterile injectables, biologics, Drug Product",
          "Liquid and lyophilized formulation, stability, compatibility, troubleshooting",
          "Processes: mixing, filtration, aseptic filling, lyophilization, scale-up",
          "QbD / ICH Q8: QTPP, CQA, CPP, CMA, design space",
          "DoE, JMP, Minitab, R, Python, data visualization and AI-based tools",
          "Analytics: HPLC, DLS, DSC, NanoDSF, CE-SDS, TFF, MFI",
          "CMC: protocols, SOPs, reports, CTD Module 3, IMP, change controls",
          "Coordination with QC, MSAT, production, analytical, quality, CDMO/CRO"
        ],
    experience: isFrench
      ? [
          {
            role: "CMC Project Manager",
            company: "Aurobac - Lyon, France",
            dates: "Juin 2025 - Septembre 2025",
            bullets: [
              "Pilotage des activités CMC pour un programme de peptides antimicrobiens, incluant des formulations liposomales.",
              "Coordination et suivi de partenaires externes CDMO/CRO pour les activités de formulation et développement analytique.",
              "Gestion des activités liées aux IMP cliniques, au reconditionnement, à l'approvisionnement et à la conformité réglementaire.",
              "Suivi des budgets, devis, change controls et contribution à la stratégie de développement pharmaceutique."
            ]
          },
          {
            role: "Chargée de Développement Pharmaceutique - Biologics / Drug Product",
            company: "Catalent CDMO - Limoges, France",
            dates: "Juillet 2022 - Juin 2025",
            bullets: [
              "Développement de formulations injectables liquides et lyophilisées jusqu'à la production GMP pour 6 molécules First-in-Human.",
              "Coordination d'environ 18 projets de formulation/CMC avec les équipes QC, MSAT, production, analytique, qualité et PM.",
              "Conception et réalisation d'études de formulation et procédés : mixing, filtration, remplissage aseptique, lyophilisation, compatibilité et troubleshooting.",
              "Rédaction de protocoles, SOP, rapports, labbooks, méthodes analytiques, templates et éléments de documentation CMC.",
              "Support à l'industrialisation, au scale-up, au transfert de technologie et aux interactions clients en français et anglais."
            ]
          },
          {
            role: "Stage de fin d'études - Développement de formulation",
            company: "Sanofi Pasteur - Marcy-l'Etoile, France",
            dates: "Mars 2021 - Août 2021",
            bullets: [
              "Planification et réalisation d'études de formulation et procédés pour vaccins, avec approche QbD/ICH Q8.",
              "Application de DoE pour l'optimisation expérimentale, analyse de stabilité et visualisation de données pour soutenir les décisions."
            ]
          }
        ]
      : [
          {
            role: "CMC Project Manager",
            company: "Aurobac - Lyon, France",
            dates: "June 2025 - September 2025",
            bullets: [
              "Led CMC activities for an antimicrobial peptide development program, including innovative liposomal formulations.",
              "Coordinated external CDMO/CRO partners for formulation and analytical development activities.",
              "Managed clinical IMP-related activities, repackaging, supply and regulatory/quality compliance follow-up.",
              "Tracked budgets, quotes, change controls and contributed to pharmaceutical development strategy."
            ]
          },
          {
            role: "Pharmaceutical Development Scientist - Biologics / Drug Product",
            company: "Catalent CDMO - Limoges, France",
            dates: "July 2022 - June 2025",
            bullets: [
              "Developed liquid and lyophilized injectable formulations up to GMP production for 6 First-in-Human molecules.",
              "Coordinated around 18 formulation/CMC projects with QC, MSAT, production, analytical, quality and PM teams.",
              "Designed and executed formulation/process studies: mixing, filtration, aseptic filling, lyophilization, compatibility and troubleshooting.",
              "Wrote protocols, SOPs, reports, labbooks, analytical methods, templates and CMC documentation inputs.",
              "Supported industrialization, scale-up, technology transfer and client interactions in French and English."
            ]
          },
          {
            role: "Final Internship - Formulation Development",
            company: "Sanofi Pasteur - Marcy-l'Etoile, France",
            dates: "March 2021 - August 2021",
            bullets: [
              "Planned and performed vaccine formulation/process development studies with a QbD/ICH Q8 approach.",
              "Applied DoE for experimental optimization, stability analysis and data visualization to support formulation decisions."
            ]
          }
        ],
    education: isFrench
      ? ["Master en Biotechnologie et Ingénierie des Biomolécules - ENSTBB, France, 2019-2021", "Licence en Biologie - Henan Agricultural University, Chine, 2015-2019", "Certification ICH E6 (R2) - Good Clinical Practice"]
      : ["MSc Biotechnology and Biomolecule Engineering - ENSTBB, France, 2019-2021", "BSc Biology - Henan Agricultural University, China, 2015-2019", "ICH E6 (R2) Good Clinical Practice certification"],
    publications: [
      "Bayesian optimization and machine learning for vaccine formulation development",
      "Development of nucleic acid isolation by non-silica-based nanoparticles and real-time PCR kit for edible vegetable oil traceability"
    ]
  };
}

function generateFormattedCv() {
  const cv = buildCvProfile();
  const isFrench = ($("cvLanguage").value || "fr") === "fr";
  $("formattedCvPreview").innerHTML = `
    <aside class="cv-sidebar">
      <h1>${escapeHtml(cv.name)}</h1>
      <p class="cv-title">${escapeHtml(cv.title)}</p>
      <div class="cv-contact">
        <p>${escapeHtml(cv.location)}</p>
        ${cv.email ? `<p>${escapeHtml(cv.email)}</p>` : ""}
        ${cv.phone ? `<p>${escapeHtml(cv.phone)}</p>` : ""}
      </div>
      <section>
        <h2>${isFrench ? "Compétences" : "Skills"}</h2>
        <ul>${cv.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ul>
      </section>
      <section>
        <h2>${isFrench ? "Langues" : "Languages"}</h2>
        <ul>${cv.languages.map((language) => `<li>${escapeHtml(language)}</li>`).join("")}</ul>
      </section>
      <section>
        <h2>${isFrench ? "Formation" : "Education"}</h2>
        <ul>${cv.education.map((education) => `<li>${escapeHtml(education)}</li>`).join("")}</ul>
      </section>
    </aside>
    <main class="cv-main">
      <section>
        <h2>${isFrench ? "Résumé" : "Profile"}</h2>
        ${cv.summary.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </section>
      <section>
        <h2>${isFrench ? "Expériences professionnelles" : "Professional Experience"}</h2>
        ${cv.experience.map((job) => `
          <article class="cv-job">
            <header>
              <div>
                <h3>${escapeHtml(job.role)}</h3>
                <p>${escapeHtml(job.company)}</p>
              </div>
              <span>${escapeHtml(job.dates)}</span>
            </header>
            <ul>${job.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </section>
      <section>
        <h2>${isFrench ? "Publications" : "Publications"}</h2>
        <ul>${cv.publications.map((publication) => `<li>${escapeHtml(publication)}</li>`).join("")}</ul>
      </section>
    </main>
  `;
  saveState();
  showToast("Formatted CV generated");
}

function printFormattedCv() {
  generateFormattedCv();
  window.print();
}

function openPrioritySearch() {
  const first = $("dailySearchLinks").querySelector("a");
  if (!first) {
    renderDailyFinder();
  }
  const link = $("dailySearchLinks").querySelector("a");
  if (link) window.open(link.href, "_blank", "noreferrer");
}

function copyDocuments() {
  const text = [
    "TAILORED CV PROFILE",
    $("cvDraft").value,
    "",
    "MOTIVATION LETTER",
    $("letterDraft").value
  ].join("\n");
  navigator.clipboard.writeText(text).then(
    () => showToast("Copied drafts"),
    () => showToast("Copy failed")
  );
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab, .panel").forEach((el) => el.classList.remove("active"));
    button.classList.add("active");
    $(button.dataset.tab).classList.add("active");
  });
});

$("saveAll").addEventListener("click", () => {
  saveState();
  showToast("Workspace saved");
});
$("resetDemo").addEventListener("click", () => {
  state = { ...starter };
  localStorage.setItem("franceBiopharmaJobStudio", JSON.stringify(state));
  loadState();
  renderTracker();
  renderTrackerBoard();
  showToast("Starter profile restored");
});
$("analyzeJd").addEventListener("click", analyzeJob);
$("generateDocs").addEventListener("click", generateDocuments);
$("copyDocs").addEventListener("click", copyDocuments);
$("generateFormattedCv").addEventListener("click", generateFormattedCv);
$("printFormattedCv").addEventListener("click", printFormattedCv);
$("addTracker").addEventListener("click", addTrackerItem);
$("copyJobSummary").addEventListener("click", copyJobSummary);
$("copyWorldwideSummary").addEventListener("click", copyWorldwideSummary);
$("cvUpload").addEventListener("change", handleCvUpload);
$("relevantExperience").addEventListener("input", () => {
  syncRelevantExperience("profile");
  saveState();
});
$("quickRelevantExperience").addEventListener("input", () => {
  syncRelevantExperience("quick");
  saveState();
});
$("buildDailySearches").addEventListener("click", () => {
  saveState();
  renderDailyFinder();
  showToast("Daily searches refreshed");
});
$("openPrioritySearch").addEventListener("click", openPrioritySearch);
fields.forEach((field) => $(field).addEventListener("change", saveState));

loadState();
renderTracker();
renderTrackerBoard();
renderSearchStrings();
renderDailyFinder();
renderWorldwideSuggestions();
renderWorldwideSearchStrings();
generateFormattedCv();
analyzeJob();
