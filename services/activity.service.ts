import { supabase } from "../lib/supabase";
import { Activity } from "../types/activity";

export class ActivityService {
  static async getAll() {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data as Activity[];
  }

  static async getCustomerActivities(customerId: string) {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data as Activity[];
  }

  static async create(activity: Partial<Activity>) {
    const { data, error } = await supabase
      .from("activities")
      .insert(activity)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  static async delete(id: string) {
    const { error } = await supabase
      .from("activities")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return true;
  }
}