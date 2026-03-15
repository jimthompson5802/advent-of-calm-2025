# Load Balancer Health Check Incident Report

## Summary

A load balancer health check misconfiguration marked `api-gateway-2` unhealthy, shifting all traffic to `api-gateway-1`. The remaining gateway became overloaded, leading to elevated latency and errors for customer-facing flows.

## Affected Services and Tiers

- Load Balancer (tier-1)
- API Gateway 1 (tier-1)
- API Gateway 2 (tier-1, marked unhealthy)
- Order Service (tier-1)
- Inventory Service (tier-2)

## Business Flows Impacted

- Customer Order Processing
- Inventory Stock Check

## Customer Impact

- Customers could not complete purchases, causing direct revenue loss.
- Stock availability could be inaccurate, increasing risk of overselling.
- Customer messaging used: "Order processing delayed" and "Stock availability being confirmed".

## Timeline of Dependency Failures

1. Load balancer health check misconfiguration marks API Gateway 2 unhealthy.
2. All traffic shifts to API Gateway 1.
3. API Gateway 1 overload leads to elevated latency and request failures.
4. Downstream services (order-service, inventory-service) degrade as upstream traffic fails.

## Remediation Steps Taken

- Corrected load balancer health check configuration.
- Restored API Gateway 2 to the healthy pool.
- Rebalanced traffic across both gateways and verified normal latency.

## Follow-Up Actions

- Add automated validation tests for load balancer health check configs.
- Use canary rollout with fast rollback for health check changes.
- Add alerting for gateway traffic imbalance and sudden traffic skew.
- Review gateway autoscaling thresholds against peak traffic.
- Update runbooks with explicit health check verification steps.