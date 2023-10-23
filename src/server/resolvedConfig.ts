export const resolvedConfig = {
  clerk: {
    webhookSecret: process.env.CLERK_WEBHOOK_SECRET as string,
    secretKey: process.env.CLERK_SECRET_KEY as string,
  }
}