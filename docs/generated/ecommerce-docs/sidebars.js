module.exports = {
    docs: [
        {
            type: 'doc',
            id: 'index',
            label: 'Home',
        },
        {
            type: 'category',
            label: 'Nodes',
            items: [
                'nodes/customer',
                'nodes/admin',
                'nodes/ecommerce-platform-system',
                'nodes/api-gateway',
                'nodes/order-service',
                'nodes/inventory-service',
                'nodes/payment-service',
                'nodes/order-database',
                'nodes/inventory-database'
            ],
        },
        {
            type: 'category',
            label: 'Relationships',
            items: [
                'relationships/ecommerce-platform-composed-of',
                'relationships/customer-interacts-with-api-gateway',
                'relationships/admin-interacts-with-api-gateway',
                'relationships/api-gateway-connects-order-service',
                'relationships/api-gateway-connects-inventory-service',
                'relationships/order-service-connects-order-database',
                'relationships/order-service-connects-payment-service',
                'relationships/inventory-service-connects-inventory-database'
            ],
        },
        {
            type: 'category',
            label: 'Flows',
            items: [
                'flows/order-processing-flow',
                'flows/inventory-check-flow'
            ],
        },
    ],
};

