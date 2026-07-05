import { supabase } from "@/lib/supabase";

export abstract class BaseRepository {

  protected db = supabase;

  protected async execute<T>(
    promise: Promise<{
      data: T | null;
      error: unknown;
    }>
  ): Promise<T> {

    const result =
      await promise;

    if (result.error) {

      throw result.error;

    }

    return result.data as T;

  }

}