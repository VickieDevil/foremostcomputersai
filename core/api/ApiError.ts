export interface ApiError {

  success: false;

  code: string;

  message: string;

  details?: unknown;

  timestamp: string;

}

export function createApiError(

  code: string,

  message: string,

  details?: unknown

): ApiError {

  return {

    success: false,

    code,

    message,

    details,

    timestamp:
      new Date().toISOString(),

  };

}