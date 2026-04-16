import { createServerFn } from "@tanstack/react-start";
import { getPool } from "./db.server";

interface SubmissionInput {
  formType: string;
  data: Record<string, unknown>;
}

export const submitFormData = createServerFn({ method: "POST" })
  .inputValidator((input: SubmissionInput) => {
    if (!input.formType || typeof input.formType !== "string") {
      throw new Error("formType is required");
    }
    if (!input.data || typeof input.data !== "object") {
      throw new Error("data is required");
    }
    return input;
  })
  .handler(async ({ data }) => {
    try {
      const pool = getPool();
      await pool.query(
        `INSERT INTO form_submissions (form_type, data) VALUES ($1, $2)`,
        [data.formType, JSON.stringify(data.data)]
      );
      return { success: true };
    } catch (error) {
      console.error("Failed to save form submission:", error);
      return { success: false, error: "Failed to save submission" };
    }
  });
