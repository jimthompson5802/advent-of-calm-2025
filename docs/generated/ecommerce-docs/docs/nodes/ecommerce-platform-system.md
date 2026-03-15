---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: ecommerce-platform-system
id: "ecommerce-platform-system"
title: "E-Commerce Platform"
---

# E-Commerce Platform

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>ecommerce-platform-system</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>E-Commerce Platform</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>System boundary containing the order processing microservices.</td>
        </tr>
        <tr>
            <th>Node Type</th>
            <td>system</td>
        </tr>
        </tbody>
    </table>
</div>

## Interfaces
<p class="empty-message">No interfaces defined.</p>

## Related Nodes
```mermaid
graph TD;
ecommerce-platform-system[ecommerce-platform-system]:::highlight;
ecommerce-platform-system -- Composed Of --> api-gateway;
ecommerce-platform-system -- Composed Of --> order-service;
ecommerce-platform-system -- Composed Of --> inventory-service;
ecommerce-platform-system -- Composed Of --> payment-service;
ecommerce-platform-system -- Composed Of --> order-database;
ecommerce-platform-system -- Composed Of --> inventory-database;
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
            <td>Platform Architecture</td>
        </tr>
        <tr>
            <th>Repository</th>
            <td>https://example.com/repo</td>
        </tr>
        <tr>
            <th>Deployment Type</th>
            <td>cloud</td>
        </tr>
        </tbody>
    </table>
</div>
