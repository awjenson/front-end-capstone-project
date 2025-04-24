import React from 'react';
import NotFound from './NotFound';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
        <header>
            <h1>Page Not Found</h1>
        </header>
        <section>
            <NotFound />
        </section>
    </main>
  );
}