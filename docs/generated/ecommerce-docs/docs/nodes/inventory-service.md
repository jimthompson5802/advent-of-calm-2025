---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: inventory-service
id: "inventory-service"
title: "Inventory Service"
---

# Inventory Service

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>inventory-service</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Inventory Service</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Tracks stock levels and reserves inventory for confirmed orders.</td>
        </tr>
        <tr>
            <th>Node Type</th>
            <td>service</td>
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
            <td>inventory-service-http</td>
            <td>inventory-service.internal</td>
            <td>8081</td>
        </tr>
        <tr>
            <td>inventory-service-db-client</td>
            <td></td>
            <td></td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
inventory-service[inventory-service]:::highlight;
ecommerce-platform-system -- Composed Of --> inventory-service;
api-gateway -- Connects --> inventory-service;
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
            <td>container</td>
        </tr>
        <tr>
            <th>Runtime</th>
            <td>go</td>
        </tr>
        <tr>
            <th>Sla Tier</th>
            <td>tier-2</td>
        </tr>
        </tbody>
    </table>
</div>
