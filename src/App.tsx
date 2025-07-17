
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ServiceCenters from "./pages/ServiceCenters";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Configure React Query with retry options and caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

const App = () => {
  // Add skip link focus handler for keyboard accessibility
  useEffect(() => {
    const handleSkipLinkFocus = () => {
      const mainContent = document.getElementById("main-content");
      if (mainContent) {
        mainContent.focus();
        mainContent.scrollIntoView();
      }
    };

    const skipLink = document.getElementById("skip-to-content");
    if (skipLink) {
      skipLink.addEventListener("click", handleSkipLinkFocus);
    }

    return () => {
      if (skipLink) {
        skipLink.removeEventListener("click", handleSkipLinkFocus);
      }
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Accessibility: Skip to content link (hidden until focused) */}
        <a 
          id="skip-to-content" 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-black"
        >
          Skip to content
        </a>
        
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/vachanmotors">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/service-centers" element={<ServiceCenters />} />
            {/* <Route path="/testimonials" element={<Testimonials />} /> */}
            <Route path="/contact" element={<Contact />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
