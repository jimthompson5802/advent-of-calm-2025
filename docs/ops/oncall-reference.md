---
architecture: ../../architectures/ecommerce-platform.json
---
# On-Call Quick Reference

**Architecture:** 
**Generated:** 

## Service Contacts

| Service | Owner | On-Call Channel | Tier |
|---------|-------|-----------------|------|
| Load Balancer | platform-team | #oncall-platform | tier-1 |
| API Gateway | platform-team | #oncall-platform | tier-1 |
| API Gateway | platform-team | #oncall-platform | tier-1 |
| Order Service | orders-team | #oncall-orders | tier-1 |
| Inventory Service | inventory-team | #oncall-inventory | tier-2 |
| Payment Service | payments-team | #oncall-payments | tier-1 |

## Database Contacts

| Database | DBA Contact | Backup Schedule | Restore Time |
|----------|-------------|-----------------|--------------|
| Order Database Primary | dba-orders@example.com | daily 02:00 UTC | 30m |
| Order Database Replica | dba-orders@example.com | daily 02:00 UTC | 45m |
| Inventory Database | dba-inventory@example.com | daily 03:00 UTC | 45m |

## Critical Flows & Business Impact

### Customer Order Processing

- **Business Impact:** Customers cannot complete purchases - direct revenue loss
- **SLA:** 99.9% availability, 30s p99 latency
- **Degraded Behavior:** Orders queue in message broker; processed when service recovers
- **Customer Communication:** Display &#x27;Order processing delayed&#x27; message

**Flow Path:**
0. customer-interacts-with-load-balancer
1. api-gateway-1-connects-order-service
2. order-service-publishes-order-queue
3. payment-service-consumes-order-queue

---

### Inventory Stock Check

- **Business Impact:** Stock levels may be inaccurate - risk of overselling
- **SLA:** 99.5% availability, 500ms p99 latency
- **Degraded Behavior:** Fall back to cached inventory; flag orders for manual review
- **Customer Communication:** Display &#x27;Stock availability being confirmed&#x27;

**Flow Path:**
0. admin-interacts-with-load-balancer
1. api-gateway-1-connects-inventory-service
2. inventory-service-connects-inventory-database
3. inventory-service-connects-inventory-database
4. api-gateway-1-connects-inventory-service

---


## Monitoring Links

| Resource | Link |
|----------|------|
| Grafana Dashboard | https://grafana.example.com/d/ecommerce-overview |
| Kibana Logs | https://kibana.example.com/app/discover#/ecommerce-* |
| PagerDuty | https://pagerduty.example.com/services/ECOMMERCE |
| Status Page | https://status.example.com |

## Escalation Matrix

| Tier | Response Time | Escalation Path |
|------|---------------|-----------------|
| tier-1 | 15 minutes | Page immediately, all-hands |
| tier-2 | 30 minutes | Page on-call, notify manager |
| tier-3 | 2 hours | Slack notification, next business day OK |
