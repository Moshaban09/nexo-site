# 🗺️ NEXO CLI - Unified Roadmap
# 🗺️ NEXO CLI - خارطة الطريق الموحدة

This document serves as the central hub for the future vision, planned features, and prioritized improvements for NEXO CLI.
يعد هذا المستند المركز الرئيسي للرؤية المستقبلية والميزات المخطط لها والتحسينات ذات الأولوية لـ NEXO CLI.

> **Last Updated**: January 24, 2026
> **آخر تحديث**: ٢٤ يناير ٢٠٢٦
>
> **Current Version**: 1.5.00
> **الإصدار الحالي**: ١.٥.٠٠

---

## 📊 Current Status Overview
## 📊 نظرة عامة على الحالة الحالية

| Category | Status | Notes |
|----------|--------|-------|
| **Core CLI**<br>نواة CLI | ✅ Stable<br>مستقر | Production-ready<br>جاهز للإنتاج |
| **Error Handling**<br>معالجة الأخطاء | ✅ Complete<br>مكتمل | Structured error classes + network resilience<br>فئات أخطاء مهيكلة + مرونة الشبكة |
| **Security**<br>الأمان | ✅ Complete<br>مكتمل | Path traversal, scanning & pre-write checks<br>فحص وحماية المسارات + فحوصات قبل الكتابة |
| **Testing**<br>الاختبارات | ✅ Stable<br>مستقر | 260 tests passing<br>٢٦٠ اختبار ناجح |
| **CI/CD**<br>CI/CD |  Future<br>مستقبلي | GitHub Actions & Auto-Publishing<br>إجراءات GitHub والنشر التلقائي |
| **Code Quality**<br>جودة الكود | ✅ Optimized<br>محسن | Modular commands + central constants<br>أوامر مجزأة + ثوابت مركزية |
| **Templates**<br>القوالب | ⚠️ Partial<br>جزئي | Infrastructure ready<br>البنية التحتية جاهزة |

---

## 🟠 Phase 1: Template Ecosystem
##  المرحلة الأولى: نظام القوالب

> **Timeline**: 1-2 months | **Goal**: Comprehensive library
> **الجدول الزمني**: ١-٢ شهر | **الهدف**: مكتبة شاملة

### 1.1 Official Templates
### 1.1 القوالب الرسمية

| Template | Description | Status |
|----------|-------------|--------|
| **`saas`**<br>SaaS | Next.js + Supabase + Stripe<br>Next.js + Supabase + Stripe | 📋 Planned<br>مخطط له |
| **`dashboard`**<br>لوحة التحكم | Admin panel with Charts & Tables<br>لوحة تحكم مع رسوم وجداول | 📋 Planned<br>مخطط له |
| **`landing`**<br>صفحة هبوط | SEO-optimized marketing pages<br>صفحات تسويق محسنة للسيو | 📋 Planned<br>مخطط له |
| **`ai-chat`**<br>دردشة ذكاء اصطناعي | Ready-to-go AI interface<br>واجهة ذكاء اصطناعي جاهزة | 🔮 Future<br>مستقبلي |

### 1.2 Template Security
### 1.2 أمان القوالب

- **Cloning Scan**: Run `scanContent` on files after cloning remote templates
- **فحص الاستنساخ**: تشغيل فحص محتوى الملفات بعد استنساخ القوالب عن بعد

---

## 🔮 Phase 2: CI/CD & Automation
## 🔮 المرحلة الثانية: الأتمتة و CI/CD

> **Goal**: Fully automated testing and publishing pipeline.
> **الهدف**: خط إنتاج متكامل للاختبار والنشر التلقائي.

### 2.1 Automated Workflows
### 2.1 سير العمل المؤتمت

- **CI Pipeline**: Build, Lint, and Test on every Push/PR.
- **إجراءات CI**: البناء، التحقق من الجودة، والاختبار مع كل سحب أو دفع للكود.
- **Security Scanning**: Automated CodeQL analysis.
- **فحص الأمان**: تحليل حصين للكود باستخدام CodeQL.

### 2.2 Release Automation
### 2.2 أتمتة الإصدارات

- **Auto-Publish**: Trigger NPM publishing on version tags.
- **النشر التلقائي**: تشغيل عملية النشر لـ NPM عند إضافة Tag للإصدار.
- **Changelog Generator**: Automated release notes from commits.
- **مولد سجل التغييرات**: كتابة ملاحظات الإصدار تلقائياً من الـ commits.

---



##  Phase 3: Long-Term Vision
##  المرحلة الثالثة: الرؤية المستقبلية

### 3.1 Rust Core (Binary Internal)
### 3.1 نواة Rust (داخلي)

> **Goal**: Rewrite I/O operations in Rust for sub-millisecond latency.
> **الهدف**: إعادة كتابة عمليات الإدخال والإخراج بلغة Rust لسرعة فائقة.

- **FS Module**: Implement Core FS in Rust
- **وحدة الملفات**: تنفيذ عمليات الملفات الأساسية بـ Rust
- **Batch Writer**: Parallel file writing using Rayon
- **كاتب الدفعات**: كتابة الملفات المتوازية باستخدام Rayon

### 3.2 Plugin & Web
### 3.2 الإضافات والويب

- **Plugin System**: Hooks for extending CLI functionality
- **نظام الإضافات**: خطافات لتوسيع وظائف CLI
- **Web Interface**: Graphic project setup wizard
- **واجهة الويب**: معالج رسومي لإعداد المشاريع

---

## 📋 Priority Matrix
## 📋 مصفوفة الأولويات

### 🟠 High | عالية (Important | هامة)
- Official templates
- القوالب الرسمية
- E2S project testing
- مصفوفة الاختبارات الشاملة (E2E)

### 🟡 Medium | متوسطة
- Rust core exploration
- استكشاف نواة Rust
- Plugin system design
- تصميم نظام الإضافات

---

## 🏁 Milestones
## 🏁 المعالم الزمنية

| Version | Focus | Target Date |
|---------|---------|-------------|
| **1.5.0**<br>١.٥.٠ | ✅ Orchestration Engine + Security<br>محرك التنظيم + الأمان | Jan 2026<br>يناير ٢٠٢٦ |
| **1.5.0**<br>١.٥.٠ | ✅ Orchestration Engine + Security<br>محرك التنظيم + الأمان | Jan 2026<br>يناير ٢٠٢٦ |
| **2.0.0**<br>٢.٠.٠ | Templates + Rust core<br>القوالب + نواة Rust | Q2 2026<br>الربع الثاني ٢٠٢٦ |

---

## 💡 Suggestions
## 💡 الاقتراحات

Have a feature request? [Open an issue](https://github.com/Moshaban09/create-nexo/issues).
هل لديك طلب لميزة؟ [افتح تذكرة هنا](https://github.com/Moshaban09/create-nexo/issues).

---
*This roadmap is a living document*
*خارطة الطريق هذه هي وثيقة حية*

