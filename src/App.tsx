import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Assuming a Homepage component might exist or be added later for the "/" route
// For now, we'll define it, but it won't be created in this request.
// If Index.tsx/Homepage.tsx doesn't exist, this will cause an error if "/" is hit.
// It's common to have a placeholder or a redirect for "/" if a proper homepage isn't ready.
// For this exercise, we'll keep it generic.
// import Homepage from "./pages/Homepage"; // Assuming this might exist from other tasks

import LoginPage from "./pages/LoginPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFound from "./pages/NotFound"; // Always Must Include

const queryClient = new QueryClient();

// A simple placeholder for Homepage if not defined elsewhere
// const Homepage = () => <div className="p-4 text-center"><h1>Welcome! Navigate to /login to start.</h1></div>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* 
            It's common to have a dedicated Homepage for the "/" path.
            If "Homepage.tsx" is not being created in this step, 
            you might want to redirect "/" to "/login" or show a placeholder.
            For now, assuming a Homepage component might be defined elsewhere or later.
            If not, to make the app runnable without a defined Homepage, 
            you could make LoginPage the default for "/" or redirect.
            e.g. <Route path="/" element={<Navigate to="/login" replace />} /> 
            or   <Route path="/" element={<LoginPage />} />
            However, following the example structure, I will keep a generic path for "/"
            and assume 'Homepage' is handled or will be.
          */}
          {/* <Route path="/" element={<Homepage />} /> */}
          {/* If Homepage is not available, and login is primary, uncomment below: */}
          <Route path="/" element={<LoginPage />} />


          <Route path="/login" element={<LoginPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;