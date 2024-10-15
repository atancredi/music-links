"use client";

import "./Link.css";

export default function Link(props) {

  return (
    <button className="linkbutton" onClick={() => {window.location.href = props.url}}>
      {props.title}
    </button>
  );
}
