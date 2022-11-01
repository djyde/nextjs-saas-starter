import LogtoClient from "@logto/next";
import { resolvedConfig } from "./config.server";

export const singleton = async <T>(id: string, fn: () => Promise<T>) => {
  if (process.env.NODE_ENV === "production") {
    return await fn();
  } else {
    if (!global[id]) {
      global[id] = await fn();
    }
    return global[id] as T;
  }
};

export const singletonSync = <T>(id: string, fn: () => T) => {
  if (process.env.NODE_ENV === "production") {
    return fn();
  } else {
    if (!global[id]) {
      global[id] = fn();
    }
    return global[id] as T;
  }
};

export const logtoClient = new LogtoClient({
  endpoint: "https://logto.randysoft.org",
  appId: resolvedConfig.logto.appId,
  appSecret: resolvedConfig.logto.appSecret,
  baseUrl: resolvedConfig.baseUrl(), // 你可以修改为自己真实的 URL
  cookieSecret: resolvedConfig.logto.cookieSecret, // Logto 自动帮你生成的 32 位密钥
  cookieSecure: process.env.NODE_ENV === "production",
});
