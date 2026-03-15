---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: order-database
id: "order-database"
title: "Order Database"
---

# Order Database

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>order-database</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Order Database</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Stores order state, line items, and order history.</td>
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
            <td>order-db-jdbc</td>
            <td>order-db.internal</td>
            <td>5432</td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
order-database[order-database]:::highlight;
ecommerce-platform-system -- Composed Of --> order-database;
order-service -- Connects --> order-database;
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
            <td>Orders Team</td>
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
