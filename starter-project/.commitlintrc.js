/**
 * Commitlint Configuration (STARTER)
 * TODO: Configure conventional commit rules
 * 
 * Docs: https://commitlint.js.org/
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],
  
  rules: {
    // TODO 1: Configure type-enum
    // Allowed types: feat, fix, docs, style, refactor, test, chore, ci
    'type-enum': [
      2,
      'always',
      [
        'feat',     // New feature
        'fix',      // Bug fix
        'docs',     // Documentation
        // TODO: Add more types: style, refactor, test, chore, ci, revert
      ]
    ],
    
    // TODO 2: Configure type-case (should be lowercase)
    // HINT: 'type-case': [2, 'always', 'lower-case'],
    
    // TODO 3: Configure subject rules
    // HINT: 'subject-empty': [2, 'never'], // Subject required
    // HINT: 'subject-full-stop': [2, 'never', '.'], // No trailing period
    
    // TODO 4: Configure header max length
    // HINT: 'header-max-length': [2, 'always', 100],
  }
};

// ==========================================
// LEARNING RESOURCES
// ==========================================

/*
CONVENTIONAL COMMITS FORMAT:

<type>(<scope>): <subject>

Examples of GOOD commits:
 feat(auth): add JWT token refresh
 fix(payment): handle Midtrans timeout
 docs(api): update Swagger spec
 test(cart): add integration tests

Examples of BAD commits:
 fix bug
 update
 WIP
 asdasd

COMMIT TYPES:

feat:     New feature
fix:      Bug fix
docs:     Documentation changes
style:    Code style (formatting, no logic change)
refactor: Code refactoring
test:     Adding or updating tests
chore:    Maintenance tasks
ci:       CI configuration changes
perf:     Performance improvements
revert:   Revert previous commit

SETUP HUSKY:

npm install
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'

TEST COMMITLINT:

git commit -m "test"
# Should FAIL (invalid format)

git commit -m "feat(test): valid commit message"
# Should PASS

NEXT STEPS:
1. Complete TODOs 1-4
2. Setup Husky hooks
3. Test dengan git commit
4. Compare dengan finished-project
*/

