# Firebase Headless CMS Implementation TODO

Purpose: Migrate `icd-react-clone` from hardcoded content to Firebase-backed CMS while keeping React as the frontend renderer, with a separate admin portal app for content operations.

How to use this file:
- Work top-to-bottom.
- Do not start a phase until all blockers in the previous phase are cleared.
- Mark items with `[x]` only after passing the listed verification checks.

## Status Legend
- `[ ]` Not started
- `[~]` In progress
- `[x]` Completed
- `BLOCKED:` Add reason inline when blocked

---

## Phase 0: Baseline and Safety
Goal: Capture current behavior before CMS migration.

- [ ] Create branch `feat/firebase-cms`.
- [ ] Decide admin architecture:
  - Separate repository (recommended), or
  - Separate app folder/workspace with independent deploy.
- [ ] Define admin portal URL (example: `admin.yourdomain.com`).
- [ ] Define CORS/Authorized domains for admin and public apps.
- [ ] Confirm app builds and runs before any CMS changes.
- [ ] Capture current navigation/content snapshots (for parity checks).
- [ ] Document rollback strategy (feature flag or fallback to static data).

Verification:
- `npm run build` passes.
- Main pages render with no runtime errors.

---

## Phase 1: Firebase Project Setup
Goal: Provision Firebase services and local tooling.

- [ ] Create Firebase project (prod + optional staging).
- [ ] Enable Firebase Auth.
- [ ] Enable Firestore.
- [ ] Enable Storage.
- [ ] Enable Cloud Functions.
- [ ] Set up Firebase Hosting target (if hosting on Firebase).
- [ ] Add Firebase SDK packages to frontend.
- [ ] Add `.env` variables for Firebase config.
- [ ] Initialize `firebase.json`, `.firebaserc`, Firestore/Storage rules files, and Functions scaffold.

Verification:
- `firebase emulators:start` works locally.
- Frontend can initialize Firebase without warnings.

---

## Phase 2: Firestore Content Model
Goal: Define CMS schema and seed starter documents.

### Collections and docs
- [ ] `siteSettings/global`
- [ ] `navigation/main`
- [ ] `pages/{slug}`
- [ ] `sections/{id}`
- [ ] `impactStories/{id}`
- [ ] `programs/{id}`
- [ ] `partners/{id}`
- [ ] `media/{id}`

### Required metadata on content docs
- [ ] `status` (`draft` or `published`)
- [ ] `publishedAt`
- [ ] `updatedBy`
- [ ] `locale`

### Documentation
- [ ] Add schema reference markdown with field-level definitions.
- [ ] Add example JSON payloads for each collection.

Verification:
- Seed script inserts valid docs.
- Firestore console shows expected structure and fields.

---

## Phase 3: Security Rules and Roles
Goal: Lock down writes and enforce publish visibility.

- [ ] Implement Firestore rules:
  - Public read only for `status == "published"`.
  - Admin/editor write permissions.
- [ ] Implement Storage rules:
  - Admin/editor upload/delete.
  - Public read policy for published assets.
- [ ] Add custom claims (`admin`, `editor`) flow.
- [ ] Create initial admin user and assign claims.

Verification:
- Unauthenticated write attempts fail.
- Authenticated admin writes succeed.
- Public cannot read draft content.

---

## Phase 4: Content Service Layer in React
Goal: Replace hardcoded content access with Firebase fetchers.

- [ ] Create `src/services/contentService.js` (or `.ts`) with:
  - [ ] `getPageBySlug(slug)`
  - [ ] `getNavigation()`
  - [ ] `getGlobalSettings()`
  - [ ] `getImpactStories()`
- [ ] Add mapping/normalization for Firestore docs.
- [ ] Add error handling and static fallback strategy.
- [ ] Add loading states and empty-state behavior.

Verification:
- Frontend renders content from Firestore in dev.
- If Firestore fails, fallback behavior is predictable.

---

## Phase 5: Incremental Page Migration
Goal: Migrate page content safely in slices.

### Order
- [ ] Migrate `navigation` and `global settings` first.
- [ ] Migrate `HomePage`.
- [ ] Migrate `ImpactPage`.
- [ ] Migrate remaining pages (`About`, `Programs`, `Partners`, `News`, `Contact`, etc.).

### For each page
- [ ] Move static text/data from `src/data/siteData.js` and JSX into Firestore.
- [ ] Update page component to consume service-layer data.
- [ ] Validate content parity against baseline snapshots.

Verification:
- Page-by-page parity checklist completed.
- No significant visual/content regressions.

---

## Phase 6: Separate Admin Portal App
Goal: Enable non-developers to manage content.

- [ ] Scaffold separate admin app (recommended: `icd-admin-portal`).
- [ ] Configure admin app environment variables and Firebase init.
- [ ] Build login with Firebase Auth in admin app.
- [ ] Add route guards in admin app only (no admin routes in public site).
- [ ] Build content editors for:
  - [ ] Hero blocks
  - [ ] Cards/stats/CTA blocks
  - [ ] Navigation items (including nested links)
- [ ] Build media uploader to Storage.
- [ ] Add drag-and-drop ordering for sections/navigation.
- [ ] Add draft/publish toggle controls.
- [ ] Add preview integration:
  - [ ] Admin preview link builder
  - [ ] Public-site preview route (`/preview/:slug`) gated by token/claims
- [ ] Configure separate deployment pipeline for admin portal.

Verification:
- Admin can edit and publish content end-to-end.
- Non-admin cannot access admin portal actions.
- Public app has no exposed admin routes/components.

---

## Phase 7: Publishing Workflow and Functions
Goal: Standardize publish lifecycle.

- [ ] Cloud Function for publish action:
  - [ ] Validate slug uniqueness
  - [ ] Set `publishedAt`
  - [ ] Stamp `updatedBy`
  - [ ] Update `contentVersion`
- [ ] Add optional cache-busting hook when `contentVersion` changes.

Verification:
- Publish operation updates fields consistently.
- Frontend reflects published updates without redeploy.

---

## Phase 8: Caching and Performance
Goal: Reduce latency and read costs.

- [ ] Add client memory/session cache for content reads.
- [ ] Create Firestore indexes for query-heavy paths.
- [ ] Optional: create Function-generated JSON snapshots for high-traffic pages.
- [ ] Add retry/backoff for transient fetch errors.

Verification:
- Improved repeat navigation load times.
- No broken content due to stale cache.

---

## Phase 9: Migration Script and Data Cutover
Goal: Move existing hardcoded data fully into CMS.

- [ ] Write one-time migration script from `siteData.js` + static JSX content.
- [ ] Run migration in staging and validate.
- [ ] Run migration in production.
- [ ] Freeze static content updates in code.
- [ ] Remove obsolete hardcoded data only after parity sign-off.

Verification:
- All production pages pull CMS data.
- Static data file no longer drives content.

---

## Phase 10: QA, Monitoring, and Launch
Goal: Ship safely with visibility.

- [ ] Add smoke tests for critical routes/content fetches.
- [ ] Add error logging (frontend + Functions).
- [ ] Document CMS operational guide (roles, publish steps, rollback).
- [ ] Final launch checklist and sign-off.

Verification:
- Build/deploy pipeline passes.
- No high-severity issues in launch checklist.

---

## Practical File/Code TODO Map
- [ ] `src/lib/firebase.js`: Firebase app/init
- [ ] `src/services/contentService.js`: Firestore readers
- [ ] `src/hooks/useContent.js` (optional): reusable content hook
- [ ] `src/pages/*`: replace static imports with CMS reads
- [ ] `src/data/siteData.js`: phase out after cutover
- [ ] `functions/src/*`: publish hooks/validators
- [ ] `firestore.rules`, `storage.rules`: security
- [ ] `scripts/migrate-content.*`: one-time migration
- [ ] Admin portal repo/app:
  - [ ] `admin/src/lib/firebase.js`
  - [ ] `admin/src/auth/*`
  - [ ] `admin/src/pages/*`
  - [ ] `admin/src/components/editor/*`
  - [ ] `admin/src/services/cmsService.*`

---

## Done Criteria (Project Complete)
- [ ] All public pages render from Firestore content.
- [ ] Admin users can edit, draft, and publish without developer help.
- [ ] Public sees only published content.
- [ ] Media uploads are role-protected and stable.
- [ ] Admin portal is deployed independently and protected by role-based access.
- [ ] Build, deploy, and rollback playbooks are documented.

---

## Execution Notes
- Keep migration incremental, not big-bang.
- Prefer feature flags during page-by-page migration.
- Never delete hardcoded fallback data until parity is signed off.
- Always validate Firestore/Storage rules in emulator before deploy.
