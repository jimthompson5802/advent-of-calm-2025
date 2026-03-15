# My Advent of CALM Journey

This repository tracks my 24-day journey learning the Common Architecture Language Model (CALM).

## Progress

- [x] Day 1: Install CALM CLI and Initialize Repository
- [x] Day 2: Create Your First Node
- [x] Day 3: Connect Nodes with Relationships
- [x] Day 4: Install CALM VSCode Extension
- [x] Day 5: Add Interfaces to Nodes
- [x] Day 6: Document with Metadata
- [x] Day 7: Build Complete E-Commerce Architecture
- [x] Day 8: Add Controls (security, performance, compliance)
- [x] Day 9: Add Flows (order processing, inventory check) and Flow Controls (audit logging)
- [x] Day 10: Linked ADRs to the e-commerce architecture (`adrs`)
- [x] Day 11: Generated a documentation website (Docusaurus) for the e-commerce docs
- [x] Day 12: Used CALM documentation widgets to reduce manual doc work
- [x] Day 13: Learned Handlebars templating for custom documentation
- [x] Day 14: AI-assisted architecture resilience improvements documented in [docs/architecture-improvements.md](docs/architecture-improvements.md)
- [x] Day 15: Added operational metadata for support documentation
- [x] Day 16: Generated operations documentation from docify templates
- [x] Day 17: Completed pattern examples
- [x] Day 18: Created company-specific node and relationship schema extensions
- [x] Day 19: Created sample company patterns and url-mapping.json
...

## Documentation website (Day 11)

Day 11 produced a Docusaurus documentation website for the generated e-commerce architecture docs.

- Generated site source: [docs/generated/ecommerce-docs](docs/generated/ecommerce-docs)
- Features: Mermaid diagrams enabled (`@docusaurus/theme-mermaid`) + local full-text search (`docusaurus-plugin-search-local`)
- Run locally:

```bash
cd docs/generated/ecommerce-docs
npm install
npm start
```

- Static output (after `npm run build`): `docs/generated/ecommerce-docs/build/`

## Tools

### CALM CLI (installed Day 1)

Used for:
- **Generation**: create architectures from patterns (`calm generate`)
- **Validation**: check architectures/patterns against CALM rules (`calm validate`)
- **Templates**: render docs/artifacts from architectures (`calm template`, `calm docify`)

Basic commands:

```bash
# Show available commands
calm

# Validate an architecture (recommended during editing)
calm validate -a architectures/my-first-architecture.json --strict -f pretty

# Validate the e-commerce platform architecture
calm validate -a architectures/ecommerce-platform.json -f pretty

# Generate an architecture from a pattern
calm generate -p patterns/my-pattern.json -o architectures/generated.json

# Render output from templates
calm template -a architectures/my-first-architecture.json -o out/
```

### CALM VS Code Extension (installed Day 4)

Marketplace: https://marketplace.visualstudio.com/items?itemName=FINOS.calm-vscode-plugin

Provides:
- **Visualization** of nodes and relationships
- **Tree navigation** for browsing architecture elements
- **Live preview** for quickly iterating on changes

Keyboard shortcut:
- Open preview: **Ctrl+Shift+C** (Windows/Linux) / **Cmd+Shift+C** (macOS)

### How they work together

- Use the **CLI** for fast, repeatable **validation** (and generation/templates in automation).
- Use the **VS Code extension** for interactive **visualization** and navigation while authoring.

## Architectures

This directory will contain CALM architecture files documenting systems.

## Patterns

This directory will contain CALM patterns for architectural governance.

## Standards

This directory contains CALM Standards that extend core schemas with
organization-specific requirements. See [standards/README.md](standards/README.md)
for details.

## Docs

Guides and screenshots supporting this repo:

- Architecture Decision Records (ADRs)
  - [ADR 0001: Use Message Queue for Asynchronous Order Processing](docs/adr/0001-use-message-queue-for-async-processing.md)
  - [ADR 0002: Use OAuth2 for API Authentication](docs/adr/0002-use-oauth2-for-api-authentication.md)
- [docs/controls-guide.md](docs/controls-guide.md): how we model architecture/node/flow controls
- [docs/flows-guide.md](docs/flows-guide.md): how we model business flows and transitions
- [docs/screenshots](docs/screenshots): screenshots used in the journey
