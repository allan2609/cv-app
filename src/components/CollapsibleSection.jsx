import { useState } from "react";
import "./CollapsibleSection.css";

export default function CollapsibleSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="collapsible-section">
      <div className="collapsible-header" onClick={toggleOpen}>
        <span>{isOpen ? "−" : "+"}</span>
        <h3>{title}</h3>
      </div>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}
