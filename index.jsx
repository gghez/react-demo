import React from "react";
import {render } from "react-dom";

import {App} from "./app.jsx";

// const App = (props) => <h1>{props.text}</h1>;


render(<App text="Hello World!" />, document.getElementById('app'));
