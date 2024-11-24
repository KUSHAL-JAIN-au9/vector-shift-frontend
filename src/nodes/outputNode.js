// outputNode.js

import { useState } from "react";
import SelectField from "../components/SelectField";
import InputField from "../components/InputField";
import { BaseNode } from "../components/BaseNode";
import { nodeStyles } from "../GlobalStyle";

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(
    data?.outputName || id.replace("customOutput-", "output_")
  );
  const [outputType, setOutputType] = useState(data.outputType || "Text");

  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-value`}
    //   />
    //   <div>
    //     <span>Output</span>
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
    //       <select value={outputType} onChange={handleTypeChange}>
    //         <option value="Text">Text</option>
    //         <option value="File">Image</option>
    //       </select>
    //     </label>
    //   </div>
    // </div>
    <BaseNode
      id={id}
      title="Output"
      inputs={[{ id: "value" }]}
      colors={nodeStyles}
    >
      <InputField
        label="Name"
        value={currName}
        onChange={(e) => setCurrName(e.target.value)}
      />
      <SelectField
        label="Type"
        value={outputType}
        onChange={(e) => setOutputType(e.target.value)}
        options={[
          { label: "Text", value: "Text" },
          { label: "Image", value: "File" },
        ]}
      />
    </BaseNode>
  );
};
