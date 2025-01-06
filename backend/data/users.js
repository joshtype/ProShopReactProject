/*
 * Dummy users for MongoDB seeder script.
 * Dummy passwords ('password1') are encrypted.
 * Note: '10' parameter refers to encryption strength.
*/ 
import bcrypt from 'bcryptjs';  // password encryption

const userList = [
    // dummy user 1 (admin)
    {
        name: "Admin User",
        email: "admin_user1@email.com",
        phone: "555-111-1111",
        shippingAddress: [{
            street: "123 Main St.",
            city: "Townsville",
            state: "FX",
            zip: "12345"
        }],
        username: "adminUser1",
        password: bcrypt.hashSync("password1", 10),
        isAdmin: true,
    },

    // dummy user 2 (non-admin)
    {
        name: "Meesa User",
        email: "meesa_user2@email.com",
        phone: "555-222-2222",
        shippingAddress: [{
            street: "124 Main St.",
            city: "Townsville",
            state: "FX",
            zip: "12345"
        }],
        username: "meesaUser2",
        password: bcrypt.hashSync("password1", 10),
        isAdmin: false,  // default = false but required
    },

    // dummy user 3 (non-admin)
    {
        name: "Meesa User Jr.",
        email: "meesa_user_jr@email.com",
        phone: "555-333-3333",
        shippingAddress: [{
            street: "125 Main St.",
            city: "Townsville",
            state: "FX",
            zip: "12345"
        }],
        username: "meesaUser3",
        password: bcrypt.hashSync("passWord1", 10),
        isAdmin: false,
    },
];

export default userList;