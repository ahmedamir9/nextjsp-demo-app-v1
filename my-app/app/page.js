import React from 'react';
import Link from "next/link";
import Todos from "./components/Todos";
import Card from "./components/card";

export default function Home() {
  return (
    <div style={{ background: 'var(--background)' }}>
      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Welcome to the Future</span>
          <h1>Experience <span style={{ color: "var(--primary)" }}>Seamless</span> Modernity.</h1>
          <p>A calm, fast, and attractive demonstration of Next.js architecture and clean web design principles, built for the modern web.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/articles" className="btn btn-primary">Our Articles</Link>
            <Link href="/posts" className="btn" style={{
              background: "white",
              color: "var(--primary)",
              border: "1px solid var(--primary)"
            }}>
              Explore Community
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Content Area */}
      <main className="section-padding" style={{ background: '#fcfdfe', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Highlights */}
            <div>
              <div style={{ marginBottom: '2.5rem' }}>
                <span className="badge">Platform Highlights</span>
                <h2 style={{ fontSize: '2.25rem', marginTop: '1rem' }}>Key Capabilities</h2>
                <p style={{ color: 'var(--secondary)', fontSize: '1.1rem' }}>Our platform provides everything you need to build and scale your digital presence.</p>
              </div>

              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <Card
                  title="Fast Performance"
                  description="Optimized with server-side components and modern rendering techniques for lightning-fast load times."
                  badge="Performance"
                />
                <Card
                  title="Modern Design"
                  description="A carefully curated design system built from the ground up for clarity, focus, and visual appeal."
                  badge="Design"
                />
              </div>
            </div>

            {/* Interactive Section */}
            <aside>
              <Todos />
            </aside>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="section-padding" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Elevate Your Workflow?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join thousands of developers and creators who are building the next generation of web applications today.
          </p>
          <button className="btn" style={{ background: 'white', color: 'var(--primary)', fontSize: '1.1rem', padding: '1rem 2rem' }}>
            Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
}
