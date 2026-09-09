import { useEffect, useState } from "react";
import styled from "styled-components";

const Track = styled.div`
  width: 300px;
  height: 8px;
  border-radius: 4px;
  background: #dfe6e9;
`;

const Bar = styled.div`
  height: 8px;
  border-radius: 4px;
  background: #6c5ce7;
  width: ${({ percent }) => percent}%;
  transition: width 0.3s ease;
`;

const Label = styled.p`
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  color: #2d3436;
`;

export default function Demo3() {
    const [uploadProgress, setUploadProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setUploadProgress((prev) => (prev >= 100 ? 0 : prev + 7));
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Label>Uploading… {uploadProgress}%</Label>
            <Track>
                <Bar percent={uploadProgress} />
            </Track>
        </div>
    );
}
