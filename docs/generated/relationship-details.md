---
architecture: ../architectures/ecommerce-platform.json
---
# Relationship Details: E-commerce order processing platform

### ecommerce-platform-composed-of



**Type:** Composition

- **Container:** `ecommerce-platform-system`
- **Contains:** `api-gateway`, `order-service`, `inventory-service`, `payment-service`, `order-database`, `inventory-database`

---
### customer-interacts-with-api-gateway


**Type:** Interaction

- **Actor:** `customer`
- **Interacts with:** `api-gateway`


---
### admin-interacts-with-api-gateway


**Type:** Interaction

- **Actor:** `admin`
- **Interacts with:** `api-gateway`


---
### api-gateway-connects-order-service

**Type:** Connection

| Property | Value |
|----------|-------|
| Source | `api-gateway` |
| Destination | `order-service` |
| Source Interfaces | `api-gateway-public-https` |
| Dest Interfaces | `order-service-http` |



---
### api-gateway-connects-inventory-service

**Type:** Connection

| Property | Value |
|----------|-------|
| Source | `api-gateway` |
| Destination | `inventory-service` |
| Source Interfaces | `api-gateway-public-https` |
| Dest Interfaces | `inventory-service-http` |



---
### order-service-connects-order-database

**Type:** Connection

| Property | Value |
|----------|-------|
| Source | `order-service` |
| Destination | `order-database` |
| Source Interfaces | `order-service-db-client` |
| Dest Interfaces | `order-db-jdbc` |



---
### order-service-connects-payment-service

**Type:** Connection

| Property | Value |
|----------|-------|
| Source | `order-service` |
| Destination | `payment-service` |
| Source Interfaces | `order-service-http` |
| Dest Interfaces | `payment-service-http` |



---
### inventory-service-connects-inventory-database

**Type:** Connection

| Property | Value |
|----------|-------|
| Source | `inventory-service` |
| Destination | `inventory-database` |
| Source Interfaces | `inventory-service-db-client` |
| Dest Interfaces | `inventory-db-jdbc` |



---
