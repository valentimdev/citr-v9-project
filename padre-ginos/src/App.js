const Pizza = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Ginos"),
    React.createElement(Pizza, {
      name: "Cheese Pizza",
      description: "a Pizza",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "a Pizza",
    }),
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
