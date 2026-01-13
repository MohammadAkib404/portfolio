import React from "react";

export default function Footer() {
  return (
    <footer className="w-screen border-t border-border">
      <div className="mx-auto max-w-4xl px-4 py-10 text-sm text-primary">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <span>© 2026 Mohammad Akib. All rights reserved</span>
        <div className="flex items-center gap-4">
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-primary transition">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-primary transition">LinkedIn</a>
        </div>
      </div>
      </div>
    </footer>
  );
}
