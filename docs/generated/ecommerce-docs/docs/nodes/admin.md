---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: admin
id: "admin"
title: "Admin"
---

# Admin

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>admin</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>Admin</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Operations user who manages orders, inventory, and payment exceptions.</td>
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
admin[admin]:::highlight;
admin -- Interacts --> api-gateway;
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
            <td>Operations</td>
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
