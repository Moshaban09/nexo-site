import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Button } from "../components/ui/Button";

export const NotFound = () => {
  return (
    <Layout>
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold leading-none bg-linear-to-r from-blue-400 via-purple-500 to-teal-400 bg-clip-text text-transparent opacity-20 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-8xl font-bold text-white">
                404
              </span>
            </div>
          </div>

          {/* Message */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist or has been moved to
            another location.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto group shadow-lg shadow-blue-500/25"
              >
                <Home className="mr-2 w-4 h-4" />
                Go Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-16 flex items-center justify-center gap-2 text-neutral-500 text-sm">
            <span>Lost?</span>
            <Link
              to="/docs"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Check out the documentation
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};
