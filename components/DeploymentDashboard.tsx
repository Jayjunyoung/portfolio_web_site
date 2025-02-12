"use client";

import { useEffect, useState } from "react";

interface Deployment {
  created: number;
  readyState: string;
}

interface DeploymentResponse {
  deployments: Deployment[];
}

export default function DeploymentDashboard() {
  const [deployments, setDeployments] = useState<DeploymentResponse | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/deployments")
      .then((res) => res.json())
      .then((data) => setDeployments(data))
      .catch((err) =>
        setError(err instanceof Error ? err.message : "오류 발생")
      );
  }, []);

  const containerClass =
    "hidden sm:block fixed bottom-4 left-4 p-2 bg-gray-800 rounded-lg text-white text-sm z-50";

  if (error) return <div className={containerClass}>Error: {error}</div>;
  if (!deployments)
    return <div className={containerClass}>Loading deployment info...</div>;

  // 가장 최근 배포 정보 가져오기
  const latestDeployment = deployments.deployments?.[0];

  return (
    <div className={containerClass}>
      {latestDeployment ? (
        <p>
          <strong>Last Deployed:</strong>{" "}
          {new Date(latestDeployment.created).toLocaleString()}
        </p>
      ) : (
        <p>No deployments found.</p>
      )}
    </div>
  );
}
