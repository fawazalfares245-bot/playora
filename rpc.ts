// RPC / API client initialization
//
// In production (Railway), EXPO_PUBLIC_API_URL is injected at build/runtime and
// should point at the deployed Railway service domain, e.g.:
//   EXPO_PUBLIC_API_URL=https://${{ gregarious-bravery.RAILWAY_PUBLIC_DOMAIN }}
//
// Locally, it falls back to the dev server running on localhost.
const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";

export { API_URL };

export function createRpcClient(baseUrl: string = API_URL) {
  return {
    baseUrl,
    async request(path: string, init?: RequestInit) {
      const response = await fetch(`${baseUrl}${path}`, init);

      if (!response.ok) {
        throw new Error(
          `RPC request to ${path} failed with status ${response.status}`
        );
      }

      return response.json();
    },
  };
}

export const rpc = createRpcClient();
