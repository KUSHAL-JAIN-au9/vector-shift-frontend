import React from "react";
import { Handle, Position } from "reactflow";
import styled from "styled-components";

export const BaseNode = ({
  id,
  title,
  children,
  inputs = [],
  outputs = [],
  style = {},
  colors = {},
  dynamicStyle = {},
}) => {
  // Styled Container
  const NodeContainer = styled.div`
    width: 220px;
    padding: 16px;
    background-color: ${(props) => props.bgColor || "#f5f5f5"};
    border: 2px solid ${(props) => props.borderColor || "#fff"};
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: "Arial", sans-serif;
    font-size: 14px;
    color: #fff;
  `;

  // Styled Header
  const NodeHeader = styled.div`
    font-weight: bold;
    margin-bottom: 12px;
    text-align: center;
    color: ${(props) => props.color || "#fff"};
    background-color: ${(props) => props.bgColor || "#333"};
    border-radius: 4px;
    padding: 8px;
  `;

  // Styled Content
  const NodeContent = styled.div`
    margin-bottom: 12px;
  `;

  return (
    <NodeContainer
      style={style}
      bgColor={colors.bg}
      borderColor={colors.border}
    >
      <NodeHeader bgColor={colors.header} color={colors.headerText}>
        {title}
      </NodeHeader>
      <NodeContent>{children}</NodeContent>

      {/* Render input handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={{ top: `${(index + 1) * 20}px` }}
        />
      ))}

      {/* Render output handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={{ top: `${(index + 1) * 20}px` }}
        />
      ))}
    </NodeContainer>
  );
};
