---
architecture: ../../../../architectures/ecommerce-platform.json
id: index
title: Welcome to CALM Documentation
sidebar_position: 1
slug: /
---

# Welcome to CALM Documentation

This documentation is generated from the **CALM Architecture-as-Code** model.

## High Level Architecture
```mermaid
---
config:
  theme: base
  themeVariables:
    fontFamily: -apple-system, BlinkMacSystemFont, 'Segoe WPC', 'Segoe UI', system-ui, 'Ubuntu', sans-serif
    darkMode: false
    fontSize: 14px
    edgeLabelBackground: '#d5d7e1'
    lineColor: '#000000'
---
%%{init: {"layout": "elk", "flowchart": {"htmlLabels": false}}}%%
flowchart TB
classDef boundary fill:#e1e4f0,stroke:#204485,stroke-dasharray: 5 4,stroke-width:1px,color:#000000;
classDef node fill:#eef1ff,stroke:#007dff,stroke-width:1px,color:#000000;
classDef iface fill:#f0f0f0,stroke:#b6b6b6,stroke-width:1px,font-size:10px,color:#000000;
classDef highlight fill:#fdf7ec,stroke:#f0c060,stroke-width:1px,color:#000000;

        subgraph ecommerce-platform-system["E-Commerce Platform"]
        direction TB
            api-gateway["API Gateway"]:::node
            inventory-database["Inventory Database"]:::node
            inventory-service["Inventory Service"]:::node
            order-database["Order Database"]:::node
            order-service["Order Service"]:::node
            payment-service["Payment Service"]:::node
        end
        class ecommerce-platform-system boundary

    admin["Admin"]:::node
    customer["Customer"]:::node

    customer -->|Customer submits and views orders using.| api-gateway
    admin -->|Admin manages operational tasks using.| api-gateway
    api-gateway -->|Routes API requests to.| order-service
    api-gateway -->|Routes API requests to.| inventory-service
    order-service -->|Persists and queries order data in.| order-database
    order-service -->|Authorizes and captures payments via.| payment-service
    inventory-service -->|Persists and queries inventory state in.| inventory-database



```

## Nodes
- [Customer](nodes/customer)
- [Admin](nodes/admin)
- [E-Commerce Platform](nodes/ecommerce-platform-system)
- [API Gateway](nodes/api-gateway)
- [Order Service](nodes/order-service)
- [Inventory Service](nodes/inventory-service)
- [Payment Service](nodes/payment-service)
- [Order Database](nodes/order-database)
- [Inventory Database](nodes/inventory-database)

## Relationships
- [Ecommerce Platform Composed Of](relationships/ecommerce-platform-composed-of)
- [Customer Interacts With Api Gateway](relationships/customer-interacts-with-api-gateway)
- [Admin Interacts With Api Gateway](relationships/admin-interacts-with-api-gateway)
- [Api Gateway Connects Order Service](relationships/api-gateway-connects-order-service)
- [Api Gateway Connects Inventory Service](relationships/api-gateway-connects-inventory-service)
- [Order Service Connects Order Database](relationships/order-service-connects-order-database)
- [Order Service Connects Payment Service](relationships/order-service-connects-payment-service)
- [Inventory Service Connects Inventory Database](relationships/inventory-service-connects-inventory-database)

## Flows
- [Customer Order Processing](flows/order-processing-flow)
- [Inventory Stock Check](flows/inventory-check-flow)

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
            <td>github-copilot@example.com</td>
        </tr>
        <tr>
            <th>Version</th>
            <td>1.0.0</td>
        </tr>
        <tr>
            <th>Created</th>
            <td>2026-03-15</td>
        </tr>
        <tr>
            <th>Description</th>
            <td>E-commerce order processing platform</td>
        </tr>
        <tr>
            <th>Tags</th>
            <td>ecommerce, microservices, orders</td>
        </tr>
        </tbody>
    </table>
</div>

## ADRs
- [docs/adr/0001-use-message-queue-for-async-processing.md](docs/adr/0001-use-message-queue-for-async-processing.md)
- [docs/adr/0002-use-oauth2-for-api-authentication.md](docs/adr/0002-use-oauth2-for-api-authentication.md)
