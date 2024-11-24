// llmNode.js

import { BaseNode } from "../components/BaseNode";
import { nodeStyles } from "../GlobalStyle";

export const LLMNode = ({ id, data }) => {
  return (
    // <div style={{width: 200, height: 80, border: '1px solid black'}}>
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-system`}
    //     style={{top: `${100/3}%`}}
    //   />
    //   <Handle
    //     type="target"
    //     position={Position.Left}
    //     id={`${id}-prompt`}
    //     style={{top: `${200/3}%`}}
    //   />
    //   <div>
    //     <span>LLM</span>
    //   </div>
    //   <div>
    //     <span>This is a LLM.</span>
    //   </div>
    //   <Handle
    //     type="source"
    //     position={Position.Right}
    //     id={`${id}-response`}
    //   />
    // </div>
    <BaseNode
      id={id}
      title="LLM"
      inputs={[{ id: "system" }, { id: "prompt" }]}
      outputs={[{ id: "response" }]}
      colors={nodeStyles}
    >
      <p>This is an LLM Node.</p>
    </BaseNode>
  );
};