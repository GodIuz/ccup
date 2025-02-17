
const CookiePolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What are cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
            They are widely used to make websites work more efficiently and provide useful information to the website owners.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How we use cookies</h2>
          <p className="mb-4">We use cookies for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Preference cookies: Remember your settings and preferences</li>
            <li>Marketing cookies: Track your visit across websites to display relevant advertisements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Managing cookies</h2>
          <p className="mb-4">
            You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer 
            and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually 
            adjust some preferences every time you visit a site and some services and functionalities may not work.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
