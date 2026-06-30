export type TimelineType =
  | "Customer"
  | "Service"
  | "Billing"
  | "Document"
  | "Activity"
  | "WhatsApp"
  | "Reminder"
  | "Login"
  | "AI";

export type TimelineStatus =
  | "Success"
  | "Pending"
  | "Warning"
  | "Failed";

export interface Timeline {
  id: string;

  customer_id: string;

  type: TimelineType;

  title: string;

  description: string;

  status: TimelineStatus;

  icon?: string;

  created_by: string;

  created_at: string;
}

export interface TimelineCreate {
  customer_id: string;

  type: TimelineType;

  title: string;

  description: string;

  status: TimelineStatus;

  icon?: string;

  created_by: string;
}

/*
|--------------------------------------------------------------------------
| Backward Compatibility
|--------------------------------------------------------------------------
| Project ke kuch purane components TimelineItem use kar rahe hain.
| Is alias ki wajah se purani files bhi bina error ke chalengi.
|--------------------------------------------------------------------------
*/

export type TimelineItem = Timeline;