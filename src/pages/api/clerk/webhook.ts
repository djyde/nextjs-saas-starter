import type { IncomingHttpHeaders } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { WebhookRequiredHeaders } from 'svix';
import type { UserJSON, WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';
import { resolvedConfig } from '../../../server/resolvedConfig';
import { UserDAO } from '../../../server/dao/user.dao';

export default async function handler(
  req: NextApiRequestWithSvixRequiredHeaders,
  res: NextApiResponse
) {
  const payload = JSON.stringify(req.body);
  const headers = req.headers;
  // Create a new Webhook instance with your webhook secret
  const wh = new Webhook(resolvedConfig.clerk.webhookSecret);

  let evt: WebhookEvent;
  try {
    // Verify the webhook payload and headers
    evt = wh.verify(payload, headers) as WebhookEvent;
  } catch (_) {
    // If the verification fails, return a 400 error
    return res.status(400).json({});
  }

  const { id, first_name, last_name, image_url } = evt.data as UserJSON;

  const eventType = evt.type;
  switch (eventType) {
    case 'user.created':
    case 'user.updated':
      {
        const userDAO = new UserDAO()
        const user = await userDAO.upsert(id, {
          firstName: first_name,
          lastName: last_name,
          imageUrl: image_url
        })
      }
  }
}

type NextApiRequestWithSvixRequiredHeaders = NextApiRequest & {
  headers: IncomingHttpHeaders & WebhookRequiredHeaders;
};