export const resolvedConfig = {
  port: process.env.PORT,
  baseUrl() {
    if (typeof window !== "undefined")
      // browser should use relative path
      return "";
    if (process.env.VERCEL_URL)
      // reference for vercel.com
      return `https://${process.env.VERCEL_URL}`;
    if (process.env.RENDER_INTERNAL_HOSTNAME)
      // reference for render.com
      return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${resolvedConfig.port}`;
    // assume localhost
    return `http://localhost:${resolvedConfig.port ?? 3000}`;
  },
};
