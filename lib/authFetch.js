// lib/authFetch.js
export const authFetch = async (url, options = {}) => {
  const authHeader = localStorage.getItem("authHeader");
  const headers = {
    ...options.headers,
    ...(authHeader ? { Authorization: authHeader } : {}),
  };
  return fetch(url, { ...options, headers });
};