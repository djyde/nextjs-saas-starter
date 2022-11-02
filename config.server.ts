export const resolvedConfig = {
  port: process.env.PORT,
  auth: {
    github: {
      clientId: process.env.GH_CLIENTID,
      secret: process.env.GH_SECRET
    }
  },
  logto: {
    appSecret: process.env.LOGTO_APPSECRET,
    cookieSecret: process.env.LOGTO_COOKIE_SECRET,
    appId: process.env.LOGTO_APPID
  },
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
