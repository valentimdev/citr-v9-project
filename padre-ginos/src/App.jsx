import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
import React from "react";
const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
        name="Pepperoni"
        description="pep, cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="Cheese"
        description="cheese, n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      ></Pizza>
      <Pizza
        name="Doritos"
        description="doritos n stuff"
        image={"/public/pizzas/pepperoni.webp"}
      ></Pizza>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
