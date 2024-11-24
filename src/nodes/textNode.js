// textNode.js
import { useEffect, useState } from "react";
import { BaseNode } from "../components/BaseNode";
import InputField from "../components/InputField";
import { nodeStyles } from "../GlobalStyle";
import { Handle, Position } from "reactflow";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [handles, setHandles] = useState([]);

  useEffect(() => {}, [currText, setCurrText, handles]);

  const handleTextChange = (e) => {
    const text = e.target.value;
    setCurrText(text);

    // Extract variables from text input
    const regex = /\{\{(.*?)\}\}/g;
    const matches = Array.from(text.matchAll(regex)).map((match) => match[1]);

    // Update handles if they change
    if (JSON.stringify(handles) !== JSON.stringify(matches)) {
      setHandles(matches);
    }
  };

  // Dynamically adjust width and height based on text length
  const dynamicStyle = {
    width: Math.max(200, currText.length * 10), // Base width of 200, increasing with text length
    height: 80 + Math.max(80, Math.ceil(currText.length / 20) * 40), // Dynamic height for longer texts
    border: "1px solid black",
    padding: "8px",
  };
  console.log(dynamicStyle.height);

  return (
    <div style={{ position: "relative", ...dynamicStyle }}>
      <BaseNode
        id={id}
        title="Text"
        outputs={[{ id: "output" }]}
        colors={nodeStyles}
        // inputs={handles}
        style={dynamicStyle}
      >
        <InputField label="Text" value={currText} onChange={handleTextChange} />
      </BaseNode>

      {/* Dynamically render handles for extracted variables * */}
      {handles.map((variable, index) => (
        <Handle
          key={`handle-${variable}`}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          style={{ top: `${(index + 1) * 20}px` }}
        />
      ))}
    </div>
  );
};
