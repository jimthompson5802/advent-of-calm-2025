---
architecture: ../../../../../architectures/ecommerce-platform.json
relationship-id: order-service-connects-payment-service
id: "order-service-connects-payment-service"
title: "Order Service Connects Payment Service"
---

# Order Service Connects Payment Service

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>order-service-connects-payment-service</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Authorizes and captures payments via.</td>
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
order-service -- Connects --> payment-service;
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
            <th>Timeout</th>
            <td>2s</td>
        </tr>
        <tr>
            <th>Retries</th>
            <td>2</td>
        </tr>
        </tbody>
    </table>
</div>
