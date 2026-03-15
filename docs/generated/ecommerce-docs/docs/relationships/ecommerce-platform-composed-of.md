---
architecture: ../../../../../architectures/ecommerce-platform.json
relationship-id: ecommerce-platform-composed-of
id: "ecommerce-platform-composed-of"
title: "Ecommerce Platform Composed Of"
---

# Ecommerce Platform Composed Of

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>ecommerce-platform-composed-of</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>System boundary is composed of the platform services and data stores.</td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
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
<p class="empty-message">No metadata defined.</p>
