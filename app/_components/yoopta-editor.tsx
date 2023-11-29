"use client";
import YooptaEditor from "@yoopta/editor";
import Paragraph from "@yoopta/paragraph";
import { useState } from "react";

// List of plugins should be defined outside component
const plugins = [Paragraph];

// Your custom styles
const styles = { width: 640, margin: "0 auto", padding: "40px 10px" };

export default function Editor() {
  const [value, setValue] = useState([]);

  return (
    <div style={styles}>
      <YooptaEditor
        value={value}
        onChange={(val) => setValue(val)}
        plugins={plugins}
        placeholder="Type text.."
      />
    </div>
  );
}
