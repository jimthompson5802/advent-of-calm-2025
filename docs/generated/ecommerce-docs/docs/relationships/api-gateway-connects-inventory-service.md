---
architecture: ../../../../../architectures/ecommerce-platform.json
relationship-id: api-gateway-connects-inventory-service
id: "api-gateway-connects-inventory-service"
title: "Api Gateway Connects Inventory Service"
---

# Api Gateway Connects Inventory Service

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>api-gateway-connects-inventory-service</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Routes API requests to.</td>
        </tr>
        <tr>
            <th>Protocol</th>
            <td>HTTPS</td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
api-gateway -- Connects --> inventory-service;
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
            <th>Monitoring</th>
            <td>true</td>
        </tr>
        <tr>
            <th>Latency Sla</th>
            <td>&lt; 200ms p95</td>
        </tr>
        <tr>
            <th>Availability</th>
            <td>99.9%</td>
        </tr>
        </tbody>
    </table>
</div>
