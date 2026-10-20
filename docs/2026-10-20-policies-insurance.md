# October 20, 2026 website maintenance

## Production baseline

Verified www.amporalsurgery.com belongs to Vercel project amp-oral-surgery (prj_3POgT8E3kUT9Yk7AexMYXcuQs2Zg), Rockmart team. Original deployment: dpl_Ei8jN4BUByxYHaq6T3ZwQ68DpjcC. Git remote: rockmartgh/amp-oral-surgery.

Production was deployed through the CLI with uncommitted source changes. The recovered baseline includes the API email handlers, spam protection, contact form fixes, and navigation updates. Its locally built index-Br64PWUQ.js is byte-identical to the public production bundle. CSS also matches the public index-ca-sTn9q.css filename. These baseline changes are recorded separately from this maintenance work.

## Recovered policy sources

- Privacy: https://web.archive.org/web/20240528073540id_/https://amporalsurgery.com/privacy-policy/
- Terms: https://web.archive.org/web/20240528075442id_/https://amporalsurgery.com/terms-of-service/

Both original policies state March 6, 2024. Website policy content was retained, including retention, disclosure, security, children, third-party links, and website terms. Contact email updated from the archived info@amporalsurgery.com to current public info@ampomfs.com. Archive scripts, tracking code, styles, layout, and footer were excluded. Archived content was sanitized to approved HTML tags and links before storing as static JSON. No runtime user content is inserted as HTML.

## SMS additions

Compared directly with the official Weave privacy and terms templates on October 20, 2026:

- https://www.weavehelp.com/weavehelp/article/10DLC-privacy-policy-template
- https://www.weavehelp.com/weavehelp/article/10DLC-terms-and-conditions-template

Added SMS-specific sections, effective October 20, covering number and consent collection, use limited to consented communications, no third-party/affiliate marketing sharing of SMS numbers or consent, STOP, HELP, current support contacts, reasonable safeguards, variable frequency, carrier rates and delivery limitations, and authorized phone user / age 18 condition. SMS privacy protections expressly control over conflicting general website sharing or communications provisions.

No numeric frequency, marketing permission, or enrollment process was invented. AMP's actual Weave campaign purposes, frequency settings, and consent workflow were not available from the repository or source emails. Wording therefore limits communications to the purposes disclosed and agreed to at consent and states that frequency varies. AMP/Weave must ensure the registration and actual consent flow match the program before resubmitting. Publication does not establish carrier approval.

No website SMS enrollment form exists. Existing appointment and referral forms remain unchanged and do not acquire SMS consent through these terms. Policy links remain in the shared footer. Historical /privacy-policy and /terms-of-service paths redirect to the restored /privacy and /terms routes, with /terms-and-conditions covered as well.

## Insurance source

Lenneia Batiste's October 19 email, Add insurances, message 1a154c9a05c0121d. Original PNG: 0D2CC01A-62E0-4C4A-B896-8E4E6F669FF3.PNG. The handoff list was visually verified against this attachment. Added 20 PPO/dental plans and a separate 2-plan Medicare list as accessible text, retaining all existing billing and financing content and adding a benefits-verification clarification.

## Checks

- Production baseline JavaScript byte comparison passed.
- Complete workspace TypeScript check passed after building referenced libraries. A local-only root @types/node link was needed for the repository's existing root build setup.
- Frontend production build passed. Existing source-map notices and bundle-size warnings remain.
- Local builds required Mac native dependencies omitted by existing Linux-oriented dependency overrides. These were installed locally; repository dependency configuration and lockfile remain unchanged.
- Browser checks of substantive /privacy and /terms text, policy cross-links, and 20 dental plus 2 Medicare entries passed.
- Desktop and 390px mobile layouts inspected, with no horizontal overflow on new sections.
- Appointment and referral forms and their honeypots inspected in browser. Existing handlers passed local tests for validation, honeypots, blank optional fields, and email dispatch using a mocked transport. No email was sent.
- Existing live API routes returned 405 to GET requests, confirming functions were reached rather than SPA fallback. No live form submission was made.

Also replaced the public site metadata placeholder that still said to update the Replit description.
