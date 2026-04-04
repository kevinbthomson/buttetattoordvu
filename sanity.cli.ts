import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "f70v9lhe",
    dataset: "production",
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  deployment: { autoUpdates: true },
});
