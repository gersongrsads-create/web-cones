import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy load non-critical routes for faster initial load
const IndexEN = lazy(() => import("./pages/IndexEN"));
const IndexES = lazy(() => import("./pages/IndexES"));
const IndexX = lazy(() => import("./pages/IndexX"));
const IndexX2 = lazy(() => import("./pages/IndexX2"));
const Sell1 = lazy(() => import("./pages/Sell1"));
const Sell2 = lazy(() => import("./pages/Sell2"));
const Thanks = lazy(() => import("./pages/Thanks"));
const Profesoras = lazy(() => import("./pages/Profesoras"));
const Presentes = lazy(() => import("./pages/Presentes"));

const queryClient = new QueryClient();

const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/en" element={<IndexEN />} />
            <Route path="/es" element={<IndexES />} />
            <Route path="/x" element={<IndexX />} />
            <Route path="/x2" element={<IndexX2 />} />
            <Route path="/profesoras" element={<Profesoras />} />
            <Route path="/presentes" element={<Presentes />} />
            <Route path="/sell1" element={<Sell1 />} />
            <Route path="/sell2" element={<Sell2 />} />
            <Route path="/thanks" element={<Thanks />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
