import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

class Foo {
  constructor() {

    this.x = 1;

  }

  print ()  {
    let print1 = () => {

      console.log("print1", this)
    };
    console.log("print", this);
    console.log(this.x);
    print1()
  };

  print2 = () => {

    console.log("print2", this)
  };
 

 

}


let foo = new Foo();
foo.print()
// foo.print1()
foo.print2()




