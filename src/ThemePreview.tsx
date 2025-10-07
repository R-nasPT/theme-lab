import { useEffect, useState } from "react";

export default function ThemePreview() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove .dark class on body
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const baseColors = [
    { name: "background", class: "bg-background text-foreground" },
    { name: "foreground", class: "bg-foreground text-background" },
    { name: "card", class: "bg-card text-card-foreground" },
    { name: "popover", class: "bg-popover text-popover-foreground" },
    { name: "border", class: "bg-border text-foreground" },
    { name: "input", class: "bg-input text-foreground" },
    { name: "ring", class: "bg-ring text-background" },
  ];

  const accentColors = [
    { name: "primary", class: "bg-primary text-primary-foreground" },
    { name: "secondary", class: "bg-secondary text-secondary-foreground" },
    { name: "accent", class: "bg-accent text-accent-foreground" },
    { name: "muted", class: "bg-muted text-muted-foreground" },
    { name: "destructive", class: "bg-destructive text-destructive-foreground" },
  ];

  const sidebarColors = [
    { name: "sidebar", class: "bg-sidebar text-sidebar-foreground" },
    {
      name: "sidebar-primary",
      class: "bg-sidebar-primary text-sidebar-primary-foreground",
    },
    {
      name: "sidebar-accent",
      class: "bg-sidebar-accent text-sidebar-accent-foreground",
    },
  ];

  const chartColors = [
    { name: "chart-1", class: "bg-chart-1" },
    { name: "chart-2", class: "bg-chart-2" },
    { name: "chart-3", class: "bg-chart-3" },
    { name: "chart-4", class: "bg-chart-4" },
    { name: "chart-5", class: "bg-chart-5" },
  ];

  const radii = [
    { name: "radius-sm", class: "rounded-[calc(var(--radius)-4px)]" },
    { name: "radius-md", class: "rounded-[calc(var(--radius)-2px)]" },
    { name: "radius-lg", class: "rounded-[var(--radius)]" },
    { name: "radius-xl", class: "rounded-[calc(var(--radius)+4px)]" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 text-foreground p-4 sm:p-8 transition-colors duration-500">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header with Glassmorphism */}
        <header className="relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 animate-pulse"></div>
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                🎨 Theme Color Showcase
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                ✨ Light & Dark mode preview + Radius styles for your design system
              </p>
            </div>

            {/* Elegant Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="group relative px-6 py-3 rounded-2xl border-2 border-primary/30 font-semibold bg-gradient-to-r from-primary/10 to-accent/10 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </span>
            </button>
          </div>
        </header>

        {/* Base Colors */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <h2 className="text-2xl font-bold">Base Colors</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {baseColors.map((c, i) => (
              <div
                key={c.name}
                className={`group relative rounded-2xl p-6 border-2 border-border/50 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center overflow-hidden ${c.class}`}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative text-sm font-semibold">{c.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Accent Colors */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-secondary to-destructive rounded-full"></div>
            <h2 className="text-2xl font-bold">Primary / Secondary / Accent</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {accentColors.map((c, i) => (
              <div
                key={c.name}
                className={`group relative rounded-2xl p-8 border-2 shadow-xl hover:shadow-2xl hover:scale-110 hover:-rotate-1 transition-all duration-300 text-center overflow-hidden ${c.class}`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-base font-bold mb-1">{c.name}</div>
                  <div className="text-xs opacity-75">Hover me!</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sidebar */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-accent to-muted rounded-full"></div>
            <h2 className="text-2xl font-bold">Sidebar Colors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sidebarColors.map((c, i) => (
              <div
                key={c.name}
                className={`group relative rounded-3xl p-8 border-2 shadow-xl hover:shadow-2xl transition-all duration-500 text-center overflow-hidden ${c.class}`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="text-lg font-bold mb-2">{c.name}</div>
                  <div className="text-sm opacity-70">Sidebar component</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chart Colors */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-chart-1 via-chart-3 to-chart-5 rounded-full"></div>
            <h2 className="text-2xl font-bold">Chart Colors</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {chartColors.map((c, i) => (
              <div
                key={i}
                className={`group ${c.class} w-28 h-28 rounded-3xl flex flex-col items-center justify-center text-white font-bold shadow-2xl hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative text-xs mb-1">{c.name}</span>
                <span className="relative text-2xl">📊</span>
              </div>
            ))}
          </div>
        </section>

        {/* Radius Section */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <h2 className="text-2xl font-bold">Border Radius</h2>
          </div>
          <div className="flex flex-wrap gap-8">
            {radii.map((r) => (
              <div
                key={r.name}
                className={`group relative bg-primary text-primary-foreground w-36 h-36 flex flex-col items-center justify-center shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-500 ${r.class} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative text-xs font-bold mb-2">{r.name}</span>
                <span className="relative text-3xl">⬜</span>
              </div>
            ))}
          </div>
        </section>

        {/* UI Examples */}
        <section className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-destructive to-accent rounded-full"></div>
            <h2 className="text-2xl font-bold">UI Examples</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative rounded-3xl p-8 shadow-2xl bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="relative font-bold text-xl mb-3">Test Playground</h3>
              <p className="relative text-sm opacity-90">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            
            <div className="group relative rounded-3xl bg-card text-card-foreground p-8 shadow-2xl border-2 border-border/50 hover:scale-105 hover:border-primary/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="relative font-bold text-xl mb-3">Card</h3>
              <p className="relative text-sm text-muted-foreground">
                bg-card + text-card-foreground
              </p>
            </div>

            <div className="group relative rounded-3xl bg-popover text-popover-foreground p-8 shadow-2xl border-2 border-border/50 hover:scale-105 hover:border-accent/50 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="relative font-bold text-xl mb-3">Popover</h3>
              <p className="relative text-sm text-muted-foreground">
                bg-popover + text-popover-foreground
              </p>
            </div>

            <div className="group relative rounded-3xl bg-destructive text-destructive-foreground p-8 shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="relative font-bold text-xl mb-3">Destructive</h3>
              <p className="relative text-sm opacity-90">bg-destructive example</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative rounded-2xl bg-card/50 backdrop-blur border border-border/30 p-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Toggle <code className="px-2 py-1 rounded bg-muted text-muted-foreground font-mono text-xs">.dark</code> class on body to preview dark mode 🌙
          </p>
          <p className="text-xs text-muted-foreground/70">
            ✨ Perfect for testing theme colors before deploying to production
          </p>
        </footer>
      </div>
    </div>
  );
}