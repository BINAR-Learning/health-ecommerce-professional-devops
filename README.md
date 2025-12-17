# komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops

> **Professional DevOps Pipeline dengan GitHub Actions, API Documentation & Deployment**

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-v4-blue)](https://github.com/features/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-green)](https://nodejs.org/)
[![Swagger](https://img.shields.io/badge/Swagger-3.1-green)](https://swagger.io/)
[![Codecov](https://img.shields.io/badge/Codecov-integrated-brightgreen)](https://codecov.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Complete DevOps pipeline dengan Git workflow, CI/CD automation, API documentation, dan production deployment untuk Health E-Commerce.

---

## Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops/
├── README.md (Ini file yang kamu baca)
├── starter-project/     #  Basic templates (dengan TODO)
│   ├── README.md
│   ├── .github/workflows/
│   │   └── ci-template.yml      #  TODO: Complete workflow
│   ├── docs/
│   │   ├── swagger-template.yaml  #  TODO: Document endpoints
│   │   └── pr-template.md         #  PR template (ready!)
│   └── package.json
└── finished-project/    #  Complete DevOps setup!
    ├── README.md
    ├── .github/workflows/
    │   ├── health-ecommerce-ci.yml      #  CI pipeline (7 jobs!)
    │   └── deploy-production.yml        #  Auto deployment!
    ├── docs/
    │   ├── Health-Ecommerce-Complete-API.postman_collection.json  #  13 endpoints!
    │   └── swagger-example.yaml         #  OpenAPI spec
    ├── .commitlintrc.js                 #  Commit message validation
    ├── .gitignore                       #  Git ignore rules
    └── package.json                     #  Husky, ESLint, Prettier
```

**Pilih mana?**

- **Starter** - Untuk **practice DevOps setup** (RECOMMENDED!)
- **Finished** - Untuk **reference** complete workflows

---

## Quick Start (Untuk Newbie)

### Prerequisites

Sebelum mulai, pastikan:

- **Health E-Commerce project** sudah complete
- Backend Modul 5 (Final Backend dari Intermediate Program)
- Frontend Modul 3 (Final Frontend dari Intermediate Program)
- Common Modul 1 (Testing Suite)
- **GitHub account** (untuk workflows)
- **Git installed** locally
- **MongoDB accessible** (untuk testing dan development)

---

### WAJIB: Setup Backend dan Frontend Terlebih Dahulu

PENTING: DevOps workflows ini memerlukan backend final dari Modul 5 dan frontend final dari Modul 3 yang sudah complete dan running. Pastikan keduanya running sebelum menjalankan CI/CD workflows.

**Terminal 1: Setup dan Start Backend (Modul 5)**

```bash
# 1. Navigate ke Backend Modul 5 (Final Backend Project)
cd ../../backend/health-ecommerce-external-integration/finished-project

# 2. Install dependencies (jika belum)
npm install

# 3. Setup .env file dengan API keys yang diperlukan:
# Buat file .env di folder finished-project backend
# Isi dengan:
# PORT=5000
# MONGODB_URI=mongodb://localhost:27017/health_ecommerce
# JWT_SECRET=your_jwt_secret_key
# GEMINI_API_KEY=your_google_gemini_api_key
# MIDTRANS_SERVER_KEY=your_midtrans_server_key
# MIDTRANS_CLIENT_KEY=your_midtrans_client_key
# CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
# CLOUDINARY_API_KEY=your_cloudinary_api_key
# CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# 4. Pastikan MongoDB running
# PENTING: MongoDB harus running sebelum menjalankan backend dan tests
#
# Opsi A (RECOMMENDED): Menggunakan MongoDB Compass atau MongoDB Atlas
# - Buka MongoDB Compass
# - Connect ke database: mongodb://localhost:27017
# - Jika berhasil connect, berarti MongoDB sudah running
# - Atau gunakan connection string dari MongoDB Atlas jika menggunakan cloud database
#
# Opsi B: Menggunakan MongoDB Service (Windows Service / macOS Service)
# - Pastikan MongoDB service sudah running di system services
# - Windows: Check Services app, cari "MongoDB"
# - macOS: Check Activity Monitor atau system preferences
#
# Opsi C: Menggunakan mongod command (jika opsi A dan B tidak tersedia)
# - Buka terminal baru
# - Jalankan: mongod
# - Pastikan MongoDB service running
#
# CATATAN: Jika mongod tidak jalan di local, tidak perlu dipaksakan
# Gunakan MongoDB Compass untuk cek apakah database sudah accessible
# Atau gunakan MongoDB Atlas (cloud) sebagai alternatif

# 5. Seed database dengan sample data
npm run seed

# 6. Start backend server (keep running di terminal ini!)
npm run dev

# Backend akan running di: http://localhost:5000
# Pastikan backend URL ini sama dengan BASE_URL di testing .env
```

**VERIFIKASI BACKEND:**

```bash
# Test backend health endpoint
curl http://localhost:5000/health
# Should return: {"success":true,"message":"Server is running"}

# Atau buka di browser: http://localhost:5000/health
```

**Terminal 2: Setup dan Start Frontend (Modul 3)**

```bash
# 1. Navigate ke Frontend Modul 3 (Final Frontend Project)
cd ../../frontend/health-ecommerce-production-uiux/finished-project

# 2. Install dependencies (jika belum)
npm install

# 3. Setup .env file:
# Buat file .env di folder finished-project frontend
# Isi dengan:
# VITE_API_URL=http://localhost:5000

# PENTING: Pastikan VITE_API_URL sama dengan backend URL yang running!
# Jika backend running di http://localhost:5000, maka:
# VITE_API_URL=http://localhost:5000

# 4. Start frontend server (keep running di terminal ini!)
npm run dev

# Frontend akan running di: http://localhost:3000
```

**VERIFIKASI FRONTEND:**

```bash
# Buka browser: http://localhost:3000
# Frontend harus load dan bisa connect ke backend
# Test: Login atau browse products untuk verify API connection
```

**PENTING: URL Consistency**

- Backend .env: `PORT=5000` - Backend running di `http://localhost:5000`
- Frontend .env: `VITE_API_URL=http://localhost:5000` - Frontend connect ke `http://localhost:5000`
- Testing .env: `BASE_URL=http://localhost:5000` - Tests hit `http://localhost:5000`
- Semua URL harus konsisten!

**Jika Backend atau Frontend tidak running:**

- CI/CD workflows akan fail karena tidak bisa test
- Pastikan kedua service running sebelum push ke GitHub
- Atau setup GitHub Actions dengan service containers untuk automated testing

---

---

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops.git

# 2. Masuk ke folder repository
cd komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops

# 3. Masuk ke starter-project
cd starter-project

# 4. Explore templates
ls -la .github/workflows/    # CI/CD templates
ls -la docs/                 # Documentation templates

# 5. Copy ke your Health E-Commerce project
cp -r .github ../../../your-project-root/
cp -r docs ../../../your-project-root/

# 6. Complete TODOs in workflow files!
```

---

### Option 2: Lihat Complete DevOps Implementation

```bash
# 1. Clone repository (jika belum)
git clone https://github.com/your-username/komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops.git

# 2. Masuk ke folder repository
cd komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops

# 3. Masuk ke finished-project
cd finished-project

# 4. Explore complete workflows
cat .github/workflows/health-ecommerce-ci.yml
cat .github/workflows/deploy-production.yml

# 5. Import Postman collection
# File: docs/Health-Ecommerce-Complete-API.postman_collection.json
# Open Postman → Import → Select file

# 6. Copy to your project
cp -r .github ../../../your-health-ecommerce-root/
cp -r docs ../../../your-health-ecommerce-root/
cp .commitlintrc.js ../../../your-health-ecommerce-root/

# 7. Setup Git hooks
cd ../../../your-health-ecommerce-root/
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

# 8. Push & watch GitHub Actions run!
git add .
git commit -m "ci: add GitHub Actions workflows"
git push origin main
```

---

## Apa yang Akan Kamu Pelajari?

**Common Modul 2** adalah **module terakhir** yang complete seluruh Intermediate Program!

### Konsep yang Dipelajari:

- **Git Branching** - Git Flow & GitHub Flow strategies
- **Pull Requests** - Effective PR descriptions & reviews
- **GitHub Actions** - CI/CD automation pipelines
- **Swagger/OpenAPI** - Professional API documentation
- **Postman Collections** - API testing & sharing
- **Code Quality** - ESLint, Prettier, commitlint
- **Deployment** - Automated deploy to Render & Vercel

### Apa yang Disetup:

**GitHub Actions Workflows:**

- CI Pipeline (7 jobs: lint, test backend, test frontend, integration, E2E, security, build)
- Deploy Pipeline (auto deploy on merge to main)

**API Documentation:**

- Postman collection (13 endpoints)
- Swagger/OpenAPI spec (complete)

**Code Quality:**

- Conventional commits enforced
- PR templates
- Branch protection rules

**Total:** Complete professional workflow!

---

## Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── .github/workflows/
│   └── ci-template.yml        #  TODO: Complete CI jobs
├── docs/
│   ├── swagger-template.yaml  #  TODO: Document endpoints
│   └── pr-template.md         #  PR template (ready!)
└── package.json               #  TODO: Add husky, commitlint
```

**TODOs:**

- [ ] Complete CI workflow dengan test jobs
- [ ] Add deployment workflow
- [ ] Complete Swagger specification
- [ ] Export Postman collection
- [ ] Setup commitlint hooks

---

## Struktur Finished Project

```
finished-project/
├── README.md              # Complete DevOps guide
├── .github/workflows/
│   ├── health-ecommerce-ci.yml      #  Complete CI (7 jobs!)
│   └── deploy-production.yml        #  Auto deployment!
├── docs/
│   ├── Health-Ecommerce-Complete-API.postman_collection.json  #  13 endpoints!
│   └── swagger-example.yaml         #  OpenAPI 3.1 spec
├── .commitlintrc.js                 #  Conventional commits
├── .gitignore                       #  Ignore rules
├── package.json                     #  Husky, ESLint, Prettier
└── README.md
```

**All implemented:**

- GitHub Actions CI/CD (7 jobs)
- Postman collection (13 endpoints)
- Swagger documentation (complete)
- Commit message validation
- Code quality tools
- Automated deployment

---

## GitHub Actions Workflows

### CI Pipeline (health-ecommerce-ci.yml)

**Triggers:** Push to main/develop, Pull Requests

**Jobs:**

```
1. Lint - ESLint + Prettier check
2. Test Backend - Jest dengan MongoDB service
3. Test Frontend - Build verification
4. Integration Tests - Supertest API tests
5. E2E Tests - Playwright full flow
6. Security Scan - npm audit + Snyk
7. Build - Production build check
```

**Coverage Upload:** Codecov integration

---

### Deploy Pipeline (deploy-production.yml)

**Triggers:** Push to main

**Jobs:**

```
1. Deploy Backend to Render.com
2. Deploy Frontend to Vercel
3. Notify Team via Slack (optional)
```

---

## API Documentation

### Postman Collection

**File:** `docs/Health-Ecommerce-Complete-API.postman_collection.json`

**Includes:**

```
Health E-Commerce - Complete API
├── Health Check (1 request)
├── Authentication/ (3 requests)
│   ├── Register User
│   ├── Login User (saves token!)
│   └── Get Profile
├── Products/ (4 requests)
│   ├── Get All Products
│   ├── Get by Category
│   ├── Search Products
│   └── Get Product by ID
└── External Integrations/ (3 requests)
    ├── AI Chatbot (Google Gemini)
    ├── Create Payment (Midtrans)
    └── Get Kemenkes Facilities
```

**Total:** 13 pre-configured requests!

**Import Steps:**

```
1. Open Postman
2. Click Import
3. Select: Health-Ecommerce-Complete-API.postman_collection.json
4. Set environment variable: base_url = http://localhost:5000
5. Run collection!
```

---

### Swagger/OpenAPI

**Access:**

```
http://localhost:5000/api-docs
```

**Features:**

- Interactive API explorer
- Try-it-out untuk all endpoints
- Request/response examples
- Schema definitions
- Authentication support

---

## Git Workflow

### Git Flow Example

```bash
# Start new feature
git checkout develop
git checkout -b feature/ai-recommendations

# Work & commit (conventional!)
git add .
git commit -m "feat(ai): add product recommendations"

# Push
git push origin feature/ai-recommendations

# Create PR on GitHub
# GitHub Actions automatically:
#    - Runs all tests
#    - Checks code quality
#    - Shows results in PR

# After review & approval, merge
# If main branch:
#    - Automatically deploys to production!
```

---

### Conventional Commits

**Format:**

```
<type>(<scope>): <description>
```

**Examples:**

```bash
#  Good commits
git commit -m "feat(products): add category filter"
git commit -m "fix(auth): resolve JWT expiration bug"
git commit -m "docs(api): update Swagger spec"
git commit -m "test(payment): add Midtrans integration tests"

#  Bad commits (rejected by commitlint!)
git commit -m "fix bug"
git commit -m "update code"
git commit -m "WIP"
```

**Types:** feat, fix, docs, style, refactor, test, chore, perf, ci, revert

---

## Hubungan dengan Modul Lain

**Dari Backend Modul 3:**

- Swagger YAML untuk dokumentasi

**Dari Common Modul 1:**

- Tests to automate in CI/CD

**Common Modul 2 (This!)** - Professional Workflow

- GitHub Actions automation
- Git branching strategies
- API documentation complete
- Deployment automation
- Code quality gates

**Ke Final Project:**

- → Production deployment
- → Team collaboration patterns
- → Professional standards

**Complete professional development workflow!**

---

## PENTING: GitHub Actions Setup - WAJIB DIBACA!

### GitHub Actions Hanya Berjalan Jika Workflow Files Ada di ROOT Repository

**PENTING:** GitHub Actions **HANYA** akan detect dan menjalankan workflow files yang berada di **ROOT repository**, bukan di subfolder!

**Struktur yang BENAR untuk GitHub Actions:**

```
your-repository-root/          <- ROOT repository (ini yang di-push ke GitHub)
├── .github/
│   └── workflows/             <- Workflow files HARUS di sini (di root!)
│       ├── health-ecommerce-ci.yml
│       ├── deploy-production.yml
│       └── test-workflow.yml
├── README.md
├── package.json
└── ... (files lainnya)
```

**Struktur yang SALAH (tidak akan jalan):**

```
your-repository-root/
├── finished-project/
│   ├── .github/               <- SALAH! Workflow di subfolder tidak akan jalan
│   │   └── workflows/
│   │       └── *.yml
│   └── ...
└── ...
```

### Cara Setup GitHub Actions yang Benar

**Jika finished-project adalah repository terpisah:**

1. **Copy workflow files ke root finished-project:**

```bash
# Masuk ke finished-project
cd finished-project

# Pastikan .github/workflows/ ada di root finished-project
ls -la .github/workflows/
# Harus ada: health-ecommerce-ci.yml, deploy-production.yml, test-workflow.yml

# Jika belum ada, copy dari folder lain atau buat manual
mkdir -p .github/workflows
# Copy workflow files ke .github/workflows/
```

2. **Commit dan push ke GitHub:**

```bash
# Pastikan workflow files ter-commit
git add .github/workflows/
git commit -m "ci: add GitHub Actions workflows"
git push origin main

# Setelah push, check GitHub Actions tab
# Repository → Actions → Harus ada workflow runs!
```

**Jika ini adalah monorepo (multiple projects dalam 1 repo):**

1. **Workflow files harus di root repository:**

```bash
# Di root repository (bukan di subfolder)
mkdir -p .github/workflows

# Copy atau buat workflow files di root
# .github/workflows/health-ecommerce-ci.yml
# .github/workflows/deploy-production.yml
# .github/workflows/test-workflow.yml
```

2. **Update workflow paths jika perlu:**

```yaml
# Di workflow file, sesuaikan paths jika perlu:
- name: Install dependencies
  run: npm ci
  working-directory: ./finished-project # Jika perlu run di subfolder
```

### Verifikasi Setup

**Check apakah workflow files ada di lokasi yang benar:**

```bash
# Dari root repository
ls -la .github/workflows/

# Harus ada:
# - health-ecommerce-ci.yml
# - deploy-production.yml
# - test-workflow.yml
```

**Check apakah files sudah di-commit:**

```bash
git status
# .github/workflows/ harus tidak muncul di untracked files

# Jika muncul, commit dulu:
git add .github/workflows/
git commit -m "ci: add GitHub Actions workflows"
git push origin main
```

**Check di GitHub:**

1. Buka repository di GitHub
2. Klik tab **Actions**
3. Harus ada workflow runs muncul setelah push
4. Jika tidak ada, check:
   - Apakah `.github/workflows/` ada di root repository?
   - Apakah files sudah di-commit dan push?
   - Apakah branch name sesuai (main, master, develop)?

### Troubleshooting

### "GitHub Actions tidak jalan setelah push"

**Problem:** Workflow tidak muncul di GitHub Actions tab setelah push

**Fix:**

1. **Pastikan file workflow ada di lokasi yang benar (ROOT repository):**

```bash
# File HARUS ada di root repository:
.github/workflows/*.yml

# BUKAN di subfolder seperti:
# finished-project/.github/workflows/*.yml  <- SALAH!

# Verifikasi dari root repository:
ls -la .github/workflows/
# Harus ada: health-ecommerce-ci.yml, deploy-production.yml, test-workflow.yml
```

2. **Pastikan file sudah di-commit dan push (dari ROOT repository):**

```bash
# Dari root repository, check apakah file ter-commit:
git status
# .github/workflows/ harus tidak muncul di untracked files

# Jika belum, commit dan push dari root:
git add .github/workflows/
git commit -m "ci: add GitHub Actions workflows"
git push origin main

# PENTING: Push dari root repository, bukan dari subfolder!
```

3. **Check branch name:**

```bash
# Workflow trigger untuk branch: main, master, develop
# Jika branch kamu bukan salah satu dari ini, workflow tidak akan jalan

# Check current branch:
git branch

# Jika perlu, rename branch:
git branch -m main  # atau master
```

4. **Check GitHub repository settings:**

```
- Buka: https://github.com/your-username/repo/settings/actions
- Pastikan "Allow all actions and reusable workflows" enabled
- Atau "Allow local actions and reusable workflows" enabled
```

5. **Manual trigger untuk testing:**

```
- Buka: https://github.com/your-username/repo/actions
- Pilih workflow: "Test Workflow" atau "Health E-Commerce CI Pipeline"
- Click "Run workflow" button (di kanan atas)
- Pilih branch dan click "Run workflow"
```

6. **Test dengan workflow sederhana:**

```bash
# File test-workflow.yml sudah dibuat untuk testing
# Push file ini dulu untuk verify workflow bisa jalan:
git add .github/workflows/test-workflow.yml
git commit -m "ci: add test workflow"
git push origin main

# Check GitHub Actions tab - harus ada workflow run!
```

---

### "GitHub Actions workflow failed"

**Solusi:**

```bash
# 1. Check workflow logs on GitHub
# Repository → Actions → Click failed workflow

# 2. Common issues:
# - YAML syntax error (indentation!)
# - Missing secrets (CODECOV_TOKEN, etc)
# - Test failures
# - Timeout issues

# 3. Validate YAML locally:
# Use: http://www.yamllint.com/
```

---

### "Codecov upload failed"

**Solusi:**

```bash
# 1. Add CODECOV_TOKEN to GitHub Secrets
# Settings - Secrets and variables - Actions - New secret
# Name: CODECOV_TOKEN
# Value: (from codecov.io)

# 2. Verify coverage file exists
npm run test:coverage
ls -la coverage/lcov.info  # Should exist

# 3. Check workflow file path
# files: ./coverage/lcov.info  # Must match actual path
```

---

### "Deployment to Vercel failed"

**Solusi:**

```bash
# 1. Get Vercel tokens from: vercel.com/account/tokens
# 2. Add to GitHub Secrets:
#    VERCEL_TOKEN=xxx
#    VERCEL_ORG_ID=team_xxx (from project settings)
#    VERCEL_PROJECT_ID=prj_xxx (from project settings)

# 3. Verify workflow uses correct tokens
# Check: deploy-production.yml
```

---

### "Husky commit hooks not working"

**Solusi:**

```bash
# Reinstall husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

# Make executable (Mac/Linux)
chmod +x .husky/commit-msg

# Test
git commit -m "test: verify commitlint"
# Should validate message format!
```

---

### "Postman collection import error"

**Solusi:**

```
# Use Postman v10+
# Check JSON format valid
# Import steps:
1. Postman → Import
2. Upload JSON file
3. Collection appears in sidebar
4. Set environment: base_url
```

---

## Tips Sukses

1. **Start with Git Flow** - Understand branching first
2. **Practice Conventional Commits** - Use commitlint
3. **Test Workflows Locally** - Use act tool (optional)
4. **Import Postman** - Test API before documenting
5. **Use Swagger Editor** - Validate YAML
6. **Small PRs** - Easier to review (<300 lines)
7. **Compare when stuck** - Check finished-project

---

## Resources

**Documentation:**

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Swagger/OpenAPI](https://swagger.io/specification/)
- [Postman Learning](https://learning.postman.com/)

**Tools:**

- [YAML Lint](http://www.yamllint.com/) - Validate workflows
- [Swagger Editor](https://editor.swagger.io/) - Edit API specs
- [Postman](https://www.postman.com/) - API testing
- [Codecov](https://codecov.io/) - Coverage tracking

**Git Flow:**

- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## Next Steps

After completing this module:

1.  **Setup workflows** untuk your projects
2.  **Document all APIs** dengan Swagger & Postman
3.  **Automate testing** in GitHub Actions
4.  **Configure deployment** ke cloud platforms
5.  **Final Project** - Complete MERN integration & deploy
6.  **Graduate** - Professional Fullstack Developer!

---

**Professional workflow = Professional developer! **

_Modul 2 - GitHub Workflow & API Documentation_  
_Part of Health E-Commerce Common Series_

---

** Repository Info:**

- **Name:** `komdigi-fsd-intermediate-modul-2-common-health-ecommerce-professional-devops`
- **Type:** DevOps Pipeline & Documentation
- **Focus:** CI/CD automation untuk Health E-Commerce
- **Structure:** 1 Repo, 2 Folders (starter + finished)
