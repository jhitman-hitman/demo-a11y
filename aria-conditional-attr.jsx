// AriaIssuesComponent.jsx
import React, { useState } from 'react';

const AriaIssuesComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <h2>User Preferences</h2>

      {/* ❌ Issue 1: aria-checked used on native input type="checkbox" */}
      <label>
        <input
          type="checkbox"
          aria-checked={isChecked ? "true" : "false"}
          checked={isChecked}
          onChange={() => setIsChecked(prev => !prev)}
        />
        Enable notifications
      </label>

      <br />

      {/* ❌ Issue 2: aria-expanded used outside of a widget that supports it (e.g., no role="treeitem", "button", or similar) */}
      <div
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded(prev => !prev)}
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          cursor: 'pointer',
          width: '200px',
          marginTop: '1rem'
        }}
      >
        Click to {isExpanded ? 'collapse' : 'expand'}
      </div>

      {isExpanded && (
        <div>
          <p>Expanded content shown here.</p>
        </div>
      )}

      <br />

      {/* ❌ Issue 3: aria-level used outside of a role="treegrid" or role="heading" */}
      <div aria-level="3">
        This div correctly uses aria-level
      </div>
    </div>
  );
};

export default AriaIssuesComponent;
