#!/usr/bin/env node
/**
 * rebuild-os.js
 * Rebuilds module pages from research files using the shared module template.
 */

const path = require("path");
const { buildModule } = require("./build-module");

const ROOT = process.cwd();
const TEMPLATE = path.join(ROOT, "templates", "module-template.md");

const mappings = [
  {
    input: path.join(ROOT, "src", "research", "01-gemini-lead-generation-systems.md"),
    output: path.join(ROOT, "src", "modules", "01-lead-generation-playbook", "index.md"),
  },
  {
    input: path.join(ROOT, "src", "research", "02-gemini-agency-structures-recruiting.md"),
    output: path.join(ROOT, "src", "modules", "05-agency-growth-systems", "index.md"),
  },
  {
    input: path.join(ROOT, "src", "research", "03-gemini-sales-scripts-processes.md"),
    output: path.join(ROOT, "src", "modules", "04-sales-scripts-and-processes", "index.md"),
  },
  {
    input: path.join(ROOT, "src", "research", "04-gemini-technology-stack-tools.md"),
    output: path.join(ROOT, "src", "modules", "03-technology-stack-optimization", "index.md"),
  },
  {
    input: path.join(ROOT, "src", "research", "05-gemini-compliance-regulations.md"),
    output: path.join(ROOT, "src", "modules", "02-compliance-first-operations", "index.md"),
  },
];

function rebuildAll() {
  mappings.forEach(({ input, output }) => {
    buildModule({ input, output, template: TEMPLATE });
  });
}

if (require.main === module) {
  rebuildAll();
}
