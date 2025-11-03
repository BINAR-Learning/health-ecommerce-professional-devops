# 📚 Health E-Commerce - Complete DevOps Pipeline

> **CI/CD, API Documentation & Deployment untuk Health E-Commerce MERN System**

[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-v4-blue)](https://github.com/features/actions)
[![Node.js](https://img.shields.io/badge/Node.js-20_LTS-green)](https://nodejs.org/)
[![Codecov](https://img.shields.io/badge/Codecov-integrated-brightgreen)](https://codecov.io/)

**Professional DevOps setup untuk Health E-Commerce production deployment!** ✅

---

## 🎯 Apa yang Termasuk?

**Complete DevOps Implementation:**
- ✅ **GitHub Actions CI/CD** - Automated testing & deployment
- ✅ **API Documentation** - Swagger/OpenAPI 3.1 spec (13 endpoints)
- ✅ **Postman Collection** - Complete API testing collection
- ✅ **Code Quality** - ESLint, Prettier, commitlint configured
- ✅ **Coverage Tracking** - Codecov integration
- ✅ **Security Scan** - npm audit + Snyk
- ✅ **Auto Deployment** - Render (Backend) + Vercel (Frontend)

---

## 🚀 Quick Start

### Setup Repository

```bash
# 1. Clone Health E-Commerce repository
git clone https://github.com/your-username/health-ecommerce-mern.git
cd health-ecommerce-mern

# 2. Copy workflow files
cp -r Common_Collaboration/Modul_2-GitHub_Workflow/finished-project/.github .

# 3. Copy documentation
cp -r Common_Collaboration/Modul_2-GitHub_Workflow/finished-project/docs .

# 4. Setup Git Flow
git flow init
# Accept defaults (main, develop, feature/, release/, hotfix/)

# 5. Install commit hooks
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

---

## 🔄 GitHub Actions Workflows

### Workflow 1: health-ecommerce-ci.yml

**Triggered on:** Push to main/develop, Pull Requests

**Jobs:**
1. **Lint** - ESLint + Prettier check
2. **Test Backend** - Jest tests dengan MongoDB service
3. **Test Frontend** - Build verification
4. **Integration Tests** - Supertest API tests
5. **E2E Tests** - Playwright full flow tests
6. **Security Scan** - npm audit + Snyk
7. **Build** - Production build check

**Total Duration:** ~5-8 minutes

---

### Workflow 2: deploy-production.yml

**Triggered on:** Push to main (manual trigger juga bisa)

**Jobs:**
1. **Deploy Backend** - To Render.com
2. **Deploy Frontend** - To Vercel
3. **Notify Team** - Slack notification (optional)

**Total Duration:** ~3-5 minutes

---

## 📖 API Documentation

### Swagger/OpenAPI

**Access Live Docs:**
```
http://localhost:5000/api-docs
```

**Swagger UI Features:**
- Interactive API explorer
- Try-it-out functionality
- Request/response examples
- Schema definitions
- Authentication testing

**Documented Endpoints (13 total):**

**Products (5):**
- GET /api/products
- GET /api/products/:id
- POST /api/products (Admin)
- PUT /api/products/:id (Admin)
- DELETE /api/products/:id (Admin)

**Auth (3):**
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile

**External (5):**
- POST /api/external/ai/chat (Google Gemini)
- POST /api/external/payment/create (Midtrans)
- POST /api/external/payment/notification (Webhook)
- GET /api/external/kemenkes/facilities
- POST /api/external/email/send

---

### Postman Collection

**Import Collection:**

```bash
# File location
docs/Health-Ecommerce-Complete-API.postman_collection.json

# Steps:
1. Open Postman
2. Click Import
3. Select file
4. Collection imported dengan 13 requests!
```

**Collection Structure:**
```
Health E-Commerce - Complete API
├── Health Check
├── Authentication/
│   ├── Register User
│   ├── Login User (saves token!)
│   └── Get Profile
├── Products/
│   ├── Get All Products
│   ├── Get by Category
│   ├── Search Products
│   └── Get Product by ID
└── External Integrations/
    ├── AI Chatbot (Gemini)
    ├── Create Payment (Midtrans)
    └── Get Kemenkes Facilities
```

**Environment Variables:**
- `{{base_url}}`: http://localhost:5000
- `{{auth_token}}`: Auto-saved after login
- `{{product_id}}`: Manual set dari response

---

## 🔐 GitHub Secrets Configuration

**Required Secrets untuk CI/CD:**

```
Settings → Secrets and variables → Actions → New repository secret
```

**Essential:**
- `CODECOV_TOKEN` - From codecov.io
- `VERCEL_TOKEN` - From vercel.com/account/tokens
- `VERCEL_ORG_ID` - From vercel project settings
- `VERCEL_PROJECT_ID` - From vercel project settings

**Optional:**
- `RENDER_DEPLOY_HOOK_URL` - From render.com
- `SLACK_WEBHOOK` - From slack.com/apps
- `SNYK_TOKEN` - From snyk.io

**Sensitive (Backend .env, NOT in secrets):**
- `GEMINI_API_KEY` - Set di Render environment variables
- `MIDTRANS_SERVER_KEY` - Set di Render environment variables
- `MONGODB_URI` - Set di Render environment variables

---

## 🌿 Git Workflow (Git Flow)

### Feature Development

```bash
# 1. Start new feature
git checkout develop
git pull origin develop
git checkout -b feature/ai-product-recommendations

# 2. Work & commit (conventional commits!)
git add .
git commit -m "feat(ai): add product recommendations to chatbot"

# 3. Push feature branch
git push origin feature/ai-product-recommendations

# 4. Create Pull Request di GitHub
# - Title: feat(ai): add product recommendations
# - Description: menggunakan template PR
# - Request review

# 5. After merge, delete branch
git checkout develop
git pull origin develop
git branch -d feature/ai-product-recommendations
```

---

### Hotfix (Emergency!)

```bash
# 1. Create hotfix from main
git checkout main
git checkout -b hotfix/payment-timeout-fix

# 2. Fix & commit
git add .
git commit -m "fix(payment): increase Midtrans timeout to 30s"

# 3. Merge to main & develop
git checkout main
git merge hotfix/payment-timeout-fix
git push origin main

git checkout develop
git merge hotfix/payment-timeout-fix
git push origin develop

# 4. Tag release
git tag -a v2.0.1 -m "Hotfix: payment timeout"
git push origin v2.0.1
```

---

## 🔄 CI/CD Pipeline Flow

```
Developer pushes code
         ↓
GitHub Actions triggered
         ↓
    ┌────┴────┐
    ▼         ▼
  Lint      Tests
   Job       Jobs
    │         │
    │    ┌────┼────┬─────────┐
    │    ▼    ▼    ▼         ▼
    │   Unit  Int  E2E    Security
    │   Test  Test Test    Scan
    │    │    │    │         │
    └────┴────┴────┴─────────┘
              ↓
         All Pass? ✅
              ↓
         Build Job
              ↓
       Upload Artifacts
              ↓
    [IF MAIN BRANCH]
              ↓
      Deploy to Production
              ↓
    ┌─────────┴──────────┐
    ▼                     ▼
Render.com           Vercel
(Backend)          (Frontend)
    ↓                     ↓
Slack Notification
    ↓
  Done! 🎉
```

---

## 📝 Conventional Commits

**Format:**
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Examples:**

```bash
# ✅ Good commits
git commit -m "feat(products): add category filter API"
git commit -m "fix(auth): resolve JWT token expiration issue"
git commit -m "docs(api): update Swagger spec for payment endpoint"
git commit -m "test(ai): add unit tests for chatbot service"
git commit -m "chore(deps): update React to 18.3.1"

# ❌ Bad commits (rejected by commitlint!)
git commit -m "fix stuff"
git commit -m "Update code"
git commit -m "WIP"
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code formatting
- `refactor`: Code refactor
- `test`: Adding tests
- `chore`: Build/deps/CI

---

## 🐛 Troubleshooting

### ❌ "GitHub Actions workflow syntax error"

**Problem:** YAML indentation salah

**Fix:**
```yaml
# Pastikan indentasi konsisten (2 spaces)
jobs:
  test:  # 2 spaces
    name: Test  # 4 spaces
    runs-on: ubuntu-latest  # 4 spaces
```

Use YAML validator: http://www.yamllint.com/

---

### ❌ "Codecov upload failed"

**Problem:** Token tidak configured atau file path salah

**Fix:**
```bash
# 1. Verify token di GitHub Secrets
# Settings → Secrets → CODECOV_TOKEN

# 2. Check file path di workflow
files: ./coverage/lcov.info  # Must match actual path

# 3. Generate coverage locally untuk verify
npm run test:coverage
ls -la coverage/  # Check lcov.info exists
```

---

### ❌ "E2E tests fail in CI but pass locally"

**Problem:** Timing issues atau environment differences

**Fix:**
```javascript
// Increase timeouts di playwright.config.js
use: {
  actionTimeout: 15000,  // Increase from 10000
}

// Add explicit waits
await page.waitForLoadState('networkidle');
await page.waitForTimeout(1000);
```

---

### ❌ "Deployment to Vercel fails"

**Problem:** Token atau project ID salah

**Fix:**
```bash
# Get correct values:
# 1. Vercel Token: vercel.com/account/tokens
# 2. Org ID & Project ID: vercel project settings

# Add to GitHub Secrets:
VERCEL_TOKEN=xxx
VERCEL_ORG_ID=team_xxx
VERCEL_PROJECT_ID=prj_xxx
```

---

### ❌ "Husky commit-msg hook not working"

**Problem:** Husky belum initialized

**Fix:**
```bash
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

# Test commit
git commit -m "test commit"
# Should validate!
```

---

## 📊 Workflow Status Badges

**Add to main README.md:**

```markdown
![CI](https://github.com/username/repo/workflows/Health%20E-Commerce%20CI%20Pipeline/badge.svg)
![Deploy](https://github.com/username/repo/workflows/Deploy%20Health%20E-Commerce/badge.svg)
![Coverage](https://codecov.io/gh/username/repo/branch/main/graph/badge.svg)
```

---

## 💡 Challenge untuk Peserta

### Challenge #1: Add Branch Protection Rules

Setup di GitHub:
```
Settings → Branches → Add rule

Branch name pattern: main
✅ Require pull request before merging
✅ Require status checks to pass before merging
  - Select: lint, test-backend, test-frontend
✅ Require branches to be up to date before merging
✅ Include administrators
```

---

### Challenge #2: Add Deployment Preview

Setup Vercel preview deployments untuk every PR:
- Trigger deploy preview on PR
- Comment preview URL di PR
- Auto-cleanup after merge

---

### Challenge #3: Add Performance Monitoring

Integrate Lighthouse CI:
```yaml
- name: Run Lighthouse CI
  uses: treosh/lighthouse-ci-action@v9
  with:
    urls: |
      http://localhost:3000
    uploadArtifacts: true
```

---

## 📖 Resources

**GitHub Actions:**
- [Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

**API Documentation:**
- [OpenAPI/Swagger](https://swagger.io/docs/)
- [Postman Learning](https://learning.postman.com/)

**Deployment:**
- [Render Docs](https://render.com/docs)
- [Vercel Docs](https://vercel.com/docs)

---

**Professional workflow = Professional developer! 📚🚀**

---

**📁 Repository:** `health-ecommerce-devops`  
**System:** Health E-Commerce MERN  
**CI/CD:** Automated testing & deployment  
**Status:** Production-ready! ✅

