import { Toaster } from "react-hot-toast";

import { SessionProvider } from "./Providers/SessionProvider";
import { StyledComponentsRegistry } from "./StyledComponentsRegistry";

import { DiscoverBar } from "@/components/Layout/DiscoverBar";
import { Sidebar } from "@/components/Layout/Sidebar";
import { LoginModal } from "@/components/Modals/LoginModal";
import { RegisterModal } from "@/components/Modals/RegisterModal";
import { NewPostModal } from "@/components/Modals/NewPostModal";

import "@/styles/global.css";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
            <StyledComponentsRegistry>
              <Toaster />
              <LoginModal />
              <RegisterModal />
              <NewPostModal />
              <main>
                <div className="contentWrapper">
                  <div className="contentGrid">
                    <Sidebar />
                    <div className="contentColumns">{children}</div>
                    <DiscoverBar />
                  </div>
                </div>
              </main>
            </StyledComponentsRegistry>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
