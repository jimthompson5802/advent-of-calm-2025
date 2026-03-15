---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: customer
id: "customer"
title: "Customer"
---

# Customer

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>customer</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Customer</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>End user who browses the store and places orders.</td>
        </tr>
        <tr>
            <th>Node Type</th>
            <td>actor</td>
        </tr>
        </tbody>
    </table>
</div>

## Interfaces
<p class="empty-message">No interfaces defined.</p>

## Related Nodes
```mermaid
graph TD;
customer[customer]:::highlight;
customer -- Interacts --> api-gateway;
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
            <td>Customer</td>
        </tr>
        <tr>
            <th>Repository</th>
            <td>https://example.com/repo</td>
        </tr>
        <tr>
            <th>Deployment Type</th>
            <td>n/a</td>
        </tr>
        </tbody>
    </table>
</div>
