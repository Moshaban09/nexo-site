import { lazy, Suspense } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ScrollToTop } from './components/logic/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));
const DocsIntro = lazy(() => import('./pages/docs/Introduction').then(m => ({ default: m.DocsIntro })));
const DocsInstallation = lazy(() => import('./pages/docs/Installation').then(m => ({ default: m.DocsInstallation })));
const DocsPresets = lazy(() => import('./pages/docs/Presets').then(m => ({ default: m.DocsPresets })));
const DocsCLICommands = lazy(() => import('./pages/docs/CLICommands').then(m => ({ default: m.DocsCLICommands })));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Docs Routes */}
          <Route path="/docs" element={<DocsIntro />} />
          <Route path="/docs/installation" element={<DocsInstallation />} />
          <Route path="/docs/quick-start" element={<Navigate to="/docs/installation" replace />} />
          <Route path="/docs/presets" element={<DocsPresets />} />
          <Route path="/docs/cli-commands" element={<DocsCLICommands />} />

          {/* 404 Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
