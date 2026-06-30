import { supabase } from "../lib/supabase";
import { TimelineItem } from "../types/timeline";

export class TimelineService {
  // Get timeline for one customer
  static async getCustomerTimeline(
    customerId: string
  ): Promise<TimelineItem[]> {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("customer_id", customerId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data || []).map((item: any) => ({
    id: item.id,

    customer_id: item.customer_id,

    type:
      item.activity_type ||
      item.type ||
      "Activity",

    title:
      item.title ||
      item.activity_name ||
      "Activity",

    description:
      item.description ||
      item.remarks ||
      "",

    status:
      item.status ||
      "Success",

    created_at: item.created_at,

    created_by:
      item.created_by ||
      "System",

    icon:
      item.icon ||
      "📌",
}));
  }

  // Add activity
  static async createTimeline(
    item: Partial<TimelineItem>
  ) {
    const { data, error } =
      await supabase
        .from("activities")
        .insert([
          {
            customer_id:
              item.customer_id,

            title: item.title,

            description:
              item.description,

            activity_type:
              item.type,

            created_by:
              item.created_by ||
              "Admin",
          },
        ])
        .select()
        .single();

    if (error) throw error;

    return data;
  }

  // Delete activity
  static async deleteTimeline(
    id: string
  ) {
    const { error } =
      await supabase
        .from("activities")
        .delete()
        .eq("id", id);

    if (error) throw error;

    return true;
  }
}

// -----------------------------

function getTimelineIcon(
  type?: string
) {
  switch (type) {
    case "Customer":
      return "👤";

    case "Document":
      return "📄";

    case "Billing":
      return "💰";

    case "Payment":
      return "💳";

    case "Service":
      return "🛠";

    case "Login":
      return "🔐";

    default:
      return "📝";
  }
}

function getTimelineColor(
  type?: string
) {
  switch (type) {
    case "Customer":
      return "#2563eb";

    case "Document":
      return "#16a34a";

    case "Billing":
      return "#ea580c";

    case "Payment":
      return "#0891b2";

    case "Service":
      return "#7c3aed";

    case "Login":
      return "#dc2626";

    default:
      return "#64748b";
  }
}