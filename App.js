import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement("div", { id: "heading" }, [
//   React.createElement("h2", { id: "child1" }, "h1 tag in child1"),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", { id: "h1" }, "h1 inside child2"),
//     React.createElement("h2", { id: "h2" }, "h2 inside the child2"),
//   ]),
//   React.createElement("p", {}, "Normal Paragraph"),
// ]);

const title = <h2>Title for react element</h2>;

const JsxHeading = () => {
  return (
    <div>
      <h1>Hello from react jsx</h1>
      {title}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeading />);
