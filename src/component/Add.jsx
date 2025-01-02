import React, { useState,useRef} from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const TRANSITION = {
  type: "spring",
  bounce: 0.4,
  duration: 0.8,
};

function Add() {
    const ref=useRef(null)
  const [cards, setCards] = useState([]);

  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id)); 
  };

  const addCard = () => {
    if (cards.length < 5) {
      const newCard = { id: Date.now() };
      setCards([...cards, newCard]);
    } else {
      alert("Maximum of 5 cards allowed!");
    }
  };

  return (
    <>
      <div className="fixed z-50 w-full flex justify-center bottom-48">
        <button
          className="bg-green-500 rounded-2xl py-2 px-6"
          onClick={addCard}
        >
          Add
        </button>
      </div>
      <div ref={ref} className="flex h-screen w-full flex-wrap justify-center items-center space-x-4 space-y-4 overflow-hidden">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}

            transition={TRANSITION}
          >
            <Card onDelete={deleteCard} id={card.id} referance={ref} />
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Add;
