import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="Sumz Logo" className="w-28 object-contain" />

        <button 
          type="button" 
          onClick={() => window.open('https://github.com/kenliii')} 
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize articles with <br className="max-md:hidden" /> 
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Make your reading easier with Summize, a free article summarization tool 
        that turns long articles into short and easy-to-understand summaries.
      </h2>
    </section>
  )
}

export default Hero;
