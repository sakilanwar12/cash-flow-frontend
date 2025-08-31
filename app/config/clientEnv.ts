import { getEnv } from "@/lib/getEnv";

export const clientEnv = {
  NODE_ENV: getEnv("NODE_ENV"),
  NEXT_PUBLIC_BASE_URL: getEnv("NEXT_PUBLIC_BASE_URL"),
  API_BASE_URL: getEnv("API_BASE_URL"),
};
