# My Advent of CALM Journey

This repository tracks my 24-day journey learning the Common Architecture Language Model (CALM).

## Progress

- [x] Day 1: Install CALM CLI and Initialize Repository
- [x] Day 2: Create Your First Node
- [x] Day 3: Connect Nodes with Relationships
- [x] Day 4: Install CALM VSCode Extension
- [x] Day 5: Add Interfaces to Nodes
- [x] Day 6: Document with Metadata
...

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

## Docs

Generated documentation from CALM models.