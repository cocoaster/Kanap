import React, { useState } from "react";
import DownArrow from "../assets/downarrow.png";
import UpArrow from "../assets/uparrow.png";

function Accordion({ items, className }) {
  
      const [activeAccordionIndex, setActiveAccordionIndex] = useState(-1);
    
      function toggleAccordion(index) {
        setActiveAccordionIndex((prevIndex) => (prevIndex === index ? -1 : index));
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
                  {activeAccordionIndex === index ? (
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
                  activeAccordionIndex === index ? "show" : ""
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

      
      