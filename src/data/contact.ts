import type { ContactConfig } from "@/types/contact";

// Contact configuration
// Tip: To create your own config from scratch, copy src/data/contact.template.ts to src/data/contact.ts
// and follow the inline comments.
export const CONTACT: ContactConfig = {
  enabled: true,
  // If not provided, the code will fall back to NEXT_PUBLIC_FORMSUBMIT_ENDPOINT env var
  // formEndpoint: "https://formsubmit.co/ajax/youremail@example.com",
  successMessage: "Message sent successfully. Thank you!",
  errorMessage: "Failed to send message. Please try again.",
};
