---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: inventory-database
id: "inventory-database"
title: "Inventory Database"
---

# Inventory Database

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>inventory-database</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Inventory Database</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Stores inventory SKUs, stock levels, and reservation records.</td>
        </tr>
        <tr>
            <th>Node Type</th>
            <td>database</td>
        </tr>
        </tbody>
    </table>
</div>

## Interfaces
<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Unique Id</th>
            <th>Host</th>
            <th>Port</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>inventory-db-jdbc</td>
            <td>inventory-db.internal</td>
            <td>5432</td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
inventory-database[inventory-database]:::highlight;
ecommerce-platform-system -- Composed Of --> inventory-database;
inventory-service -- Connects --> inventory-database;
classDef highlight fill:#f2bbae;
```

## Controls
_No controls defined._

## Metadata
<div class="table-container">
    <table>
        <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th>Owner</th>
            <td>Inventory Team</td>
        </tr>
        <tr>
            <th>Repository</th>
            <td>https://example.com/repo</td>
        </tr>
        <tr>
            <th>Deployment Type</th>
            <td>managed-database</td>
        </tr>
        <tr>
            <th>Engine</th>
            <td>postgresql</td>
        </tr>
        </tbody>
    </table>
</div>
