import Router from "./Router";
import reportWebVitals from "./reportWebVitals";

import { AppRegistry } from "react-native";

AppRegistry.registerComponent("Router", () => Router);
AppRegistry.runApplication("Router", { rootTag: document.getElementById("root") });

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
