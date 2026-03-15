---
architecture: ../../../../../architectures/ecommerce-platform.json
node-id: api-gateway
id: "api-gateway"
title: "API Gateway"
---

# API Gateway

## Details
<div class="table-container">
    <table>
        <tbody>
        <tr>
            <th>Unique Id</th>
            <td>api-gateway</td>
        </tr>
        <tr>
            <th>Name</th>
            <td>API Gateway</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>Edge service providing a single entry point for customer and admin requests.</td>
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
            <th>Key</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td><b>Unique Id</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Value</b></td>
                            <td>
                                api-gateway-public-https
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Unique Id</b></td>
                            <td>
                                unique-id
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        <tr>
            <td><b>Url</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Value</b></td>
                            <td>
                                https://api.example.com
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Unique Id</b></td>
                            <td>
                                url
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        <tr>
            <td><b>Authentication</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Value</b></td>
                            <td>
                                OAuth2
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Unique Id</b></td>
                            <td>
                                authentication
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>

## Related Nodes
```mermaid
graph TD;
api-gateway[api-gateway]:::highlight;
ecommerce-platform-system -- Composed Of --> api-gateway;
customer -- Interacts --> api-gateway;
admin -- Interacts --> api-gateway;
api-gateway -- Connects --> order-service;
api-gateway -- Connects --> inventory-service;
classDef highlight fill:#f2bbae;
```

## Controls
### Performance

API Gateway rate limiting and caching requirements

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
            <td><b>0</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Requirement Url</b></td>
                            <td>
                                https://internal-policy.example.com/performance/rate-limiting
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        <tr>
            <td><b>1</b></td>
            <td>
                <table class="nested-table">
                        <tbody>
                        <tr>
                            <td><b>Requirement Url</b></td>
                            <td>
                                https://internal-policy.example.com/performance/caching-policy
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Default Ttl Seconds</b></td>
                            <td>
                                300
                                    </td>
                        </tr>
                        <tr>
                            <td><b>Cache Control</b></td>
                            <td>
                                private
                                    </td>
                        </tr>
                        </tbody>
                    </table>
            </td>
        </tr>
        </tbody>
    </table>
</div>


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
            <td>Platform Team</td>
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
            <td>nginx</td>
        </tr>
        <tr>
            <th>Sla Tier</th>
            <td>tier-1</td>
        </tr>
        </tbody>
    </table>
</div>
