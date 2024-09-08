import React, { useRef, useEffect } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import Card from "./Card"; 

const CardsContainer = ({ items }) => {
  const containerRef = useRef(null);
  const innerContentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(Draggable); 

    Draggable.create(innerContentRef.current, {
      type: "x",
      bounds: containerRef.current,
      throwProps: true, 
      inertia: true, 
    });
  }, []);

  return (
    <div className="cards-container" ref={containerRef}>
      <div className="cards-inner-content" ref={innerContentRef}>
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
