export interface RequestContext {

  requestId: string;

  ip?: string;

  userAgent?: string;

  userId?: string;

  role?: string;

  timestamp: string;

}

export function createRequestContext(): RequestContext {

  return {

    requestId:

      crypto.randomUUID(),

    timestamp:

      new Date().toISOString(),

  };

}