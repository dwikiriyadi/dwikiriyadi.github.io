export interface ContactConfig {
  enabled?: boolean; // if false, form is hidden (use socials/mailto instead)
  formEndpoint?: string; // e.g. https://formsubmit.co/ajax/youremail@example.com
  successMessage?: string;
  errorMessage?: string;
}