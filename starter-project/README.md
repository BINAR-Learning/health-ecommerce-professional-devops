#  Health E-Commerce - GitHub Workflow (STARTER)

> **Practice Project: Learn CI/CD dan API documentation dengan TODOs**

**Goal:** Setup professional GitHub workflow dengan CI/CD automation, conventional commits, dan API documentation!

---

##  **What You'll Learn**

Di starter project ini, kamu akan practice:

-  **GitHub Actions** - Setup CI/CD pipeline dengan workflow files
-  **Conventional Commits** - Enforce commit message format
-  **Husky** - Git hooks untuk code quality
-  **API Documentation** - Swagger dan Postman collections
-  **Code Quality** - ESLint, Prettier

---

##  **Project Structure**

```
starter-project/
├── package.json                  Dependencies ready
├── .commitlintrc.js              TODO: Configure commit rules
├── .github/workflows/
│   └── ci-template.yml           TODO: Complete CI pipeline
└── README.md (This file!)
```

**TODOs:** Configure workflow, commitlint, dan test pipeline!

---

##  **Quick Start**

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

---

### Step 1: Install Dependencies

```bash
cd starter-project
npm install
```

### Step 2: Setup Husky (Git Hooks)

```bash
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

### Step 3: Test Commitlint

```bash
# Try invalid commit (should FAIL)
git commit -m "test"

# Try valid commit (should PASS)
git commit -m "feat(workflow): add CI pipeline"
```

---

##  **Learning Path**

### Task 1: Configure Commitlint (Easy - 20 min)

**File:** `.commitlintrc.js`

**TODOs:**
- [ ] TODO 1: Complete type-enum (add all commit types)
- [ ] TODO 2: Configure type-case rule
- [ ] TODO 3: Configure subject rules
- [ ] TODO 4: Configure header max length

**Test:**
```bash
git commit -m "invalid"
# Should FAIL

git commit -m "feat(test): valid commit"
# Should PASS
```

---

### Task 2: Complete CI Workflow (Medium - 1 hour)

**File:** `.github/workflows/ci-template.yml`

**TODOs:**
- [ ] TODO 1: Configure triggers (push, PR)
- [ ] TODO 2: Complete lint job (checkout, setup Node, install, lint)
- [ ] TODO 3: Complete test job dengan MongoDB service
- [ ] TODO 4: Add coverage job (optional)

**Test:**
```bash
# Push to GitHub
git add .
git commit -m "ci: add workflow"
git push

# Check: GitHub - Actions tab
# Workflow should run!
```

---

### Task 3: Create Postman Collection (Advanced - 1 hour)

**Create:** `docs/api-collection.json`

**TODOs:**
- [ ] Export collection dari Postman dengan 5+ endpoints
- [ ] Include environment variables
- [ ] Add test scripts
- [ ] Document all endpoints

**Test:**
```bash
# Import collection ke Postman
# Run collection
# All requests should succeed
```

---

##  **Hints & Tips**

### Conventional Commits Format:

```bash
<type>(<scope>): <subject>

Examples:
 feat(auth): add JWT refresh token
 fix(payment): handle timeout error
 docs(api): update Swagger spec
 test(cart): add unit tests
```

### GitHub Actions Basics:

```yaml
name: CI Pipeline

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm test
```

---

##  **Troubleshooting**

### "Husky not working"
```bash
npx husky install
chmod +x .husky/commit-msg  # Mac/Linux only
```

### "Workflow not running"
```bash
# Check:
# 1. File in correct path: .github/workflows/
# 2. YAML syntax valid
# 3. Pushed to GitHub
```

### "Commitlint fails"
```bash
# Check .commitlintrc.js syntax
# Reinstall: npm install
```

---

##  **Success Criteria**

You're done when:

-  Commitlint rejects invalid commits
-  Commitlint accepts valid conventional commits
-  GitHub Actions workflow runs on push
-  Workflow includes lint & test jobs
-  Postman collection exported (optional)
-  You understand CI/CD basics
-  Ready for finished-project!

---

##  **Resources**

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
- **Compare:** `../finished-project/` untuk reference

---

##  **Next Steps**

After completing:

1.  Check finished-project untuk full CI/CD implementation
2.  Copy workflow to your actual project
3.  Setup branch protection rules
4.  Final Project: Deploy with GitHub Actions

---

**Practice makes perfect! **

_Starter Project - Common Modul 2_  
_Practice CI/CD with TODOs_
