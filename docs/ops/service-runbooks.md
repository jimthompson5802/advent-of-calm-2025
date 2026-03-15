---
architecture: ../../architectures/ecommerce-platform.json
---
# Service Runbooks

Generated from architecture: 
Generated on: 

---

## Load Balancer

**Unique ID:** `load-balancer`
**Type:** service

### Ownership

| Field | Value |
|-------|-------|
| Owner | platform-team |
| On-Call Slack | #oncall-platform |
| Tier | tier-1 |
| Runbook | https://runbooks.example.com/load-balancer |

### Health & Monitoring

- **Health Endpoint:** `/health`
- **Dashboard:** https://grafana.example.com/d/load-balancer
- **Log Query:** `service:load-balancer`

### Dependencies

This service depends on:
- api-gateway-1
- api-gateway-2

### Known Failure Modes

No failure modes documented yet.

---

## API Gateway

**Unique ID:** `api-gateway-1`
**Type:** service

### Ownership

| Field | Value |
|-------|-------|
| Owner | platform-team |
| On-Call Slack | #oncall-platform |
| Tier | tier-1 |
| Runbook | https://runbooks.example.com/api-gateway |

### Health & Monitoring

- **Health Endpoint:** `/health`
- **Dashboard:** https://grafana.example.com/d/api-gateway
- **Log Query:** `service:api-gateway AND instance:api-gateway-1`

### Dependencies

This service depends on:
- order-service
- inventory-service

### Known Failure Modes

No failure modes documented yet.

---

## API Gateway

**Unique ID:** `api-gateway-2`
**Type:** service

### Ownership

| Field | Value |
|-------|-------|
| Owner | platform-team |
| On-Call Slack | #oncall-platform |
| Tier | tier-1 |
| Runbook | https://runbooks.example.com/api-gateway |

### Health & Monitoring

- **Health Endpoint:** `/health`
- **Dashboard:** https://grafana.example.com/d/api-gateway
- **Log Query:** `service:api-gateway AND instance:api-gateway-2`

### Dependencies

This service depends on:
- order-service
- inventory-service

### Known Failure Modes

No failure modes documented yet.

---

## Order Service

**Unique ID:** `order-service`
**Type:** service

### Ownership

| Field | Value |
|-------|-------|
| Owner | orders-team |
| On-Call Slack | #oncall-orders |
| Tier | tier-1 |
| Runbook | https://runbooks.example.com/order-service |

### Health & Monitoring

- **Health Endpoint:** `/actuator/health`
- **Dashboard:** https://grafana.example.com/d/order-service
- **Log Query:** `service:order-service`

### Dependencies

This service depends on:
- order-database-primary
- order-database-replica
- message-broker

### Known Failure Modes

#### HTTP 503 errors

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Database connection pool exhausted |
| **How to Check** | Check connection pool metrics in Grafana dashboard |
| **Remediation** | Scale up service replicas or increase pool size |
| **Escalation** | If persists &gt; 5min, page DBA team |

#### High latency (&gt;2s p99)

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Payment service degradation |
| **How to Check** | Check payment-service health and circuit breaker status |
| **Remediation** | Circuit breaker should open automatically; check fallback queue |
| **Escalation** | Contact payments-team if circuit breaker not triggering |

#### Order validation failures

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Inventory service returning stale data |
| **How to Check** | Verify inventory-service cache TTL and database replication lag |
| **Remediation** | Clear inventory cache; check replica sync status |
| **Escalation** | Contact platform-team for cache issues |


---

## Inventory Service

**Unique ID:** `inventory-service`
**Type:** service

### Ownership

| Field | Value |
|-------|-------|
| Owner | inventory-team |
| On-Call Slack | #oncall-inventory |
| Tier | tier-2 |
| Runbook | https://runbooks.example.com/inventory-service |

### Health & Monitoring

- **Health Endpoint:** `/health`
- **Dashboard:** https://grafana.example.com/d/inventory-service
- **Log Query:** `service:inventory-service`

### Dependencies

This service depends on:
- inventory-database

### Known Failure Modes

#### Stale stock levels

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Cache TTL too long or replica lag |
| **How to Check** | Check inventory cache TTL and database replication lag |
| **Remediation** | Reduce cache TTL; verify replica sync status |
| **Escalation** | Contact platform-team for cache issues |

#### Inventory updates timing out

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Database contention or slow queries |
| **How to Check** | Review slow query logs and DB CPU metrics |
| **Remediation** | Add index or scale database resources |
| **Escalation** | Page DBA team if timeouts persist &gt; 10min |

#### High 5xx error rate

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Dependency instability or memory pressure |
| **How to Check** | Inspect service memory usage and recent deployments |
| **Remediation** | Rollback recent deploy or scale replicas |
| **Escalation** | Contact inventory-team lead |


---

## Payment Service

**Unique ID:** `payment-service`
**Type:** service

### Ownership

| Field | Value |
|-------|-------|
| Owner | payments-team |
| On-Call Slack | #oncall-payments |
| Tier | tier-1 |
| Runbook | https://runbooks.example.com/payment-service |

### Health & Monitoring

- **Health Endpoint:** `/health`
- **Dashboard:** https://grafana.example.com/d/payment-service
- **Log Query:** `service:payment-service`

### Dependencies

This service depends on:
- message-broker

### Known Failure Modes

#### Payment processing backlog

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Consumer lag or broker throttling |
| **How to Check** | Check queue depth and consumer lag in broker dashboard |
| **Remediation** | Scale payment-service consumers |
| **Escalation** | Contact platform-team if broker throttling persists |

#### High payment decline rate

| Aspect | Details |
|--------|---------|
| **Likely Cause** | External provider issues or misconfiguration |
| **How to Check** | Review provider status page and recent config changes |
| **Remediation** | Fail over to secondary provider or roll back config |
| **Escalation** | Page payments-team lead and vendor support |

#### AMQP connection errors

| Aspect | Details |
|--------|---------|
| **Likely Cause** | Broker connectivity or auth issues |
| **How to Check** | Verify broker connectivity and credentials rotation logs |
| **Remediation** | Restart consumers; re-issue credentials |
| **Escalation** | Contact platform-team if connectivity issues persist |


---


## Quick Links

| Service | Health Check | Dashboard | Runbook |
|---------|--------------|-----------|---------|
| Load Balancer | `/health` | [Dashboard](https://grafana.example.com/d/load-balancer) | [Runbook](https://runbooks.example.com/load-balancer) |
| API Gateway | `/health` | [Dashboard](https://grafana.example.com/d/api-gateway) | [Runbook](https://runbooks.example.com/api-gateway) |
| API Gateway | `/health` | [Dashboard](https://grafana.example.com/d/api-gateway) | [Runbook](https://runbooks.example.com/api-gateway) |
| Order Service | `/actuator/health` | [Dashboard](https://grafana.example.com/d/order-service) | [Runbook](https://runbooks.example.com/order-service) |
| Inventory Service | `/health` | [Dashboard](https://grafana.example.com/d/inventory-service) | [Runbook](https://runbooks.example.com/inventory-service) |
| Payment Service | `/health` | [Dashboard](https://grafana.example.com/d/payment-service) | [Runbook](https://runbooks.example.com/payment-service) |
