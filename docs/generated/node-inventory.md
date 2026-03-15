---
architecture: ../architectures/ecommerce-platform.json
---
# Node Inventory: E-commerce order processing platform

| Name | Type | ID | Description |
|------|------|-------|-------------|
| Customer | Actor | `customer` | End user who browses the store and places orders. |
| Admin | Actor | `admin` | Operations user who manages orders, inventory, and payment exceptions. |
| E-Commerce Platform | System | `ecommerce-platform-system` | System boundary containing the order processing microservices. |
| API Gateway | Service | `api-gateway` | Edge service providing a single entry point for customer and admin requests. |
| Order Service | Service | `order-service` | Creates and manages customer orders, orchestrating inventory reservation and payment authorization. |
| Inventory Service | Service | `inventory-service` | Tracks stock levels and reserves inventory for confirmed orders. |
| Payment Service | Service | `payment-service` | Authorizes and captures payments for orders. |
| Order Database | Database | `order-database` | Stores order state, line items, and order history. |
| Inventory Database | Database | `inventory-database` | Stores inventory SKUs, stock levels, and reservation records. |

## Services Only

- **API Gateway** (`api-gateway`): Edge service providing a single entry point for customer and admin requests.
- **Order Service** (`order-service`): Creates and manages customer orders, orchestrating inventory reservation and payment authorization.
- **Inventory Service** (`inventory-service`): Tracks stock levels and reserves inventory for confirmed orders.
- **Payment Service** (`payment-service`): Authorizes and captures payments for orders.

## Databases Only

- **Order Database** (`order-database`): Stores order state, line items, and order history.
- **Inventory Database** (`inventory-database`): Stores inventory SKUs, stock levels, and reservation records.

## Actors

- **Customer**: End user who browses the store and places orders.
- **Admin**: Operations user who manages orders, inventory, and payment exceptions.
