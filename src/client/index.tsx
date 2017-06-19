import * as React from "react";
import * as ReactDOM from "react-dom";

//import { Hello } from "./components/Hello";
import AceEditor from "react-ace";

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

/*
ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
*/
function onChange(newValue) {
  console.log('change',newValue);
}

// Render editor
ReactDOM.render(
  <AceEditor
    mode="javascript"
    theme="solarized_dark"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    
  />,
  document.getElementById('example')
);