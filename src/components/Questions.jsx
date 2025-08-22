

import React, { useState } from "react";
import Title from "./Title";

const faqs = [
  {
    question: "What is matcha?",
    answer:
      "Matcha is a finely ground powder made from specially grown and processed green tea leaves. Unlike regular tea where you steep and discard the leaves, with matcha you consume the entire leaf, maximising its nutritional benefits and delivering a unique, rich flavor experience.",
  },
  {
    question: "What are the benefits of matcha?",
    answer:
      "Matcha is a nutritional powerhouse packed with antioxidants (especially catechins like EGCG), calm focused energy from caffeine + L-theanine, vitamins A, C, E, K, B-complex, chlorophyll, fiber, and amino acids. It may support metabolism, heart health, immune function, concentration, and detoxification.",
  },
  {
    question: "Why is ceremonial grade matcha special?",
    answer:
      "Ceremonial grade matcha is the highest quality available, made from the youngest tea leaves with stems and veins removed. This creates a smoother, naturally sweeter flavor without bitterness. It's traditionally used in Japanese tea ceremonies and offers the most vibrant color and delicate taste experience.",
  },
  {
    question: "Why choose matcha over coffee?",
    answer:
      "Matcha provides calm alertness without the jitters or crash. The L-theanine slows caffeine release over 4–6 hours, giving sustained energy rather than a quick spike and drop.",
  },
  {
    question: "What does matcha taste like?",
    answer:
      "Traditional matcha has an earthy, grassy flavor. Our drinks transform this into exciting taste experiences—naturally sweet, creamy, bright, and refreshing—crafted to be enjoyable even for first-time drinkers.",
  },
  {
    question: "Are your drinks healthy, vegan, gluten free?",
    answer:
      "Yes. We use nutrient-rich ceremonial grade matcha, natural ingredients, and customizable sweetness levels. Options range from indulgent treats to more health-conscious choices, with vegan and gluten-free availability.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center gap-7 p-4 sm:px-12 lg:px-24 xl:px-40 scroll-mt-30 text-gray-800 dark:text-white"
    >
      <Title title="FAQ" desc="Frequently Asked Questions" />

      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-primary dark:bg-gray-700 shadow-md hover:scale-[1.01] transition-all duration-300 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <div className="flex justify-between items-center">
              <h1 className="text-base  text-xl font-semibold">{item.question}</h1>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-md opacity-90">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
