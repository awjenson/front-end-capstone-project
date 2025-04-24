import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function AppLayout() {

  return (
    <div className="grid-container">

        {/* Navigation */}
        <div className="grid-item-nav">
            <Nav />
        </div>

        {/* Main Content */}
        <main className="grid-item-main">

            {/* The <Outlet> renders the current route selected */}
            <Outlet />

        </main>

        {/* Footer */}
        <div className="grid-item-footer">
            <Footer />
        </div>

    </div>
  );
}
