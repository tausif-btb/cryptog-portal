import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { AuthProvider } from "./hooks/useAuth";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Cryptog from "./pages/Cryptog";
import ICO from "./pages/ICO";
import StockFantasy from "./pages/StockFantasy";
import Users from "./pages/Users";
import NotFound from "./pages/NotFound";
import ComingSoon from "@/components/shared/ComingSoon";
import CryptogAssets from "./pages/CryptogAssets";
import CryptogTeam from "./pages/CryptogTeam";
import CryptogContest from "./pages/CryptogContest";
import Login from "./pages/Login";
import VerifyOTP from "./pages/VerifyOTP";

const App = () => {
  // Create a new QueryClient instance inside the component
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Auth routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            
            {/* Protected routes */}
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="cryptog" element={<Cryptog />} />
              <Route path="ico" element={<ICO />} />
              <Route path="stock-fantasy" element={<StockFantasy />} />
              <Route path="users" element={<Users />} />
              
              {/* Cryptog subpages */}
              <Route path="cryptog/assets" element={<CryptogAssets />} />
              <Route path="cryptog/team" element={<CryptogTeam />} />
              <Route path="cryptog/contest" element={<CryptogContest />} />
              
              {/* Stock Fantasy subpages */}
              <Route path="stock-fantasy/assets" element={<ComingSoon title="Stock Fantasy Assets" description="Manage stock assets for the Stock Fantasy platform." />} />
              <Route path="stock-fantasy/team" element={<ComingSoon title="Stock Fantasy Teams" description="Manage teams for the Stock Fantasy platform." />} />
              <Route path="stock-fantasy/contest" element={<ComingSoon title="Stock Fantasy Contests" description="Manage contests for the Stock Fantasy platform." />} />
              
              {/* ICO subpages */}
              <Route path="ico/investors" element={<ComingSoon title="ICO Investors" description="Manage and track investors for your ICO." />} />
              <Route path="ico/token" element={<ComingSoon title="Token Management" description="Configure and manage your token settings." />} />
              
              {/* Other pages */}
              <Route path="subscribers" element={<ComingSoon title="Subscribers" description="Manage your newsletter subscribers." />} />
              <Route path="notifications" element={<ComingSoon title="Notifications" description="Manage platform notifications." />} />
              <Route path="settings" element={<ComingSoon title="Settings" description="Configure platform-level settings." />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
