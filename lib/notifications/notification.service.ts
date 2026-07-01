export class NotificationService {
  success(message: string) {
    console.log(
      "SUCCESS",
      message
    );
  }

  error(message: string) {
    console.log(
      "ERROR",
      message
    );
  }

  warning(message: string) {
    console.log(
      "WARNING",
      message
    );
  }

  info(message: string) {
    console.log(
      "INFO",
      message
    );
  }
}

export const notificationService =
  new NotificationService();