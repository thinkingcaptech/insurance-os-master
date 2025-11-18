#!/usr/bin/env node
/**
 * build-module.js
 * Usage:
 *   node scripts/build-module.js --input src/research/01-gemini-lead-generation-systems.md --output modules/01-lead-generation-playbook/index.md --template templates/module-template.md
 *
 * Extracts key sections from a research markdown file and injects them into a module template.
 * Sections are resolved by heading names; missing sections fall back to a TODO placeholder.
 */

const fs = require("fs");
const path = require("path");

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith("--")) {
      const key = arg.replace(/^--/, "");
      const next = argv[i + 1];
      if (!next || next.startsWith("--")) {
        args[key] = true;
      } else {
        args[key] = next;
        i++;
      }
    }
  }
  return args;
}

function stripFrontmatter(markdown) {
  if (markdown.startsWith("---")) {
    const end = markdown.indexOf("\n---", 3);
    if (end !== -1) {
      return markdown.slice(end + 4).trimStart();
    }
  }
  return markdown;
}

function extractSection(markdown, titles) {
  const lines = markdown.split("\n");
  let collecting = false;
  const buffer = [];
  for (const line of lines) {
    const headingMatch = line.match(/^#{2,3}\s+(.*)$/);
    if (headingMatch) {
      const heading = headingMatch[1].trim().toLowerCase();
      if (collecting) break;
      if (titles.some((t) => heading.startsWith(t.toLowerCase()))) {
        collecting = true;
        continue;
      }
    }
    if (collecting) {
      buffer.push(line);
    }
  }
  const text = buffer.join("\n").trim();
  return text.length ? text : null;
}

function fillTemplate(template, data) {
  return template
    .replace(/\{\{\s*title\s*\}\}/g, data.title || "")
    .replace(/\{\{\s*summary\s*\}\}/g, data.summary || "TODO: Add summary.")
    .replace(/\{\{\s*benchmarks\s*\}\}/g, data.benchmarks || "TODO: Add key benchmarks.")
    .replace(/\{\{\s*compliance\s*\}\}/g, data.compliance || "TODO: Add compliance notes.")
    .replace(/\{\{\s*scripts\s*\}\}/g, data.scripts || "TODO: Add scripts/processes.")
    .replace(/\{\{\s*actions\s*\}\}/g, data.actions || "TODO: Add action plan.");
}

function buildModule({ input, output, template }) {
  const raw = fs.readFileSync(input, "utf8");
  const body = stripFrontmatter(raw);

  const summary =
    extractSection(body, ["Executive Summary", "Summary"]) || extractSection(body, ["Overview"]);
  const benchmarks = extractSection(body, ["Key Benchmarks", "Benchmarks"]);
  const compliance =
    extractSection(body, ["Compliance Notes", "Compliance", "Risks & Mitigations"]) ||
    extractSection(body, ["Risks"]);
  const scripts = extractSection(body, ["Scripts/Processes", "Scripts", "Process"]);
  const actions = extractSection(body, ["Action Plan", "Actions", "Next Steps"]);

  const templateContent = fs.readFileSync(template, "utf8");

  const title =
    extractSection(body, ["Title"]) ||
    (input ? path.basename(input, path.extname(input)).replace(/[-_]/g, " ") : "");

  const rendered = fillTemplate(templateContent, {
    title,
    summary,
    benchmarks,
    compliance,
    scripts,
    actions,
  });

  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, rendered, "utf8");
  console.log(`Built module: ${output}`);
}

if (require.main === module) {
  const args = parseArgs(process.argv);
  if (!args.input || !args.output || !args.template) {
    console.error(
      "Usage: node scripts/build-module.js --input <research.md> --output <module.md> --template <template.md>"
    );
    process.exit(1);
  }
  buildModule({
    input: args.input,
    output: args.output,
    template: args.template,
  });
} else {
  module.exports = { buildModule };
}
