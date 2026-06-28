export interface Activity {
  id: string;

  customer_id: string | null;

  activity_type: string;

  title: string;

  description: string;

  created_at: string;
}