import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/logic/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const FeaturesPage = lazy(() => import('./pages/FeaturesPage').then(m => ({ default: m.FeaturesPage })));
const TemplatesPage = lazy(() => import('./pages/TemplatesPage').then(m => ({ default: m.TemplatesPage })));
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

const router = createBrowserRouter([
  {
    element: (
      <>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Outlet />
          </Suspense>
        </Layout>
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      // Docs Routes
      { path: "/docs", element: <DocsIntro /> },
      { path: "/docs/installation", element: <DocsInstallation /> },
      { path: "/docs/quick-start", element: <Navigate to="/docs/installation" replace /> },
      { path: "/docs/presets", element: <DocsPresets /> },
      { path: "/docs/presets", element: <DocsPresets /> },
      { path: "/docs/cli-commands", element: <DocsCLICommands /> },
      // New Pages
      { path: "/features", element: <FeaturesPage /> },
      { path: "/templates", element: <TemplatesPage /> },
      // 404 Catch-all Route
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
