
import { Lock } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-muted-foreground">
          We value your privacy and are committed to transparency.
        </p>
      </div>

      <div className="bg-card border rounded-lg p-6 shadow-sm">
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
      </div>
    </div>
  );
};

export default PrivacyPolicy;
