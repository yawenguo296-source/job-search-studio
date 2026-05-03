const starter = {
  targetRoles: [
    "Technical Sales Specialist / Field Application Specialist - life sciences / bioprocess",
    "Customer Success Specialist / Customer Success Manager - pharma, biotech, healthcare",
    "Proposal Writer / Proposal Manager - CDMO / biotech services",
    "Business Development Associate / Account Manager - CDMO, CRO, life sciences tools",
    "Application Sales Specialist - LIMS/ELN, lab software, scientific instruments",
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
    "pharma",
    "biotech",
    "life sciences",
    "customer success",
    "technical sales",
    "field application",
    "proposal",
    "business development",
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
    "CRO",
    "B2B",
    "client-facing",
    "account management",
    "customer support",
    "scientific instruments",
    "LIMS",
    "ELN",
    "regulatory CMC",
    "PMO",
    "validation",
    "DoE",
    "HPLC",
    "DLS"
  ].join("\n"),
  excludeKeywords: [
    "cosmetics only",
    "senior director",
    "10+ years",
    "animal health only",
    "retail sales without scientific content",
    "call center without healthcare/science context"
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
  cvPhotoData: "",
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
  "cvPhotoData",
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
  '"technical sales specialist" life sciences France',
  '"field application specialist" biotechnology France',
  '"customer success specialist" pharma France',
  '"proposal manager" CDMO France',
  '"business development associate" CDMO France',
  '"application sales specialist" LIMS ELN Paris',
  '"CMC project manager" biologics France',
  '"technical project manager" CMC France',
  '"MSAT scientist" biologics France',
  '"tech transfer" "drug product" biologics France',
  '"regulatory CMC" pharmaceutical France',
  '"process validation" biologics France',
  '"drug product development" mAb France',
  '"formulation scientist" biologics France'
];

const cdmoSearchTemplates = [
  '"proposal manager" CDMO France',
  '"business development associate" CDMO biologics Europe',
  '"technical project manager" CDMO Drug Product France',
  '"customer success" CDMO life sciences France',
  '"field application specialist" bioprocess France',
  '"technical sales specialist" CDMO life sciences France',
  '"QA project manager" CDMO France',
  '"client project manager" CDMO pharma France'
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
const careerVersion = 3;

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
    const element = $(field);
    if (element) state[field] = element.value;
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
    const element = $(field);
    if (element) element.value = state[field] || "";
  });
  syncRelevantExperience("profile");
  updatePhotoStatus();
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
  const isFrenchApplication = shouldUseFrenchApplication(jd);
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

  $("cvDraft").value = isFrenchApplication
    ? buildFrenchCvDraft({ role, company, customEvidence, cvEvidence, experience, achievements, pm, jdKeywords, topSkills })
    : buildEnglishCvDraft({ role, company, customEvidence, cvEvidence, experience, achievements, pm, jdKeywords, topSkills });

  $("letterDraft").value = isFrenchApplication
    ? buildFrenchLetterDraft({ role, company, cvEvidence, achievements, jdKeywords })
    : buildEnglishLetterDraft({ role, company, cvEvidence, achievements, jdKeywords });

  saveState();
  showToast("Drafts generated");
}

function cleanSentence(text) {
  const trimmed = text.replace(/^example:\s*/i, "").trim();
  return trimmed.endsWith(".") ? trimmed : `${trimmed}.`;
}

function shouldUseFrenchApplication(jobText) {
  const text = jobText.toLowerCase();
  const worldwideSignals = ["germany", "austria", "hungary", "united kingdom", "united states", "remote europe", "outside france"];
  return !worldwideSignals.some((signal) => text.includes(signal));
}

function buildFrenchCvDraft({ role, company, customEvidence, cvEvidence, experience, achievements, pm, jdKeywords, topSkills }) {
  return [
    `Profil cible - ${role}`,
    "",
    `Chargée de développement pharmaceutique spécialisée en produits injectables stériles et biologiques, avec 3,5 ans d'expérience en formulation et développement de procédés, complétés par une expérience récente en coordination de projets CMC. Pour le poste ${role} chez ${company}, je mettrais surtout en avant mon expérience Drug Product, mon approche QbD/DoE et ma capacité à coordonner les interfaces CMC, analytique, qualité, production et partenaires externes.`,
    "",
    "Expériences à mettre en avant :",
    ...customEvidence.map((item) => `- ${item}`),
    ...cvEvidence.map((item) => `- ${item}`),
    ...experience.map((item) => `- ${item}`),
    ...achievements.map((item) => `- ${item}`),
    ...pm.map((item) => `- ${item}`),
    "",
    "Mots-clés à intégrer naturellement :",
    jdKeywords.length ? jdKeywords.join(", ") : topSkills.join(", ")
  ].join("\n");
}

function buildEnglishCvDraft({ role, company, customEvidence, cvEvidence, experience, achievements, pm, jdKeywords, topSkills }) {
  return [
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
}

function buildFrenchLetterDraft({ role, company, cvEvidence, achievements, jdKeywords }) {
  return [
    `Madame, Monsieur,`,
    "",
    `Je vous adresse ma candidature pour le poste de ${role} au sein de ${company}. Ce poste m'intéresse car il correspond à l'évolution que je souhaite donner à mon parcours : rester proche du développement pharmaceutique des produits injectables et biologiques, tout en renforçant la dimension CMC, coordination transverse et contribution aux décisions techniques.`,
    "",
    `Au cours de mes 3,5 années en développement de formulation et de procédés, j'ai travaillé sur des médicaments injectables à base d'anticorps monoclonaux et sur des produits biologiques en environnement CDMO. Cette expérience m'a permis de développer une vision concrète des choix de formulation, des contraintes procédés, de la stabilité, de la documentation scientifique et des échanges nécessaires avec les équipes analytiques, qualité, production, MSAT et CMC.`,
    "",
    cvEvidence.length
      ? `Les éléments de mon parcours que je relierais le plus directement à votre besoin sont les suivants : ${cvEvidence.map(cleanSentence).join(" ")}`
      : `Je mettrais particulièrement en avant mon expérience en Drug Product injectable, documentation CMC, suivi de projets et coordination avec plusieurs métiers.`,
    "",
    achievements.length
      ? `Parmi les exemples concrets que je peux apporter : ${achievements.map(cleanSentence).join(" ")}`
      : `J'apporte une approche rigoureuse, une bonne capacité de synthèse et l'habitude de transformer des résultats expérimentaux en recommandations claires pour la suite du développement.`,
    "",
    jdKeywords.length
      ? `J'ai également noté l'importance de ${jdKeywords.slice(0, 5).join(", ")}. Ce sont des sujets sur lesquels je peux faire le lien entre mon expérience actuelle et les responsabilités du poste.`
      : `Ce qui m'attire dans ce poste est l'équilibre entre expertise technique, coordination et impact concret sur le développement de produits de santé.`,
    "",
    `Je serais ravie d'échanger avec vous afin de vous présenter plus en détail la manière dont mon expérience en formulation, développement de procédés et coordination CMC pourrait contribuer à vos projets.`,
    "",
    `Je vous remercie pour votre attention et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`,
    "",
    `Yawen Guo`
  ].join("\n");
}

function buildEnglishLetterDraft({ role, company, cvEvidence, achievements, jdKeywords }) {
  return [
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
    `Yawen Guo`
  ].join("\n");
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

function renderCdmoSearchStrings() {
  renderChips("cdmoSearchStrings", cdmoSearchTemplates);
}

function buildDailyQueries() {
  const must = splitLines($("mustHaveKeywords").value);
  const nice = splitLines($("niceKeywords").value);
  const roleLines = splitLines($("targetRoles").value);
  const baseQueries = [
    '"CMC technical project manager" biopharma',
    '"proposal manager" CDMO biologics',
    '"business development associate" CDMO',
    '"technical sales specialist" life sciences',
    '"field application specialist" bioprocess',
    '"customer success" pharma biotech',
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
    "Role uses your scientific background as an advantage: CDMO, proposal, customer success, technical sales, field application, CMC, MSAT, tech transfer or Drug Product.",
    "Work is in France, hybrid, or realistically commutable.",
    "Salary is high enough for the level: ideally EUR 45k+ in France, or a clear bonus/growth path.",
    "Tasks include technical/customer interface, cross-functional coordination, proposal work, project execution, or external CDMO/CRO coordination.",
    "Avoid roles that are pure retail/call-center work without scientific, healthcare, pharma, biotech, CDMO or technical content."
  ]);
  renderChips("companyWatchlist", companyWatchlist);
  renderJobSuggestions();
}

function renderCdmoSuggestions() {
  const container = $("cdmoSuggestions");
  const jobs = sortJobs(window.cdmoJobSuggestions || []);
  container.innerHTML = "";
  $("cdmoMeta").textContent = `${jobs.length} CDMO suggestions ranked by fit, salary potential, and future growth.`;
  if (!jobs.length) {
    container.innerHTML = "<p>No CDMO suggestions have been added yet.</p>";
    return;
  }
  jobs.forEach((job, index) => {
    container.appendChild(createJobCard(job, index));
  });
}

function createJobCard(job, index) {
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
  return card;
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
  const useFrench = shouldUseFrenchApplication(`${job.location || ""} ${job.company || ""} ${job.title || ""}`);
  $("cvLanguage").value = useFrench ? "fr" : "en";
  $("formattedCvTitle").value = suggestCvTitle(job, useFrench);
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

function suggestCvTitle(job, isFrench = true) {
  const title = (job.title || "").toLowerCase();
  if (title.includes("cmc") || title.includes("project")) {
    return isFrench
      ? "Chargée de Développement Pharmaceutique CMC | Drug Product Biologiques | Coordination CDMO"
      : "CMC Project Manager | Drug Product Biologics | CDMO Coordination";
  }
  if (title.includes("msat") || title.includes("tech transfer")) {
    return isFrench
      ? "Chargée de Développement Pharmaceutique - MSAT / Tech Transfer | Biologiques injectables"
      : "Drug Product / MSAT Scientist | Biologics | Tech Transfer";
  }
  if (title.includes("regulatory")) {
    return isFrench
      ? "Chargée CMC Réglementaire | Biologiques injectables | Drug Product"
      : "Regulatory CMC Associate | Injectable Biologics | Drug Product";
  }
  if (title.includes("proposal")) {
    return isFrench
      ? "Proposal Writer CDMO | Biologics Drug Product | Rédaction technique"
      : "Technical Proposal Writer | CDMO | Biologics Drug Product";
  }
  return isFrench
    ? "Chargée de Développement Pharmaceutique | Produits injectables stériles | Biologiques"
    : "Pharmaceutical Development Scientist | Sterile Injectable Biologics";
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

function copyCdmoSummary() {
  const jobs = window.cdmoJobSuggestions || [];
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
    () => showToast("CDMO shortlist copied"),
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
  const isFrench = language === "fr";
  const job = getSelectedJobContext();
  const roleType = detectRoleType(`${job.title} ${job.fit} ${job.angles} ${job.concern}`);
  const email = (combined.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i) || [""])[0];
  const phone = (combined.match(/(\+33\s?\d(?:[\s.-]?\d{2}){4}|0\d(?:[\s.-]?\d{2}){4})/) || [""])[0];
  const titles = getCvTitles(roleType, isFrench);

  return {
    name: "Yawen GUO",
    title: $("formattedCvTitle").value.trim() || titles.title,
    subtitle: titles.subtitle,
    target: job.title ? `${job.title}${job.company ? ` - ${job.company}` : ""}` : "",
    location: "Lyon, France",
    email,
    phone,
    photo: state.cvPhotoData || "",
    driving: isFrench ? "Permis B" : "Driving licence B",
    languages: isFrench
      ? ["Chinois : langue maternelle", "Français : bilingue", "Anglais : bilingue"]
      : ["Chinese: native", "French: bilingual", "English: bilingual"],
    summary: getTargetedSummary(roleType, isFrench, job),
    fitHighlights: getFitHighlights(roleType, isFrench, job),
    skills: getTargetedSkills(roleType, isFrench),
    experience: getTargetedExperience(roleType, isFrench),
    education: isFrench
      ? ["Master en Biotechnologie et Ingénierie des Biomolécules - ENSTBB, France, 2019-2021", "Licence en Biologie - Henan Agricultural University, Chine, 2015-2019", "Certification ICH E6 (R2) - Good Clinical Practice"]
      : ["MSc Biotechnology and Biomolecule Engineering - ENSTBB, France, 2019-2021", "BSc Biology - Henan Agricultural University, China, 2015-2019", "ICH E6 (R2) Good Clinical Practice certification"],
    publications: [
      "Bayesian optimization and machine learning for vaccine formulation development",
      "Development of nucleic acid isolation by non-silica-based nanoparticles and real-time PCR kit for edible vegetable oil traceability"
    ]
  };
}

function getSelectedJobContext() {
  const notes = $("selectedJobNotes").value || "";
  const lines = notes.split("\n");
  const first = lines[0] || "";
  const split = first.split(" - ");
  return {
    title: $("roleTitle").value.trim() || split[0] || "",
    company: $("companyName").value.trim() || split.slice(1).join(" - ") || "",
    location: getNoteValue(lines, "Location"),
    priority: getNoteValue(lines, "Priority"),
    fitScore: getNoteValue(lines, "Fit score"),
    salary: getNoteValue(lines, "Salary"),
    fit: getNoteValue(lines, "Fit"),
    concern: getNoteValue(lines, "Concern"),
    angles: getNoteValue(lines, "Angles")
  };
}

function getNoteValue(lines, key) {
  const line = lines.find((item) => item.toLowerCase().startsWith(`${key.toLowerCase()}:`));
  return line ? line.slice(key.length + 1).trim() : "";
}

function detectRoleType(text) {
  const value = text.toLowerCase();
  if (value.includes("business development") || value.includes("account manager") || value.includes("technical sales") || value.includes("field application") || value.includes("customer success") || value.includes("commercial")) return "commercial";
  if (value.includes("proposal") || value.includes("writer") || value.includes("client")) return "proposal";
  if (value.includes("regulatory") || value.includes("impa") || value.includes("ctd")) return "regulatory";
  if (value.includes("msat") || value.includes("tech transfer") || value.includes("technology transfer") || value.includes("industrial")) return "msat";
  if (value.includes("cmc") || value.includes("project") || value.includes("pmo")) return "cmc";
  return "formulation";
}

function getCvTitles(type, isFrench) {
  const map = {
    cmc: isFrench
      ? ["Chargée de Développement Pharmaceutique CMC", "Drug Product | Biologiques injectables | CDMO & coordination transverse"]
      : ["CMC Pharmaceutical Development Scientist", "Drug Product | Injectable biologics | CDMO & cross-functional coordination"],
    msat: isFrench
      ? ["Chargée de Développement Pharmaceutique - MSAT / Tech Transfer", "Injectables stériles | Industrialisation | Scale-up"]
      : ["Drug Product / MSAT Scientist", "Sterile injectables | Industrialization | Scale-up"],
    regulatory: isFrench
      ? ["Chargée de Développement Pharmaceutique CMC - Réglementaire", "Drug Product | Documentation CMC | IMP / CTD Module 3"]
      : ["Regulatory CMC Associate - Drug Product", "Injectable biologics | CMC documentation | IMP / CTD Module 3"],
    proposal: isFrench
      ? ["Proposal Writer CDMO - Biologics Drug Product", "Rédaction technique | CMC | Coordination client et équipes scientifiques"]
      : ["Technical Proposal Writer - CDMO Biologics", "Technical writing | CMC | Client and scientific team coordination"],
    commercial: isFrench
      ? ["Technical Sales / Customer Success - Life Sciences & CDMO", "Biotech | Drug Product | Support client scientifique"]
      : ["Technical Sales / Customer Success - Life Sciences & CDMO", "Biotech | Drug Product | Scientific customer support"],
    formulation: isFrench
      ? ["Chargée de Développement Pharmaceutique - Produits injectables", "Formulation & procédés | QbD / DoE | Biologiques"]
      : ["Pharmaceutical Development Scientist - Injectable Products", "Formulation & process | QbD / DoE | Biologics"]
  };
  const [title, subtitle] = map[type] || map.formulation;
  return { title, subtitle };
}

function getTargetedSummary(type, isFrench, job) {
  const targetLine = job.title
    ? (isFrench
      ? `Candidature ciblée pour ${job.title}${job.company ? ` chez ${job.company}` : ""} : mise en avant des expériences les plus proches du besoin du poste.`
      : `Targeted application for ${job.title}${job.company ? ` at ${job.company}` : ""}: strongest matching experience is prioritized.`)
    : "";
  const baseFr = {
    cmc: [
      "Chargée de développement pharmaceutique avec une expérience Drug Product en CDMO et une première expérience de pilotage CMC.",
      "Habituée à coordonner des interfaces formulation, analytique, qualité, production, MSAT et partenaires CDMO/CRO.",
      "Profil adapté aux rôles CMC où il faut comprendre la technique, structurer les informations et suivre les décisions jusqu'à l'exécution."
    ],
    msat: [
      "Scientifique Drug Product spécialisée en injectables stériles, avec une expérience concrète en formulation, procédés, lyophilisation et support au scale-up.",
      "Expérience à l'interface développement, production, QC/MSAT et industrialisation, avec rédaction de documents techniques et troubleshooting.",
      "Profil pertinent pour des rôles MSAT ou tech transfer demandant une bonne compréhension du développement produit et des contraintes de fabrication."
    ],
    regulatory: [
      "Profil CMC Drug Product avec expérience en documentation scientifique, protocoles, rapports, SOP et contribution à des éléments réglementaires.",
      "Compréhension des produits injectables stériles, IMP, change controls, qualité et coordination de partenaires externes.",
      "Positionnement pertinent pour évoluer vers des fonctions Regulatory CMC associate/specialist à partir d'une base technique solide."
    ],
    proposal: [
      "Profil CDMO Biologics combinant développement Drug Product, rédaction technique et coordination transverse.",
      "Expérience dans la structuration d'informations scientifiques complexes pour protocoles, rapports, templates et contenus techniques.",
      "Capacité à faire le lien entre besoins clients, faisabilité technique, ressources et équipes formulation, analytique, production et qualité."
    ],
    commercial: [
      "Profil scientifique CDMO/Biologics pouvant évoluer vers des fonctions commerciales ou support client à forte composante technique.",
      "Capacité à comprendre les besoins des clients biotech/pharma et à traduire les contraintes formulation, analytique, GMP et CMC en valeur business.",
      "Positionnement pertinent pour technical sales, customer success, field application ou business development lorsque le rôle demande une vraie crédibilité scientifique."
    ],
    formulation: [
      "Scientifique en développement pharmaceutique spécialisée dans les produits injectables stériles et biologiques.",
      "Expérience en formulation liquide et lyophilisée, procédés, stabilité, QbD/DoE, documentation et troubleshooting.",
      "Profil adapté aux rôles de développement Drug Product nécessitant autonomie expérimentale, rigueur documentaire et coordination transverse."
    ]
  };
  const baseEn = {
    cmc: [
      "Pharmaceutical development scientist with Drug Product CDMO experience and first CMC project management exposure.",
      "Used to coordinating formulation, analytical, quality, production, MSAT and CDMO/CRO interfaces.",
      "Relevant for CMC roles requiring technical understanding, structured information and action follow-up."
    ],
    msat: [
      "Drug Product scientist specialized in sterile injectables, with hands-on experience in formulation, process development, lyophilization and scale-up support.",
      "Experience at the interface of development, production, QC/MSAT and industrialization, including technical writing and troubleshooting.",
      "Relevant for MSAT or tech transfer roles requiring strong product/process understanding."
    ],
    regulatory: [
      "Drug Product CMC profile with experience in scientific documentation, protocols, reports, SOPs and regulatory documentation inputs.",
      "Understanding of sterile injectables, IMP, change controls, quality and external partner coordination.",
      "Relevant for Regulatory CMC associate/specialist roles built on a strong technical foundation."
    ],
    proposal: [
      "CDMO Biologics profile combining Drug Product development, technical writing and cross-functional coordination.",
      "Experience structuring complex scientific information for protocols, reports, templates and technical content.",
      "Able to connect client needs, technical feasibility, resources and formulation, analytical, production and quality teams."
    ],
    commercial: [
      "Scientific CDMO/Biologics profile ready to move toward commercial or customer-support roles with strong technical content.",
      "Able to understand biotech/pharma customer needs and translate formulation, analytical, GMP and CMC constraints into business value.",
      "Relevant for technical sales, customer success, field application or business development roles where scientific credibility matters."
    ],
    formulation: [
      "Pharmaceutical development scientist specialized in sterile injectable and biologics drug products.",
      "Experience in liquid and lyophilized formulation, process development, stability, QbD/DoE, documentation and troubleshooting.",
      "Relevant for Drug Product development roles requiring experimental autonomy, documentation rigor and cross-functional coordination."
    ]
  };
  return [targetLine, ...(isFrench ? baseFr[type] : baseEn[type])].filter(Boolean);
}

function getFitHighlights(type, isFrench, job) {
  const roleSpecific = {
    cmc: isFrench
      ? ["Coordination de 18 projets formulation/CMC en environnement CDMO", "Suivi de partenaires CDMO/CRO, devis, budgets et change controls", "Vision Drug Product utile pour challenger les décisions CMC"]
      : ["Coordinated 18 formulation/CMC projects in a CDMO environment", "Followed CDMO/CRO partners, quotes, budgets and change controls", "Drug Product background to challenge CMC decisions"],
    msat: isFrench
      ? ["Support industrialisation, scale-up et transfert de technologie", "Procédés injectables : mixing, filtration, remplissage aseptique, lyophilisation", "Troubleshooting et interface développement-production"]
      : ["Industrialization, scale-up and technology transfer support", "Injectable processes: mixing, filtration, aseptic filling, lyophilization", "Troubleshooting and development-production interface"],
    regulatory: isFrench
      ? ["Documentation CMC : protocoles, SOP, rapports, CTD Module 3", "Expérience IMP, conformité réglementaire et qualité", "Compréhension technique des produits injectables biologiques"]
      : ["CMC documentation: protocols, SOPs, reports, CTD Module 3", "IMP, regulatory compliance and quality exposure", "Technical understanding of injectable biologics"],
    proposal: isFrench
      ? ["Rédaction et structuration d'informations techniques complexes", "Interaction clients et équipes internes en français/anglais", "Compréhension CDMO des besoins, ressources et faisabilité"]
      : ["Writing and structuring complex technical information", "Client and internal team interactions in French/English", "CDMO understanding of needs, resources and feasibility"],
    commercial: isFrench
      ? ["Crédibilité scientifique auprès de clients biotech/pharma", "Compréhension CDMO : formulation, analytique, GMP, faisabilité", "Communication français/anglais et traduction besoin client -> solution technique"]
      : ["Scientific credibility with biotech/pharma customers", "CDMO understanding: formulation, analytical, GMP, feasibility", "French/English communication and translating customer needs into technical solutions"],
    formulation: isFrench
      ? ["6 molécules First-in-Human accompagnées jusqu'à la production GMP", "Formulation liquide et lyophilisée de produits injectables", "QbD/DoE, stabilité, compatibilité et troubleshooting"]
      : ["6 First-in-Human molecules supported up to GMP production", "Liquid and lyophilized formulation of injectable products", "QbD/DoE, stability, compatibility and troubleshooting"]
  };
  const fromJob = job.angles ? job.angles.split(";").map((item) => item.trim()).filter(Boolean).slice(0, 2) : [];
  return [...fromJob, ...(roleSpecific[type] || roleSpecific.formulation)].slice(0, 5);
}

function getTargetedSkills(type, isFrench) {
  const commonFr = [
    "Injectables stériles, biologiques, Drug Product",
    "QbD / ICH Q8 : QTPP, CQA, CPP, CMA, design space",
    "DoE, JMP, Minitab, R, Python, visualisation et outils IA",
    "Analytique : HPLC, DLS, DSC, NanoDSF, CE-SDS, TFF, MFI"
  ];
  const commonEn = [
    "Sterile injectables, biologics, Drug Product",
    "QbD / ICH Q8: QTPP, CQA, CPP, CMA, design space",
    "DoE, JMP, Minitab, R, Python, data visualization and AI-based tools",
    "Analytics: HPLC, DLS, DSC, NanoDSF, CE-SDS, TFF, MFI"
  ];
  const specific = {
    cmc: isFrench
      ? ["Coordination CMC, QC, MSAT, production, qualité, CDMO/CRO", "IMP, devis, budgets, change controls, suivi d'actions", "Documentation : protocoles, SOP, rapports, CTD Module 3"]
      : ["CMC coordination, QC, MSAT, production, quality, CDMO/CRO", "IMP, quotes, budgets, change controls, action tracking", "Documentation: protocols, SOPs, reports, CTD Module 3"],
    msat: isFrench
      ? ["Scale-up, industrialisation, transfert de technologie", "Procédés : mixing, filtration, remplissage aseptique, lyophilisation", "Troubleshooting, compatibilité, support production"]
      : ["Scale-up, industrialization, technology transfer", "Processes: mixing, filtration, aseptic filling, lyophilization", "Troubleshooting, compatibility, production support"],
    regulatory: isFrench
      ? ["Documentation CMC, IMP, CTD Module 3, conformité qualité", "Change controls, données développement, traçabilité", "Interface réglementaire, qualité, analytique et production"]
      : ["CMC documentation, IMP, CTD Module 3, quality compliance", "Change controls, development data, traceability", "Regulatory, quality, analytical and production interface"],
    proposal: isFrench
      ? ["Rédaction technique : protocoles, rapports, templates, contenus proposals", "Structuration des besoins techniques, ressources et faisabilité", "Communication client en français et anglais"]
      : ["Technical writing: protocols, reports, templates, proposal content", "Structuring technical needs, resources and feasibility", "Client communication in French and English"],
    commercial: isFrench
      ? ["Technical sales, customer success, field application, account management", "Communication client, discovery scientifique, traduction besoin -> solution", "CDMO/biotech services : formulation, analytique, GMP, Drug Product"]
      : ["Technical sales, customer success, field application, account management", "Customer communication, scientific discovery, translating needs into solutions", "CDMO/biotech services: formulation, analytical, GMP, Drug Product"],
    formulation: isFrench
      ? ["Formulation liquide et lyophilisée, stabilité, compatibilité", "Procédés : mixing, filtration, remplissage aseptique, lyophilisation", "Troubleshooting formulation/procédés et support développement"]
      : ["Liquid and lyophilized formulation, stability, compatibility", "Processes: mixing, filtration, aseptic filling, lyophilization", "Formulation/process troubleshooting and development support"]
  };
  return [...(specific[type] || specific.formulation), ...(isFrench ? commonFr : commonEn)];
}

function getTargetedExperience(type, isFrench) {
  const fr = {
    aurobac: {
      role: "CMC Project Manager",
      company: "Aurobac - Lyon, France",
      dates: "Juin 2025 - Septembre 2025",
      bullets: [
        "Pilotage des activités CMC pour un programme de peptides antimicrobiens, incluant des formulations liposomales.",
        "Coordination et évaluation de partenaires CDMO/CRO pour la formulation et le développement analytique.",
        "Gestion des IMP cliniques : reconditionnement, approvisionnement, conformité réglementaire et qualité.",
        "Suivi des devis, budgets, change controls et décisions techniques liées à la faisabilité projet.",
        "Contribution à la stratégie de développement pharmaceutique en environnement CMC."
      ]
    },
    catalent: {
      role: "Chargée de Développement Pharmaceutique - Biologics / Drug Product",
      company: "Catalent CDMO - Limoges, France",
      dates: "Juillet 2022 - Juin 2025",
      bullets: [
        "Développement de formulations injectables liquides et lyophilisées jusqu'à la production GMP pour 6 molécules First-in-Human.",
        "Coordination d'environ 18 projets de formulation/CMC avec QC, MSAT, production, analytique, qualité et PM.",
        "Conception et réalisation d'études de formulation et procédés : mixing, filtration, remplissage aseptique, lyophilisation, compatibilité et troubleshooting.",
        "Support à l'industrialisation, au scale-up, au transfert de technologie et à la résolution de problématiques techniques.",
        "Rédaction de protocoles, SOP, rapports, labbooks, méthodes analytiques, templates et contenus CMC.",
        "Interaction clients en français et anglais sur l'avancement, les résultats et les décisions techniques."
      ]
    },
    sanofi: {
      role: "Stage de fin d'études - Développement de formulation",
      company: "Sanofi Pasteur - Marcy-l'Etoile, France",
      dates: "Mars 2021 - Août 2021",
      bullets: [
        "Planification et réalisation d'études de formulation/procédés pour vaccins selon une approche QbD/ICH Q8.",
        "Application de DoE pour optimiser le design expérimental, analyser la stabilité et soutenir la prise de décision."
      ]
    }
  };
  const en = {
    aurobac: {
      role: "CMC Project Manager",
      company: "Aurobac - Lyon, France",
      dates: "June 2025 - September 2025",
      bullets: [
        "Led CMC activities for an antimicrobial peptide program, including liposomal formulations.",
        "Coordinated and evaluated CDMO/CRO partners for formulation and analytical development.",
        "Managed clinical IMP activities: repackaging, supply, regulatory and quality compliance.",
        "Tracked quotes, budgets, change controls and technical feasibility decisions.",
        "Contributed to pharmaceutical development strategy in a CMC environment."
      ]
    },
    catalent: {
      role: "Pharmaceutical Development Scientist - Biologics / Drug Product",
      company: "Catalent CDMO - Limoges, France",
      dates: "July 2022 - June 2025",
      bullets: [
        "Developed liquid and lyophilized injectable formulations up to GMP production for 6 First-in-Human molecules.",
        "Coordinated around 18 formulation/CMC projects with QC, MSAT, production, analytical, quality and PM teams.",
        "Designed and executed formulation/process studies: mixing, filtration, aseptic filling, lyophilization, compatibility and troubleshooting.",
        "Supported industrialization, scale-up, technology transfer and technical issue resolution.",
        "Wrote protocols, SOPs, reports, labbooks, analytical methods, templates and CMC content.",
        "Interacted with clients in French and English on progress, results and technical decisions."
      ]
    },
    sanofi: {
      role: "Final Internship - Formulation Development",
      company: "Sanofi Pasteur - Marcy-l'Etoile, France",
      dates: "March 2021 - August 2021",
      bullets: [
        "Planned and performed vaccine formulation/process studies with a QbD/ICH Q8 approach.",
        "Applied DoE to optimize experimental design, analyze stability and support decision-making."
      ]
    }
  };
  const data = isFrench ? fr : en;
  const order = type === "cmc" || type === "regulatory" || type === "proposal" || type === "commercial"
    ? ["aurobac", "catalent", "sanofi"]
    : ["catalent", "aurobac", "sanofi"];
  return order.map((key) => ({ ...data[key], bullets: prioritizeBullets(data[key].bullets, type) }));
}

function prioritizeBullets(bullets, type) {
  const terms = {
    cmc: ["cmc", "coordination", "cdmo", "cro", "imp", "budgets", "change", "documentation"],
    msat: ["industrialisation", "industrialization", "scale-up", "transfert", "transfer", "production", "troubleshooting", "procédés", "process"],
    regulatory: ["imp", "réglementaire", "regulatory", "ctd", "documentation", "sop", "qualité", "quality", "change"],
    proposal: ["clients", "rédaction", "writing", "templates", "contenus", "content", "faisabilité", "feasibility"],
    commercial: ["clients", "customer", "communication", "faisabilité", "feasibility", "cdmo", "cro", "technical", "anglais", "english"],
    formulation: ["formulation", "injectables", "lyophilisées", "lyophilized", "stabilité", "stability", "doe", "qbd"]
  }[type] || [];
  return [...bullets].sort((a, b) => scoreText(b, terms) - scoreText(a, terms)).slice(0, type === "formulation" ? 5 : 4);
}

function scoreText(text, terms) {
  const lower = text.toLowerCase();
  return terms.reduce((score, term) => score + (lower.includes(term) ? 1 : 0), 0);
}

function generateFormattedCv() {
  const cv = buildCvProfile();
  const isFrench = ($("cvLanguage").value || "fr") === "fr";
  $("formattedCvPreview").innerHTML = `
    <aside class="cv-sidebar">
      <div class="cv-photo ${cv.photo ? "" : "empty"}">
        ${cv.photo ? `<img src="${cv.photo}" alt="Photo de Yawen Guo">` : `<span>${isFrench ? "Photo" : "Photo"}</span>`}
      </div>
      <div class="cv-contact">
        <h2>${isFrench ? "Contact" : "Contact"}</h2>
        <p>${escapeHtml(cv.location)}</p>
        ${cv.email ? `<p>${escapeHtml(cv.email)}</p>` : ""}
        ${cv.phone ? `<p>${escapeHtml(cv.phone)}</p>` : ""}
        <p>${escapeHtml(cv.driving)}</p>
      </div>
      <section>
        <h2>${isFrench ? "Langues" : "Languages"}</h2>
        <ul>${cv.languages.map((language) => `<li>${escapeHtml(language)}</li>`).join("")}</ul>
      </section>
      <section>
        <h2>${isFrench ? "Formation" : "Education"}</h2>
        <ul>${cv.education.map((education) => `<li>${escapeHtml(education)}</li>`).join("")}</ul>
      </section>
      <section>
        <h2>${isFrench ? "Compétences" : "Skills"}</h2>
        <ul>${cv.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join("")}</ul>
      </section>
    </aside>
    <main class="cv-main">
      <header class="cv-hero">
        <p class="cv-name">${escapeHtml(cv.name)}</p>
        <h1>${escapeHtml(cv.title)}</h1>
        <p>${escapeHtml(cv.subtitle)}</p>
      </header>
      ${cv.target ? `
        <section class="cv-target">
          <h2>${isFrench ? "Candidature ciblée" : "Target application"}</h2>
          <p>${escapeHtml(cv.target)}</p>
        </section>
      ` : ""}
      <section>
        <h2>${isFrench ? "Résumé" : "Profile"}</h2>
        ${cv.summary.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
      </section>
      <section>
        <h2>${isFrench ? "Atouts pour ce poste" : "Fit for this role"}</h2>
        <ul>${cv.fitHighlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
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

function handleCvPhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    showToast("Please choose an image file");
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    state.cvPhotoData = reader.result;
    localStorage.setItem("franceBiopharmaJobStudio", JSON.stringify(state));
    updatePhotoStatus(file.name);
    generateFormattedCv();
    showToast("Photo added to CV");
  };
  reader.onerror = () => showToast("Photo upload failed");
  reader.readAsDataURL(file);
}

function removeCvPhoto() {
  state.cvPhotoData = "";
  localStorage.setItem("franceBiopharmaJobStudio", JSON.stringify(state));
  const upload = $("cvPhotoUpload");
  if (upload) upload.value = "";
  updatePhotoStatus();
  generateFormattedCv();
  showToast("Photo removed");
}

function updatePhotoStatus(name = "") {
  const status = $("cvPhotoStatus");
  if (!status) return;
  status.textContent = state.cvPhotoData
    ? `Photo loaded${name ? `: ${name}` : ""}. Stored only in this browser.`
    : "Optional. Stored only in this browser.";
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
$("cvPhotoUpload").addEventListener("change", handleCvPhotoUpload);
$("removeCvPhoto").addEventListener("click", removeCvPhoto);
$("addTracker").addEventListener("click", addTrackerItem);
$("copyJobSummary").addEventListener("click", copyJobSummary);
$("copyCdmoSummary").addEventListener("click", copyCdmoSummary);
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
fields.forEach((field) => {
  const element = $(field);
  if (element) element.addEventListener("change", saveState);
});

loadState();
renderTracker();
renderTrackerBoard();
renderSearchStrings();
renderCdmoSearchStrings();
renderDailyFinder();
renderCdmoSuggestions();
renderWorldwideSuggestions();
renderWorldwideSearchStrings();
generateFormattedCv();
analyzeJob();
