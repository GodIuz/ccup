
import { Shield, Lock, FileText, CheckCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PrivacyTerms = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy & Terms</h1>
        <p className="text-lg text-muted-foreground">
          We value your privacy and are committed to transparency.
        </p>
      </div>

      <Tabs defaultValue="privacy" onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>Privacy Policy</span>
            </TabsTrigger>
            <TabsTrigger value="terms" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span>Terms of Service</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="privacy" className="bg-card border rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="h-6 w-6 text-[#0FA0CE]" />
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>
          </div>
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-medium mb-3">Data Collection</h3>
              <p className="text-muted-foreground">
                We collect minimal information necessary to provide our services. This includes account information, 
                usage data, and analytical information to improve user experience. All data is encrypted and stored securely.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-3">How We Use Your Data</h3>
              <p className="text-muted-foreground">
                Your data is used to provide and improve our services, customize your experience, and perform analytics 
                to enhance our platform. We never sell your personal information to third parties.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-3">Data Protection</h3>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your data. This includes encryption,
                secure servers, and regular security audits to ensure your information remains safe.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-3">Your Rights</h3>
              <p className="text-muted-foreground">
                You have the right to access, correct, or delete your personal data. You can also restrict or object to 
                certain processing of your data. Contact us to exercise these rights.
              </p>
            </section>
          </div>

          <div className="mt-8 flex justify-end">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setActiveTab("terms")}
            >
              <span>Continue to Terms</span>
              <CheckCheck className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="terms" className="bg-card border rounded-lg p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-[#0FA0CE]" />
            <h2 className="text-2xl font-semibold">Terms of Service</h2>
          </div>
          <div className="space-y-6">
            <section>
              <h3 className="text-xl font-medium mb-3">Account Terms</h3>
              <p className="text-muted-foreground">
                You are responsible for maintaining the security of your account and password. 
                The company cannot and will not be liable for any loss or damage from your failure to 
                comply with security obligations.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-3">Payment Terms</h3>
              <p className="text-muted-foreground">
                If you are using a paid plan, payment is due at the beginning of each billing cycle. 
                Failure to pay may result in service interruption. All fees are exclusive of taxes which 
                may be added to the total amount.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-3">Cancellation and Termination</h3>
              <p className="text-muted-foreground">
                You are solely responsible for properly canceling your account. Email requests to cancel your 
                account are not considered cancellation. You can cancel your account at any time by clicking 
                on the Account link in the application.
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-medium mb-3">Modifications to the Service</h3>
              <p className="text-muted-foreground">
                We reserve the right to modify or discontinue, temporarily or permanently, the Service with or 
                without notice. We shall not be liable to you or any third party for any modification, suspension, 
                or discontinuance of the Service.
              </p>
            </section>
          </div>

          <div className="mt-8 flex justify-end">
            <Button 
              variant="outline" 
              className="flex items-center gap-2"
              onClick={() => setActiveTab("privacy")}
            >
              <span>Back to Privacy</span>
              <Shield className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PrivacyTerms;
