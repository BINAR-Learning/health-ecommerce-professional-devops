# 📚 health-ecommerce-professional-devops

> **Professional DevOps Pipeline dengan GitHub Actions, API Documentation & Deployment**

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-v4-blue)](https://github.com/features/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-green)](https://nodejs.org/)
[![Swagger](https://img.shields.io/badge/Swagger-3.1-green)](https://swagger.io/)
[![Codecov](https://img.shields.io/badge/Codecov-integrated-brightgreen)](https://codecov.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

Complete DevOps pipeline dengan Git workflow, CI/CD automation, API documentation, dan production deployment untuk Health E-Commerce.

---

## 📦 Apa yang Ada di Repository Ini?

Repository ini berisi **2 versi project**:

```
health-ecommerce-professional-devops/
├── README.md (Ini file yang kamu baca)
├── starter-project/     # 📝 Basic templates (dengan TODO)
│   ├── README.md
│   ├── .github/workflows/
│   │   └── ci-template.yml      # ⚠️ TODO: Complete workflow
│   ├── docs/
│   │   ├── swagger-template.yaml  # ⚠️ TODO: Document endpoints
│   │   └── pr-template.md         # ✅ PR template (ready!)
│   └── package.json
└── finished-project/    # ✅ Complete DevOps setup!
    ├── README.md
    ├── .github/workflows/
    │   ├── health-ecommerce-ci.yml      # ✅ CI pipeline (7 jobs!)
    │   └── deploy-production.yml        # ✅ Auto deployment!
    ├── docs/
    │   ├── Health-Ecommerce-Complete-API.postman_collection.json  # ✅ 13 endpoints!
    │   └── swagger-example.yaml         # ✅ OpenAPI spec
    ├── .commitlintrc.js                 # ✅ Commit message validation
    ├── .gitignore                       # ✅ Git ignore rules
    └── package.json                     # ✅ Husky, ESLint, Prettier
```

**Pilih mana?**
- **Starter** - Untuk **practice DevOps setup** (RECOMMENDED!)
- **Finished** - Untuk **reference** complete workflows

---

## 🚀 Quick Start (Untuk Newbie)

### Prerequisites

Sebelum mulai, pastikan:
- ✅ **Health E-Commerce project** sudah complete
  - Backend Modul 1-5 (ULTIMATE Backend)
  - Frontend Modul 1-3 (Complete UI)
  - Common Modul 1 (Testing Suite)
- ✅ **GitHub account** (untuk workflows)
- ✅ **Git installed** locally

---

### Option 1: Practice dengan Starter Project

```bash
# 1. Clone repository ini
git clone https://github.com/your-username/health-ecommerce-professional-devops.git

# 2. Masuk ke folder repository
cd health-ecommerce-professional-devops

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
git clone https://github.com/your-username/health-ecommerce-professional-devops.git

# 2. Masuk ke folder repository
cd health-ecommerce-professional-devops

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

## 🎯 Apa yang Akan Kamu Pelajari?

**Common Modul 2** adalah **module terakhir** yang complete seluruh Intermediate Program!

### Konsep yang Dipelajari:

- ✅ **Git Branching** - Git Flow & GitHub Flow strategies
- ✅ **Pull Requests** - Effective PR descriptions & reviews
- ✅ **GitHub Actions** - CI/CD automation pipelines
- ✅ **Swagger/OpenAPI** - Professional API documentation
- ✅ **Postman Collections** - API testing & sharing
- ✅ **Code Quality** - ESLint, Prettier, commitlint
- ✅ **Deployment** - Automated deploy to Render & Vercel

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

## 📁 Struktur Starter Project

```
starter-project/
├── README.md              # Setup guide
├── .github/workflows/
│   └── ci-template.yml        # ⚠️ TODO: Complete CI jobs
├── docs/
│   ├── swagger-template.yaml  # ⚠️ TODO: Document endpoints
│   └── pr-template.md         # ✅ PR template (ready!)
└── package.json               # ⚠️ TODO: Add husky, commitlint
```

**TODOs:**
- [ ] Complete CI workflow dengan test jobs
- [ ] Add deployment workflow
- [ ] Complete Swagger specification
- [ ] Export Postman collection
- [ ] Setup commitlint hooks

---

## 📁 Struktur Finished Project

```
finished-project/
├── README.md              # Complete DevOps guide
├── .github/workflows/
│   ├── health-ecommerce-ci.yml      # ✅ Complete CI (7 jobs!)
│   └── deploy-production.yml        # ✅ Auto deployment!
├── docs/
│   ├── Health-Ecommerce-Complete-API.postman_collection.json  # ✅ 13 endpoints!
│   └── swagger-example.yaml         # ✅ OpenAPI 3.1 spec
├── .commitlintrc.js                 # ✅ Conventional commits
├── .gitignore                       # ✅ Ignore rules
├── package.json                     # ✅ Husky, ESLint, Prettier
└── README.md
```

**All implemented:**
- ✅ GitHub Actions CI/CD (7 jobs)
- ✅ Postman collection (13 endpoints)
- ✅ Swagger documentation (complete)
- ✅ Commit message validation
- ✅ Code quality tools
- ✅ Automated deployment

---

## 🔄 GitHub Actions Workflows

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
1. Deploy Backend → Render.com
2. Deploy Frontend → Vercel
3. Notify Team → Slack (optional)
```

---

## 📖 API Documentation

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

## 🌿 Git Workflow

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
# → GitHub Actions automatically:
#    ✓ Runs all tests
#    ✓ Checks code quality
#    ✓ Shows results in PR

# After review & approval, merge
# → If main branch:
#    ✓ Automatically deploys to production!
```

---

### Conventional Commits

**Format:**
```
<type>(<scope>): <description>
```

**Examples:**
```bash
# ✅ Good commits
git commit -m "feat(products): add category filter"
git commit -m "fix(auth): resolve JWT expiration bug"
git commit -m "docs(api): update Swagger spec"
git commit -m "test(payment): add Midtrans integration tests"

# ❌ Bad commits (rejected by commitlint!)
git commit -m "fix bug"
git commit -m "update code"
git commit -m "WIP"
```

**Types:** feat, fix, docs, style, refactor, test, chore, perf, ci, revert

---

## 🔗 Hubungan dengan Modul Lain

**Dari Backend Modul 3:**
- ✅ Swagger YAML untuk dokumentasi

**Dari Common Modul 1:**
- ✅ Tests to automate in CI/CD

**Common Modul 2 (This!)** → Professional Workflow
- 🆕 GitHub Actions automation
- 🆕 Git branching strategies
- 🆕 API documentation complete
- 🆕 Deployment automation
- 🆕 Code quality gates

**Ke Final Project:**
- → Production deployment
- → Team collaboration patterns
- → Professional standards

**Complete professional development workflow!**

---

## 🐛 Troubleshooting

### ❌ "GitHub Actions workflow failed"

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

### ❌ "Codecov upload failed"

**Solusi:**
```bash
# 1. Add CODECOV_TOKEN to GitHub Secrets
# Settings → Secrets and variables → Actions → New secret
# Name: CODECOV_TOKEN
# Value: (from codecov.io)

# 2. Verify coverage file exists
npm run test:coverage
ls -la coverage/lcov.info  # Should exist

# 3. Check workflow file path
# files: ./coverage/lcov.info  # Must match actual path
```

---

### ❌ "Deployment to Vercel failed"

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

### ❌ "Husky commit hooks not working"

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

### ❌ "Postman collection import error"

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

## 💡 Tips Sukses

1. **Start with Git Flow** - Understand branching first
2. **Practice Conventional Commits** - Use commitlint
3. **Test Workflows Locally** - Use act tool (optional)
4. **Import Postman** - Test API before documenting
5. **Use Swagger Editor** - Validate YAML
6. **Small PRs** - Easier to review (<300 lines)
7. **Compare when stuck** - Check finished-project

---

## 📚 Resources

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

## 🚀 Next Steps

After completing this module:

1. ✅ **Setup workflows** untuk your projects
2. ✅ **Document all APIs** dengan Swagger & Postman
3. ✅ **Automate testing** in GitHub Actions
4. ✅ **Configure deployment** ke cloud platforms
5. ➡️ **Final Project** - Complete MERN integration & deploy
6. 🎓 **Graduate** - Professional Fullstack Developer!

---

**Professional workflow = Professional developer! 📚🚀**

_Modul 2 - GitHub Workflow & API Documentation_  
_Part of Health E-Commerce Common Series_

---

**📁 Repository Info:**
- **Name:** `health-ecommerce-professional-devops`
- **Type:** DevOps Pipeline & Documentation
- **Focus:** CI/CD automation untuk Health E-Commerce
- **Structure:** 1 Repo, 2 Folders (starter + finished)
