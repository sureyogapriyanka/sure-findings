import { useState } from 'react';
import { Button } from '../components/ui/button.jsx';
import { Input } from '../components/ui/input.jsx';
import { Label } from '../components/ui/label.jsx';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { ExternalLink } from 'lucide-react';

const UpiTest = () => {
    const [upiId, setUpiId] = useState('test@upi');
    const [amount, setAmount] = useState('100.00');
    const [isRedirecting, setIsRedirecting] = useState(false);

    const handleUpiRedirect = () => {
        setIsRedirecting(true);

        // Create a UPI payment link
        const payeeName = 'Sure Findings Test';
        const transactionNote = 'Test Payment';

        // Try multiple UPI intent formats for better compatibility
        const upiIntents = [
            `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`,
            `upi://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
            `upi://pay?pa=${encodeURIComponent(upiId)}&am=${amount}&pn=${encodeURIComponent(payeeName)}`,
        ];

        // Deep links for specific UPI apps
        const appSpecificLinks = [
            // PhonePe deep link
            `phonepe://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
            // Google Pay deep link
            `tez://upi/pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
            // Paytm deep link
            `paytmmp://pay?pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR`,
        ];

        // Try to open the UPI app with fallbacks
        let intentIndex = 0;
        let appLinkIndex = 0;

        const tryNextIntent = () => {
            if (intentIndex < upiIntents.length) {
                const intent = upiIntents[intentIndex];
                console.log('Trying UPI intent:', intent);

                // Create a hidden iframe to attempt the redirect
                const iframe = document.createElement('iframe');
                iframe.style.display = 'none';
                iframe.src = intent;
                document.body.appendChild(iframe);

                // Remove the iframe after a short delay
                setTimeout(() => {
                    document.body.removeChild(iframe);
                }, 1000);

                // Also try window.open as a fallback
                const newWindow = window.open(intent, '_blank');
                if (newWindow) {
                    newWindow.focus();
                }

                intentIndex++;

                // Try next intent after a short delay
                setTimeout(tryNextIntent, 500);
            } else {
                // If standard intents failed, try app-specific deep links
                tryAppSpecificLinks();
            }
        };

        const tryAppSpecificLinks = () => {
            if (appLinkIndex < appSpecificLinks.length) {
                const appLink = appSpecificLinks[appLinkIndex];
                console.log('Trying app-specific link:', appLink);

                // Try window.open for app-specific links
                const newWindow = window.open(appLink, '_blank');
                if (newWindow) {
                    newWindow.focus();
                }

                appLinkIndex++;

                // Try next app link after a short delay
                setTimeout(tryAppSpecificLinks, 500);
            } else {
                // All methods exhausted, show fallback
                setTimeout(() => {
                    setIsRedirecting(false);
                    // Show options for manual payment
                    showPaymentOptions(upiId, payeeName, amount, transactionNote);
                }, 1000);
            }
        };

        const showPaymentOptions = (upiId, payeeName, amount, note) => {
            const message = `
Payment Options:
1. Open your UPI app and send ₹${amount} to ${upiId}
2. Visit https://business.phonepe.com/ to make payment
3. Visit https://www.website.npci.org.in/ for UPI payment options
4. Try again with a different UPI ID

Transaction Details:
- Amount: ₹${amount}
- Payee: ${payeeName}
- Note: ${note}
      `.trim();

            alert(message);

            // Also open PhonePe business page in a new tab
            window.open('https://business.phonepe.com/', '_blank');

            // Open NPCI website as well
            window.open('https://www.website.npci.org.in/', '_blank');
        };

        tryNextIntent();
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-800 via-orange-600 to-orange-800 bg-clip-text text-transparent">UPI Redirection Test</h1>

            <Card className="bg-white border border-orange-200">
                <CardHeader>
                    <CardTitle className="text-orange-800">Test UPI Redirection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Label htmlFor="upiId">UPI ID</Label>
                            <Input
                                id="upiId"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                placeholder="yourname@upi"
                            />
                            <p className="text-sm text-muted-foreground mt-2">
                                Enter a valid UPI ID to test redirection
                            </p>
                        </div>
                        <div>
                            <Label htmlFor="amount">Amount (INR)</Label>
                            <Input
                                id="amount"
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="100.00"
                            />
                        </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h3 className="font-medium text-orange-800 mb-2">How to Test</h3>
                        <ol className="list-decimal list-inside text-sm text-muted-foreground space-y-1">
                            <li>Enter a valid UPI ID (must be registered with a UPI app)</li>
                            <li>Enter an amount to test</li>
                            <li>Click the "Test UPI Redirect" button</li>
                            <li>Your UPI app should open automatically</li>
                            <li>If it doesn't open, you'll be redirected to PhonePe business page</li>
                        </ol>
                    </div>

                    <Button
                        onClick={handleUpiRedirect}
                        disabled={isRedirecting}
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 mb-3"
                    >
                        {isRedirecting ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Redirecting to UPI App...
                            </>
                        ) : (
                            <>
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Test UPI Redirect
                            </>
                        )}
                    </Button>

                    <Button
                        onClick={() => window.open('https://www.website.npci.org.in/', '_blank')}
                        className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-3"
                    >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit NPCI Website
                    </Button>

                    <div className="text-sm text-muted-foreground">
                        <p className="font-medium mb-2">Supported UPI Apps:</p>
                        <p>Google Pay, PhonePe, Paytm, BHIM, Amazon Pay, and other UPI-enabled apps</p>
                        <p className="mt-2 font-medium">Other Options:</p>
                        <p>If UPI apps don't open, you'll be redirected to <a href="https://business.phonepe.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PhonePe Business</a> or visit <a href="https://www.website.npci.org.in/" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">NPCI Website</a> for more UPI options</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default UpiTest;