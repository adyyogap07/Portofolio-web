import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "0s3ihzjk",
  dataset: "production",
  apiVersion: "2026-09-02",
  useCdn: false,
});