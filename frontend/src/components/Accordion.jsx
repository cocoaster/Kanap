import React, { useState } from "react";
import DownArrow from "../assets/downarrow.png";
import UpArrow from "../assets/uparrow.png";

function Accordion({ items, className }) {
  const [activeAccordionIndices, setActiveAccordionIndices] = useState([]);

  function toggleAccordion(index) {
    const position = activeAccordionIndices.indexOf(index);
    const newActiveAccordionIndices = [...activeAccordionIndices];
    if (position !== -1) {
      newActiveAccordionIndices.splice(position, 1);
    } else {
      newActiveAccordionIndices.push(index);
    }
    setActiveAccordionIndices(newActiveAccordionIndices);
  }

  return (
    <div className={`accordion ${className}`} id="accordionAbout">
      {items.map((item, index) => (
        <div className={`accordion-item ${className}-item`} key={index}>
          <h2 className="accordion-header">
            <button
              type="button"
              className={`accordion-button ${className}-button`}
              onClick={() => toggleAccordion(index)}
            >
              {item.title}
              {activeAccordionIndices.includes(index) ? (
                <img
                  src={UpArrow}
                  alt="arrow-up"
                  className={`arrows ${className}-arrow active`}
                />
              ) : (
                <img
                  src={DownArrow}
                  alt="arrow-down"
                  className={`arrows ${className}-arrow active`}
                />
              )}
            </button>
          </h2>
          <section
            className={`accordion-body collapse ${
              activeAccordionIndices.includes(index) ? "show" : ""
            } ${className}-body`}
            id={`about-${item.title.toLowerCase()}`}
          >
            {item.content}
          </section>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
