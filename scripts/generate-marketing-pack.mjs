import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const rootArgument = process.argv.find((argument) => argument !== '--check' && argument !== process.argv[0] && argument !== process.argv[1]);
const root = rootArgument ? path.resolve(rootArgument) : process.cwd();
const checkOnly = process.argv.includes('--check');
const sourcePath = path.join(root, 'marketing/source/marketing-pack.json');
const outputPath = path.join(root, 'marketing/generated/marketing-pack.md');
const manifestPath = path.join(root, 'marketing/generated/review-manifest.json');

const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

if (source.publication.mode !== 'dry_run') throw new Error('Publication mode must remain dry_run.');
if (source.publication.requiresManualApproval !== true) throw new Error('Manual approval must remain enabled.');
if (source.publication.paidCampaignsAllowed !== false) throw new Error('Paid campaigns must remain disabled.');
if (source.connectors.googleAdsPublishing !== 'disabled') throw new Error('Google Ads publishing must remain disabled.');

const list = (items) => items.map((item) => `- ${item}`).join('\n');
const generated = `# Profito marketing pack — dry run

Status: AWAITING MANUAL APPROVAL

No advertisement has been published and no paid campaign is enabled.

## Gumtree PL

Remonty, wykończenia, poprawki i handyman — ${source.market}.

Zakres:

${list(source.servicesPl)}

Portfolio: ${source.portfolioUrl}

Kontakt: ${source.contact}

## Gumtree EN

Renovation, finishing, snagging and handyman work — ${source.market}.

Work examples:

${list(source.servicesEn)}

Portfolio: ${source.portfolioUrl}

Contact: ${source.contact}

## WhatsApp first reply EN

Hi, thanks for the message. Please send:

1. What needs doing
2. Area/postcode
3. Photos/video
4. When you need it
5. Any budget or priority

I’ll reply with the next step or arrange a viewing if needed.

## Quote request fields

${list(source.quoteFields)}
`;

const manifest = `${JSON.stringify({
  schemaVersion: source.schemaVersion,
  status: 'awaiting_manual_approval',
  publicationMode: source.publication.mode,
  paidCampaignsAllowed: source.publication.paidCampaignsAllowed,
  connectors: source.connectors,
  generatedFiles: ['marketing/generated/marketing-pack.md'],
}, null, 2)}\n`;

if (checkOnly) {
  if (fs.readFileSync(outputPath, 'utf8') !== generated) throw new Error('Generated marketing pack is stale.');
  if (fs.readFileSync(manifestPath, 'utf8') !== manifest) throw new Error('Marketing review manifest is stale.');
  console.log('Marketing pack check passed in dry-run mode.');
} else {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, generated, 'utf8');
  fs.writeFileSync(manifestPath, manifest, 'utf8');
  console.log('Marketing pack generated for manual approval. Nothing was published.');
}
