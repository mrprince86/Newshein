# NewShein
Full-stack multi-page e-commerce starter based on the requested NewShein flow.

## Pages
Home, Register, Login, Products, Product Details, Cart, Checkout, Payment/UPI QR, My Orders, Customer Service Chat, Account, Admin Login, Admin Dashboard.

## Business rules
- Customer registration uses email + password only.
- Successful registration grants one ₹500 wallet bonus.
- Wallet can be used only when cart subtotal is at least ₹1,000.
- UPI QR is generated from the current admin-configured UPI ID and exact order amount.
- Customer submits UTR; admin must approve/reject payment.
- Rejecting a payment refunds any wallet amount used on that order.
- Admin can add unlimited products, deactivate products, update stock, approve payments, update tracking, reply to customer chat, and change UPI ID.
- Delivery address is collected at checkout.

## Run
1. `npm install`
2. Copy `.env.example` to `.env` and change secrets/credentials.
3. `npm start`
4. Open `http://localhost:3000`

Default admin if env is not changed: `admin` / `ChangeMe123!`.
Change it before production.
