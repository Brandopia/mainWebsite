// Cal.com Configuration
// Update these values to customize your Cal.com integration

export const CAL_CONFIG = {
  // 🔥 UPDATE THIS: Your Cal.com username/team name
  // Example: If your Cal.com link is "https://cal.com/john-doe/consultation"
  username: "ecosystem",

  // 🔥 UPDATE THIS: Your event type slug (the part after the username)
  // Example: If your Cal.com link is "https://cal.com/john-doe/consultation"
  eventType: "1-hr-meeting",

  // Full Cal.com link (used for embed + fallback)
  get fullLink() {
    return `${this.username}/${this.eventType}`;
  },

  // Namespace — used for identifying the correct Cal instance
  namespace: "1-hr-meeting",

  // Default UI configuration
  ui: {
    hideEventTypeDetails: false,
    layout: "month_view" as const,
    width: 700,   // width of the popup in pixels
    height: 800,
  },

  // Cal.com origin
  origin: "https://cal.com",

  // ✅ Correct embed script URL (universal version)
  embedScriptUrl: "https://cal.com/embed/embed.js",
};

// Helper: attributes for embed buttons
export const getCalAttributes = (customConfig?: Partial<typeof CAL_CONFIG>) => {
  const config = { ...CAL_CONFIG, ...customConfig };

  return {
    "data-cal-link": config.fullLink,
    "data-cal-namespace": config.namespace,
    "data-cal-config": JSON.stringify(config.ui),
  };
};

// Helper: exportable script configuration (if needed)
export const getCalScriptConfig = () => ({
  username: CAL_CONFIG.username,
  eventType: CAL_CONFIG.eventType,
  namespace: CAL_CONFIG.namespace,
  origin: CAL_CONFIG.origin,
  embedScriptUrl: CAL_CONFIG.embedScriptUrl,
  ui: CAL_CONFIG.ui,
});