# France Biopharma Job Studio

Open `index.html` in a browser to use the site locally.

## Privacy and Storage

This is a lightweight static site: no server, no database, no package install, and no `node_modules`.

Your uploaded/pasted CV is saved only in your browser's local storage, not inside this project folder. The `.gitignore` is set up to avoid committing CVs, PDFs, DOCX files, secrets, logs, and heavy dependency folders by accident.

Before pushing to GitHub, check that the repo contains only the site files: `index.html`, `styles.css`, `app.js`, `daily-jobs.js`, `worldwide-jobs.js`, `README.md`, and `.gitignore`.

## Suggested workflow

1. Fill the Profile tab with your real projects, numbers, tools, and examples.
2. Open Jobs today each morning and review the recommended list.
3. Paste one interesting job description into Job fit and click Analyze JD.
4. Add the company and role title in CV & letter.
5. Click Generate drafts.
6. Edit the draft so it stays truthful, specific, and personal before sending.

## Daily automation

This Codex thread now has a daily 09:00 Europe/Paris automation named `Daily France biopharma job search`.
It will look for promising France-based roles that match your profile and report them in this conversation with:

- job title, company, location, and link
- why the role fits your experience
- possible concerns
- application angles to use in your CV and motivation letter

The local site also has a daily 08:45 Europe/Paris automation named `Update site job suggestions`.
It updates `daily-jobs.js`, which powers the visible Jobs today list after you refresh the browser.

The search is intentionally broader than exact scientist titles. It now includes higher-growth paths such as CMC project management, MSAT, tech transfer, regulatory CMC, process validation, drug product development, and pharma PMO roles.

There is also a separate `Worldwide fit` tab. It is powered by `worldwide-jobs.js` and a daily 08:50 Europe/Paris automation named `Update worldwide job suggestions`. This list is only for strong opportunities outside France, including Europe, remote roles, and selected high-salary global benchmarks.

The `CDMO jobs` tab is dedicated to CDMO/CDMO-adjacent opportunities, including proposal management, technical writing, client project management, business development, technical sales, field application, customer success, QA project management, CMC, MSAT, and tech transfer. This section is intentionally broader than scientist roles and screens for salary/growth potential.

Each recommended job card includes a salary line. When a posting/source shows pay, the card says `Source-listed`; otherwise it gives an `Estimated` range based on role, country, seniority, and market level. Treat estimates as a screening guide, then verify during recruiter contact.

Jobs are ranked from highest to lowest fit score. Click `Prepare application` on any job card to send that job's title, company, salary, fit notes, and application angles into the CV & letter tab. Paste your real CV into the Profile tab first for stronger drafts based on your actual experience.

You can also use the `Application source` box on Jobs today: upload an old CV and write the relevant experience once, then click `Prepare application` on any recommendation. The generator will use the job data already stored on the card, so you do not need to paste the JD manually.

The CV profile and motivation letter generator is written in a more human style: less generic, less polished-AI language, and more focused on concrete experience and realistic motivation.

Click `Track job` on any recommendation to add it directly to the Tracker board. The board stores stage, contact email, last email date, next follow-up date, and email exchange notes. Use `Draft follow-up` to add a simple follow-up email draft to the exchange log.

The daily search automations now look beyond job boards: official company career pages, ATS pages, biotech/pharma career pages, recruiter/headhunter sites, consulting recruitment pages, and then job boards.

## What to improve first

Replace every placeholder such as `X formulation/process studies` with real evidence:

- number of mAb projects or studies supported
- formulation screens, buffers, excipients, or stability time points reviewed
- process development, fill-finish, or tech transfer activities
- protocols, reports, presentations, or CMC documents written
- teams coordinated during your CMC project management experience

The strongest French applications will show both technical biologics depth and clear collaboration across CMC, analytical, quality, manufacturing, and regulatory teams.
