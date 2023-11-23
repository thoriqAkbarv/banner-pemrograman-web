"use client"

import "@styles/home.css"
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("Thoriq Akbar Virgiawan");

  const onChange = (evt) => {
    evt.preventDefault();
    setInput(evt.target.value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setName(input);
    setInput("")
  };

  return (
    <>
      <div className="body">
        <div className="banner-container">
          <div className="header-banner-wrapper">
            <div className="profil-header-banner">
              <img
                src="assets/celsi.png"
                alt="Picture of the author"
                width={100}
                height={100}
              />
            </div>
            <div className="content-header-banner">
              <h1>{name}</h1>
              <div className="bio-nim-header-banner">
                <p>D121211024</p>
                <p>The Blues Indonesia</p>
              </div>
            </div>
          </div>

          <div className="cta-banner-wrapper">
            <input
              type="text"
              placeholder="input nama disini"
              className="input"
              value={input}
              onChange={onChange}
            />
            <button className="btn" onClick={onSubmit}>
              <p>Eyyo!</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
