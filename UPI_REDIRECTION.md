# UPI Redirection Implementation

## Overview
I've implemented UPI redirection functionality in the checkout page that allows users to pay using their preferred UPI apps like Google Pay, PhonePe, Paytm, BHIM, and others.

## Features Added

### 1. UPI App Redirection
- Added a "Pay with UPI App" button in the UPI payment section
- Implemented automatic redirection to the user's preferred UPI app
- Created a UPI payment link using the standard `upi://pay` URI scheme

### 2. UPI Link Format
The UPI payment link follows the standard format:
```
upi://pay?pa=[UPI_ID]&pn=[Payee Name]&am=[Amount]&cu=INR
```

Where:
- `pa` = Payee Address (UPI ID)
- `pn` = Payee Name
- `am` = Amount
- `cu` = Currency (INR)

### 3. User Experience
- Users can optionally enter their UPI ID
- Clear instructions about supported UPI apps
- Visual feedback during redirection
- Fallback mechanism if UPI app doesn't open

## Implementation Details

### File Modified
- `src/pages/checkout.jsx`

### Key Changes
1. Added `ExternalLink` icon from Lucide React
2. Added `isRedirecting` state to show loading indicator
3. Implemented `handleUpiRedirect()` function that:
   - Creates a UPI payment link with order details
   - Redirects user to their UPI app using `window.location.href`
   - Shows loading state during redirection
4. Updated UPI payment section UI with:
   - Clear payment instructions
   - Prominent "Pay with UPI App" button
   - List of supported UPI apps

## How It Works

1. User selects UPI as payment method
2. User can optionally enter their UPI ID
3. User clicks "Pay with UPI App" button
4. System generates a UPI payment link with:
   - Merchant UPI ID (or user's UPI ID if provided)
   - Payee name ("Sure Findings")
   - Order amount
   - Currency (INR)
5. User is automatically redirected to their preferred UPI app
6. User completes payment in the UPI app
7. User is redirected back to the order confirmation page

## Supported UPI Apps
The redirection works with all major UPI apps:
- Google Pay
- PhonePe
- Paytm
- BHIM
- Amazon Pay
- Any other UPI-enabled app

## Technical Notes
- Uses the standard `upi://pay` URI scheme which is supported by all UPI apps
- Handles cases where UPI ID is not provided by using a default merchant ID
- Includes proper URL encoding for all parameters
- Provides visual feedback during redirection with loading spinner
- Implements timeout mechanism to handle cases where UPI app doesn't open

## Testing
To test the UPI redirection:
1. Add items to cart
2. Proceed to checkout
3. Select UPI as payment method
4. Click "Pay with UPI App" button
5. Observe redirection to UPI app (if installed)