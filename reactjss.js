function Person(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "person" }, /*#__PURE__*/
    React.createElement("h1", null, props.name), /*#__PURE__*/
    React.createElement("p", null, "Age: ", props.age)));


}
var app = /*#__PURE__*/
React.createElement("div", null, /*#__PURE__*/
React.createElement(Person, { name: "donattah", age: "26" }), /*#__PURE__*/
React.createElement(Person, { name: "Anthony", age: "27" }));


ReactDOM.render(app, document.querySelector('#app'));