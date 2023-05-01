import React, { useState } from "react";
import DownArrow from "../assets/downarrow.png";
import UpArrow from "../assets/uparrow.png";

function Accordion({ items, className }) {

  const [activeAccordionIndexes, setActiveAccordionIndexes] = useState([]);

  function toggleAccordion(index) {
    if (activeAccordionIndexes.includes(index)) {
      setActiveAccordionIndexes(
        activeAccordionIndexes.filter((i) => i !== index)
      );
    } else {
      setActiveAccordionIndexes([...activeAccordionIndexes, index]);
    }

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

              <img
                src={
                  activeAccordionIndexes.includes(index) ? UpArrow : DownArrow
                }
                alt={`arrow-${
                  activeAccordionIndexes.includes(index) ? "up" : "down"
                }`}
                className={`arrows ${className}-arrow active`}
              />

            </button>
          </h2>
          <section
            className={`accordion-body collapse ${

              activeAccordionIndexes.includes(index) ? "show" : ""

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
