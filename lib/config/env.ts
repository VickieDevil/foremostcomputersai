export const ENV = {
  APP_NAME:
    process.env.NEXT_PUBLIC_APP_NAME ??
    "Foremost Computers",

  SUPABASE_URL:
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "",

  SUPABASE_ANON_KEY:
    process.env
      .NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    "",

  META_ACCESS_TOKEN:
    process.env
      .META_ACCESS_TOKEN ?? "",

  META_PHONE_NUMBER_ID:
    process.env
      .META_PHONE_NUMBER_ID ?? "",

  GEMINI_API_KEY:
    process.env
      .GEMINI_API_KEY ?? "",
};