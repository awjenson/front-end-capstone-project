import React from 'react';

// Citing use of AI
// I used both GitHub Copilot in VS Code and Cursor's AI Code Editor to help me code this file.

export default function Menu({ menuItems, categories }) {
    return (
        <main className="menu">
            {/* Now using the categories prop */}
            {categories.map(category => (
                <section key={category} className="menu-section">
                    <h2>{category}</h2>
                    <div className="menu-grid">
                        {menuItems
                            .filter(item => item.category === category)
                            .map(item => (
                                <article key={item.id} className="menu-item">
                                    <div className="menu-item-content">
                                        <div className="menu-item-header">
                                            <h3>{item.title}</h3>
                                            <p className="price">${item.price}</p>
                                        </div>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </article>
                            ))}
                    </div>
                </section>
            ))}
        </main>
    );
}



