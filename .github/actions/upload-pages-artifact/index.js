"use strict";

const { execFileSync } = require("node:child_process");
const { appendFileSync, mkdtempSync } = require("node:fs");
const { tmpdir } = require("node:os");
const { dirname, join } = require("node:path");
const { pathToFileURL } = require("node:url");

async function main() {
  const archive = process.env.INPUT_PATH;
  const output = process.env.GITHUB_OUTPUT;

  if (!archive || !output) {
    throw new Error("The artifact path or GitHub output file is unavailable.");
  }

  const toolsDirectory = mkdtempSync(join(tmpdir(), "pages-artifact-"));
  execFileSync(
    "npm",
    Array.of(
      "install",
      "--silent",
      "--no-audit",
      "--no-fund",
      "@actions/artifact@6.2.1",
    ),
    { cwd: toolsDirectory, stdio: "inherit" },
  );

  const moduleUrl = pathToFileURL(
    join(
      toolsDirectory,
      "node_modules",
      "@actions",
      "artifact",
      "lib",
      "index.js",
    ),
  ).href;
  const { DefaultArtifactClient } = await import(moduleUrl);
  const client = new DefaultArtifactClient();
  const result = await client.uploadArtifact(
    "github-pages",
    Array.of(archive),
    dirname(archive),
    { retentionDays: 1 },
  );

  console.log(`Uploaded Pages artifact ${result.id}.`);
  appendFileSync(output, `artifact_id=${result.id}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
