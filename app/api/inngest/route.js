import { serve } from "inngest/next";

export const dynamic = "force-dynamic"; // 👈 مهم فـ Next.js 13+ App Router

// Lazy imports
const handler = async () => {
  const { inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } = await import("@/config/inngest");

  return serve({
    client: inngest,
    functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
  });
};

export const GET = async (...args) => {
  const { GET } = await handler();
  return GET(...args);
};

export const POST = async (...args) => {
  const { POST } = await handler();
  return POST(...args);
};

export const PUT = async (...args) => {
  const { PUT } = await handler();
  return PUT(...args);
};
