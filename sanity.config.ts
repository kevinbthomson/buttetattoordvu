import { defineConfig, isDev } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./src/schemaTypes";

export default defineConfig({
  name: "buttetattoordvu",
  title: "Butte Montana Tattoo",
  projectId: "f70v9lhe",
  dataset: "production",
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
