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
- Metadata on the architecture, nodes, relationships, or flows