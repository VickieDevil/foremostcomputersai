export const logger = {

  info(
    message: string,
    data?: unknown
  ) {

    console.info(
      "[INFO]",
      message,
      data
    );

  },

  success(
    message: string,
    data?: unknown
  ) {

    console.log(
      "[SUCCESS]",
      message,
      data
    );

  },

  warn(
    message: string,
    data?: unknown
  ) {

    console.warn(
      "[WARN]",
      message,
      data
    );

  },

  error(
    error: unknown,
    message = "Application Error"
  ) {

    if (error instanceof Error) {

      console.error(
        "[ERROR]",
        message,
        error.message,
        error.stack
      );

      return;

    }

    console.error(
      "[ERROR]",
      message,
      error
    );

  },

  audit(
    action: string,
    data?: unknown
  ) {

    console.log(
      "[AUDIT]",
      action,
      data
    );

  },

};