export const mockData = [
    {
        "id": 1,
        "title": "Beautiful Family Home",
        "description": "Spacious and cozy family home in a quiet neighborhood.",
        "propertyType": "HOUSE",
        "propertyStatus": "FOR_SALE",
        "listingDate": "2024-02-05",
        "address": {
            "city": "Cityville",
            "state": "Stateville",
            "zipCode": "12345",
            "country": "Countryland",
            "latitude": 12.3456,
            "longitude": -78.9012
        },
        "bedrooms": 4,
        "totalArea": 2500,
        "lotSize": 0.25,
        "amenities": {
            "hasSwimmingPool": true,
            "hasGarden": true,
            "hasGarage": true
        },
        "priceHistory": [
            {
                "amount": 300000,
                "currency": "USD",
                "date": "2024-02-05"
            },
            {
                "amount": 295000,
                "currency": "USD",
                "date": "2024-02-10"
            }
        ],
        "currency": "USD",
        "owner": {
            "id": 101,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "userType": "OWNER",
            "username": "johndoe",
            "password": "password",
            "telephone": "123-456-7890",
            "physicalAddress": "123 Main St, Cityville"
        }
    },
]
