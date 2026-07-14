import { customerRepository } from "@/repositories/customer.repository";

import { successResponse } from "@/core/api/ApiResponse";
import { createApiError } from "@/core/api/ApiError";
import { logger } from "@/core/logger/logger";

import { Customer } from "@/types/customer";

class CustomerService {

  async getCustomers() {
    try {

      const customers =
        await customerRepository.getAll();

      return successResponse(customers);

    } catch (error) {

      logger.error(error);

      throw createApiError(
        "CUSTOMERS_LOAD_ERROR",
        "Unable to load customers",
        error
      );

    }
  }

  async getCustomerById(id: string) {

    try {

      const customer =
        await customerRepository.getById(id);

      return successResponse(customer);

    } catch (error) {

      logger.error(error);

      throw createApiError(
        "CUSTOMER_NOT_FOUND",
        "Customer not found",
        error
      );

    }

  }

  async createCustomer(
    values: Partial<Customer>
  ) {

    try {

      const customer =
        await customerRepository.create(values);

      return successResponse(customer);

    } catch (error) {

      logger.error(error);

      throw createApiError(
        "CUSTOMER_CREATE_ERROR",
        "Unable to create customer",
        error
      );

    }

  }

  async updateCustomer(
    id: string,
    values: Partial<Customer>
  ) {

    try {

      const customer =
        await customerRepository.update(
          id,
          values
        );

      return successResponse(customer);

    } catch (error) {

      logger.error(error);

      throw createApiError(
        "CUSTOMER_UPDATE_ERROR",
        "Unable to update customer",
        error
      );

    }

  }

  async deleteCustomer(
    id: string
  ) {

    try {

      await customerRepository.delete(id);

      return successResponse(true);

    } catch (error) {

      logger.error(error);

      throw createApiError(
        "CUSTOMER_DELETE_ERROR",
        "Unable to delete customer",
        error
      );

    }

  }

}

export const customerService =
  new CustomerService();