import { customerRepository }
  from "@/repositories/customer.repository";

import {
  successResponse,
} from "@/core/api/ApiResponse";

import {
  createApiError,
} from "@/core/api/ApiError";

import { logger }
  from "@/core/logger/logger";

class CustomerService {

  async getCustomers() {

    try {

      const customers =
        await customerRepository.getAll();

      return successResponse(
        customers,
        "Customers loaded successfully."
      );

    } catch (error) {

      logger.error(
        error,
        "Unable to load customers."
      );

      throw createApiError(
        "CUSTOMERS_LOAD_ERROR",
        "Unable to load customers.",
        error
      );

    }

  }

}

export const customerService =
  new CustomerService();