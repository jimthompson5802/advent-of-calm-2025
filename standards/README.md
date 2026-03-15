# Standards

Standards are JSON Schema documents that extend CALM components with
organization-specific requirements. They compose the core CALM schemas using
`allOf`, which lets us keep the base CALM definition while adding required
properties and constraints.

## Company Node Standard

The node standard adds these required fields:

- `costCenter`: string matching the pattern `CC-` followed by four digits
- `owner`: string naming the responsible team or individual
- `environment`: one of `development`, `staging`, `production`

## Company Relationship Standard

The relationship standard adds these required fields:

- `dataClassification`: one of `public`, `internal`, `confidential`, `restricted`
- `encrypted`: boolean indicating if the connection is encrypted in transit