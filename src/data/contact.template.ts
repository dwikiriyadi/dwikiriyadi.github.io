// Template for Contact section configuration
// How to use:
// 1) Copy this file to src/data/contact.ts
// 2) Set your FormSubmit endpoint or disable the form
// 3) The Contact component will read from this config

import type { ContactConfig } from "@/types/contact";

export const CONTACT: ContactConfig = {
  enabled: true,
  // You can generate an endpoint at https://formsubmit.co/
  formEndpoint: "https://formsubmit.co/ajax/youremail@example.com",
  successMessage: "Message sent successfully. Thank you!",
  errorMessage: "Failed to send message. Please try again.",
};
