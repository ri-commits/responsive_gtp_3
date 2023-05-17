import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT,
  Header,
} from "./containers";

import { CTA, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="garadient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
