# MongoDB Setup Requirements for Thoothukudi John Karuvattu Kadai

This document outlines the exact information and configuration needed from the MongoDB side to take this website from "Mock Mode" to a live production database.

## 1. The Connection String (Required)
The most critical piece of information is the **MongoDB URI**. This string allows the application to securely talk to your database.

**Format:**
`mongodb+srv://<username>:<password>@<cluster-url>/karuvattu_kadai?retryWrites=true&w=majority`

*   **Username:** The database user created for this app.
*   **Password:** The secure password for the database user.
*   **Cluster URL:** The address of your MongoDB cluster (e.g., `cluster0.abcde.mongodb.net`).

---

## 2. Configuration Steps (MongoDB Atlas)
If you are using **MongoDB Atlas** (recommended), please ensure the following steps are completed:

### A. Network Access (IP Whitelisting)
By default, MongoDB blocks all connections. You must allow your application to connect:
*   **For Development:** Add your current IP address.
*   **For Production:** Add `0.0.0.0/0` (Allows connections from any server, necessary for cloud hosting like Vercel/Netlify).

### B. Database User Permissions
The user created in the "Database Access" section should have the following role:
*   **Read and Write to any database** (or specifically for the `karuvattu_kadai` database).

### C. Creating the Database
Ensure a database named **`karuvattu_kadai`** is initialized. The application will automatically create the following collections once it connects:
*   `products` - Stores dry fish inventory
*   `orders` - Stores customer purchase data
*   `admins` - Stores authorized admin emails

---

## 3. How to Apply the Details
Once you have the connection string, you should place it in your secret **`.env`** file located in the root directory:

```bash
# Example .env entry
MONGODB_URI=mongodb+srv://admin_john:YourSecretPassword123@cluster-jk.mongodb.net/karuvattu_kadai
```

---

## 4. Why this is needed
Connecting to MongoDB will:
*   **Enable Persistence**: Your products and orders will be saved permanently in the cloud, not just in your browser's temporary storage.
*   **Multi-Device Sync**: Any change you make in the Admin Dashboard will immediately reflect on the customer-facing website across all devices.
*   **Secure Admin Access**: Enables the email OTP system for secure management logins.
