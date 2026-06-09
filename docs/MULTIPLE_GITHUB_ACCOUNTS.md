# Using Multiple GitHub Accounts for Different Projects

Use one GitHub account for one project and another for a different project, without conflicts.

---

## 1. Per-project identity (who appears on commits)

Set **name** and **email** per repo so commits show the right author.

**For this project (e.g. shardul-gavit):**
```bash
cd "f:\gavit e services\gavit"
git config user.name "Shardul Gavit"
git config user.email "your-email@used-by-shardul-gavit.github.com"
```

**For another project (e.g. advancesafe-1):**
```bash
cd "path\to\other-project"
git config user.name "Your Other Name"
git config user.email "your-other-email@example.com"
```

Use the email tied to each GitHub account (or the no-reply GitHub email like `username@users.noreply.github.com`).

---

## 2. Per-project login (which account is used to push/pull)

### Option A: GitHub CLI and switch before push (simplest)

1. Log in to the account you need:
   ```bash
   gh auth login
   ```
   Sign in with the correct GitHub account in the browser.

2. When you switch to another project that needs a **different** account:
   ```bash
   gh auth logout
   gh auth login
   ```
   Sign in with the other account. Then `git push` / `git pull` in that repo will use that account.

3. Check who is logged in:
   ```bash
   gh auth status
   ```

So: **one account active at a time**; log out and log in when you switch projects.

---

### Option B: SSH keys per account (best for many repos)

Use a different SSH key per GitHub account and point each repo to the right one.

**Step 1: Create SSH keys (one per account)**

```bash
# Account 1 (e.g. shardul-gavit)
ssh-keygen -t ed25519 -C "shardul-gavit@github" -f "%USERPROFILE%\.ssh\id_ed25519_shardul"

# Account 2 (e.g. advancesafe-1)
ssh-keygen -t ed25519 -C "advancesafe@github" -f "%USERPROFILE%\.ssh\id_ed25519_advancesafe"
```

**Step 2: Add public keys to GitHub**

- GitHub → **Settings → SSH and GPG keys → New SSH key**
- Paste contents of:
  - `%USERPROFILE%\.ssh\id_ed25519_shardul.pub` into **shardul-gavit** account
  - `%USERPROFILE%\.ssh\id_ed25519_advancesafe.pub` into **advancesafe-1** account

**Step 3: SSH config** (create or edit `%USERPROFILE%\.ssh\config`)

```
# Shardul Gavit account
Host github-shardul
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_shardul
  IdentitiesOnly yes

# Advancesafe account
Host github-advancesafe
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_advancesafe
  IdentitiesOnly yes
```

**Step 4: Use the right host in each repo**

**This project (shardul-gavit):**
```bash
cd "f:\gavit e services\gavit"
git remote set-url origin git@github-shardul:shardul-gavit/gavit-services-showcase-main.git
```

**Other project (advancesafe-1):**
```bash
cd "path\to\other-project"
git remote set-url origin git@github-advancesafe:advancesafe-1/some-repo.git
```

Then `git push` and `git pull` use the correct account per repo.

---

### Option C: HTTPS with username per repo (no SSH)

Force Git to ask for (or use) a specific GitHub username per repo:

```bash
cd "f:\gavit e services\gavit"
git config credential.https://github.com.username shardul-gavit
```

Next time you push, Git will use **shardul-gavit** as the username. When prompted for password, use a **Personal Access Token** (PAT) for that account (GitHub → Settings → Developer settings → Personal access tokens).

For another project:
```bash
cd "path\to\other-project"
git config credential.https://github.com.username advancesafe-1
```

Windows will store a different credential per username.

---

## Quick reference

| Goal                         | What to do |
|-----------------------------|------------|
| Commits show correct author | `git config user.name "..."` and `git config user.email "..."` in each repo |
| Push with correct account   | Use **Option A** (gh auth switch), **Option B** (SSH + host), or **Option C** (credential username) |
| Check current gh user       | `gh auth status` |
| Check remote URL            | `git remote -v` |
| Check local user for repo   | `git config user.name` and `git config user.email` |

---

## This repo (gavit) – suggested one-time setup

**Identity (commits):**
```bash
cd "f:\gavit e services\gavit"
git config user.name "Shardul Gavit"
git config user.email "your-shardul-github-email@example.com"
```

**Push/pull (choose one):**

- **If using GitHub CLI:** run `gh auth login` and sign in as **shardul-gavit** before pushing.
- **If using SSH:** set remote to `git@github-shardul:shardul-gavit/gavit-services-showcase-main.git` (after creating key and `config` as in Option B).
- **If using HTTPS:** run `git config credential.https://github.com.username shardul-gavit` and use shardul-gavit’s PAT when prompted.

After that, commit and push as usual; this project will use the shardul-gavit identity and account.
