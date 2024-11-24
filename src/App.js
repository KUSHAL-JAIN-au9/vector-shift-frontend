import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";
import { GlobalStyle } from "./GlobalStyle";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import axios from "axios";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const baseURL = "https://vector-shift-exh1.onrender.com/";

function App() {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async (event) => {
    console.log("handleSubmit", nodes, edges);
    try {
      // Prepare data to send
      const payload = {
        nodes,
        edges,
      };
      // knkfs

      // Make POST request to backend
      const response = await axios.post(`${baseURL}/pipelines/parse`, payload);

      // Extract data from response
      const { num_nodes, num_edges, is_dag } = response.data;

      // Show alert with response details
      alert(
        `Pipeline Analysis:\n- Number of Nodes: ${num_nodes}\n- Number of Edges: ${num_edges}\n- Is DAG: ${
          is_dag ? "Yes" : "No"
        }`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert("Failed to submit pipeline. Please try again.");
    }
  };

  return (
    <div>
      <GlobalStyle />
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
