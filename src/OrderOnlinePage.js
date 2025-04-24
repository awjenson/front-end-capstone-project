import React from 'react';
import OrderOnline from './OrderOnline';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function OrderOnlinePage() {
    return (
        <main className="order-online-page">
            <header>
                <h1>Order Online</h1>
            </header>
            <section>
                <OrderOnline />
            </section>
        </main>
    );
};