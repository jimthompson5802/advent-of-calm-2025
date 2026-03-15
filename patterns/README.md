# Patterns

Patterns are CALM JSON schemas that capture a reusable architecture template.
Their dual superpower is generation (scaffold an architecture) and validation
(enforce the template on real architectures).

## Using web-app-pattern.json

Generation:

```bash
calm generate -p patterns/web-app-pattern.json -o my-app.json
```

Validation:

```bash
calm validate -p patterns/web-app-pattern.json -a my-app.json
```

## What the pattern enforces

- Exactly three nodes: web-frontend, api-service, app-database
- Exactly two relationships: frontend-to-api, api-to-database

## What is flexible

- Node and relationship descriptions
- Interfaces on nodes

## Using company-base-pattern.json

This base pattern enforces Standards only, not architecture structure. It
applies the company node and relationship Standards to every node and
relationship in the architecture.

### How it differs from web-app-pattern.json

- `web-app-pattern.json` constrains structure (specific nodes and relationships)
- `company-base-pattern.json` constrains properties (standards on all nodes and relationships)

### When to use each pattern type

- Use `web-app-pattern.json` when you need a fixed 3-tier web app shape
- Use `company-base-pattern.json` when you want any architecture to meet company Standards

### Validate any architecture against company Standards

Use URL mapping so the pattern can resolve the local Standards files:

```bash
calm validate \
	-p patterns/company-base-pattern.json \
	-a architectures/my-architecture.json \
	-u /path/to/calm-url-mapping.json
```
- Metadata on the architecture, nodes, relationships, or flows