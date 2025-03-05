
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
        <p className="text-lg text-muted-foreground">
          Please read our terms carefully before using our services.
        </p>
      </div>

      <div className="bg-card border rounded-lg p-6 shadow-sm">
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
      </div>
    </div>
  );
};

export default TermsOfService;
