import { Card, CardContent } from "../components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            The page you are looking for does not exist. Please check the URL or return to the homepage.
            </p>
            <br />
            <a href="/sure-findings/" className="text-Sure-Findings Store-orange hover:underline">
              Return to Homepage
            </a>
            <br />
            <br />
            Or contact us at{" "}
            <a href=" " className="text-Sure-Findings Store-orange hover:underline">
              Support Center
            </a>
            <br />
            <br />
        </CardContent>
      </Card>
    </div>
  );
}
