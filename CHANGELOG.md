# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-01-22

### 🚀 New Features



- **New**: **Dry Run** — Added `--dry-run` flag to `update` command for safely previewing changes.
- **New**: **Verbose Mode** — Global `--verbose` flag for detailed debugging logs.
- **New**: **Instant Setup Refactor** — Implemented "Zero-Latency" I/O orchestration:
  - High-efficiency `PackageManager` for memory-resident `package.json` state.
  - Atomic Git operations (`init`, `add`, `commit` in one chain).
  - Parallelized dynamic imports using `Promise.all` for command bootstrapping.
  - Expanded background prefetching covering all core dependencies.

### 🛠️ Improvements & Fixes
- **Improvement**: Enhanced `ConfiguratorContext` resolve logic for complex dependencies.
- **Removed**: **UI & Styling** — Dropped `Mantine` and `Plain CSS`.
- **Removed**: **Commands** — Removed `nexo undo`.
- **Removed**: **Core Features** — Dropped i18n, Auth, Docker, and Monorepo support.
- **Removed**: **Prompts** — Removed framework selection prompt (now defaults to React).
- **Fixed**: **CLI Flags** — Removed conflicting `-V` short flag from `--verbose`.
- **Fixed**: **Test Suite** — Resolved 200+ test failures after the architecture refactor.

### ⚠️ Breaking Changes
- **Merged**: `nexo doctor` and `nexo health` are now unified into `nexo check`.
  - Use `nexo check` for full system + project health checks
  - Use `nexo check --system` for system-only checks (replaces `nexo doctor`)
  - Use `nexo check --project` for project-only checks (replaces `nexo health`)

## [1.2.0] - 2026-01-21

### 🛠️ Core Architecture
- **Refactor**: Split monolithic `nexo.ts` into a modular command structure (`src/commands/*`) for better maintainability and lazy loading.
- **Refactor**: Defined explicit `Command` interface with strict typing and options handling.
- **Refactor**: Modernized `ConfiguratorContext` and improved internal dependency management.

### 🧠 AI Intelligence & Context
- **New**: **Modular Cursor Rules** — Granular AI instructions (React, TS, Styling) with `cursor-modular` support.
- **New**: `.nexo/ai-context.md` generation as a single source of truth for AI agents.

### ⚡ Performance & UX
- **New**: **Persistent Disk Cache** — Caches npm metadata locally (`~/.nexo/cache.json`) for instant startup speed.
- **Optimization**: **Fast-Path I/O** — Skips writing files if the content is identical to existing files.
- **Optimization**: **Smart Concurrency Pool** — Enhanced parallel execution with active task management.
- **UX**: **Lightweight CLI Banner** — Added a professional ASCII branding to the startup flow.
- **Optimization**: **Single Bundle Build** — Fully minified and tree-shaken distribution with zero runtime dependencies.



### 🛠️ Maintenance & Commands
- **New**: `nexo update` — Self-update the CLI to the latest version.
- **New**: **Smart Resolution** — Automatically fetches and installs the latest versions from npm registry.

### 🧪 Testing & Documentation



### 🐛 Fixes
- **Fixed**: Resolved duplicate `require` and unused variables in core commands.
- **Fixed**: Corrected `undo` command path resolution in Windows environments.
- **Fixed**: Improved `HeroUI` extension handling for JavaScript projects.
- **Fixed**: Fixed `ConfiguratorContext` type mismatches in Maintenance commands.


## [1.1.6] - 2026-01-19

### Optimizations
- 📦 **Package Size Reduced by 80%** — From 837 KB to ~160 KB
- 🚀 **Build Time Reduced by 90%** — From ~3s to 0.31s
- 🗑️ Removed source maps and declaration files from production
- ⚡ Enabled minification and tree shaking
- 🎯 Updated Node.js target to Node 20 for better performance

## [1.1.4] - 2026-01-19

### Optimizations
- ⚙️ **Project Configuration** — Lowered Node.js requirement to `>=18.0.0`, added `clean`, `lint`, `format`, `release` scripts.
- 📦 **Expanded Dependencies** — Added `fs-extra`, `execa`, `ora`, `chalk` for better performance and DX.
- 🧹 **Linting & Formatting** — Integrated ESLint and Prettier configurations.

### Added
- 📂 **Existing Directory Handling** — Smart detection of existing projects with options to continue, overwrite, or cancel.

## [1.1.0] - 2026-01-18

### Added
- 🧩 **Constants Module** — Unified type-safe constants for all options
- 📁 **Config File Support** — Use `nexo.config.json` for pre-configured projects
- 🤖 **AI Instructions** — Auto-generate guides for Cursor, Gemini, Claude, and more
- 🎯 **Presets System** — Quick start with `minimal`, `standard`, `full`, `saas`, `dashboard`
- 📝 **Unified Logger** — Consistent CLI output with log levels

### Changed
- ⚡ **Parallel execution is now default** — Use `--no-parallel` for sequential mode
- 🗑️ Removed `packageManager` prompt for faster experience

### Fixed
- 🐛 HeroUI extension now correctly uses `.js` for JavaScript projects
- 🐛 Fixed duplicate condition checks in UI configurator

## [1.0.0] - 2026-01-18

### Added
- 🚀 Initial release
- Framework selection (React + Vite)
- TypeScript/JavaScript variants with React Compiler and SWC options
- Styling: Tailwind CSS v4, CSS Modules, Sass, Plain CSS
- UI Libraries: shadcn/ui, Radix, Mantine, HeroUI, Ant Design, Chakra
- Forms: React Hook Form + Zod/Yup, Formik + Zod/Yup
- State Management: Zustand, Redux Toolkit, Jotai
- Routing: React Router, TanStack Router
- Data Fetching: TanStack Query, Axios, Fetch
- Icons: Lucide, Heroicons, Font Awesome
- Project Structures: Feature-based, FSD, Atomic, Clean Architecture, MVC, Simple
- Optional Features: i18n, Auth, Testing, Linting, Animation, Docker, Monorepo
- Wizard mode for beginners
- Parallel execution for faster setup

### Coming Soon

