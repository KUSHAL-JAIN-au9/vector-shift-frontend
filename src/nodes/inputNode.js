// inputNode.js

import { useState } from "react";
import { BaseNode } from "../components/BaseNode";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import { nodeStyles } from "../GlobalStyle";

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.inputName || id.replace("customInput-", "input_")
  );
  const [inputType, setInputType] = useState(data.inputType || "Text");

  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <div>
    //     <span>Input</span>
    //   </div>
    //   <div>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         value={currName}
    //         onChange={handleNameChange}
    //       />
    //     </label>
    //     <label>
    //       Type:
    //       <select value={inputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">File</option>
    //       </select>
    //     </label>
    //   </div>
    //   <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-value`}
    //   />
    // </div>
    <BaseNode
      id={id}
      title="Input"
      outputs={[{ id: "value" }]}
      colors={nodeStyles}
    >
      <InputField
        label="Name"
        value={currName}
        onChange={(e) => {
          const newValue = e.target.value;
          setCurrName(newValue);
        }}
      />

      <SelectField
        label="Type"
        value={inputType}
        onChange={(e) => setInputType(e.target.value)}
        options={[
          { label: "Text", value: "Text" },
          { label: "File", value: "File" },
        ]}
      />
    </BaseNode>
  );
};
