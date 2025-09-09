import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last Updated: September 8, 2025</p>
            <p className="text-muted-foreground">
              This Privacy Policy explains how Novi ("the App," "we," "us," or "our") collects, uses, and protects your information. By using our App, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                We collect and store a limited amount of information to provide and improve your experience with the App. The data we collect is directly related to your use of the App and includes:
              </p>
              <div>
                <p className="font-medium text-foreground mb-2">User Media Preferences:</p>
                <p>We collect information about your preferences, such as the types of media you enjoy, your ratings, and saved items.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">Summaries of Preferences:</p>
                <p>We analyze your media preferences to create summaries or recommendations. These summaries are stored and used to personalize your experience.</p>
              </div>
              <p>
                We do not collect any personally identifiable information like your name, email address, or phone number. All data is anonymous and used solely to enhance the App's functionality for you.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
            <div className="text-muted-foreground space-y-4">
              <p>The information we collect is used exclusively for the following purposes:</p>
              <div>
                <p className="font-medium text-foreground mb-2">To provide and maintain the App:</p>
                <p>To save your preferences and summaries, ensuring your personalized content is available when you return.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">To personalize your experience:</p>
                <p>To show you media and summaries that are most relevant to your interests.</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-2">To improve our App:</p>
                <p>We use aggregated, anonymized data to understand general user trends and improve the overall quality of the App.</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Data Security</h2>
            <p className="text-muted-foreground">
              The security of your data is important to us. We implement reasonable measures to protect your information from unauthorized access or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground">
              We do not share your information with third-party companies or services for marketing or advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Your Choices</h2>
            <p className="text-muted-foreground">
              Your data is stored locally on your device or in a secure, anonymous cloud database. You have the right to delete this data at any time through the App's settings. Deleting this data will remove your personalized preferences and summaries, and reset your experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <div className="text-muted-foreground space-y-2">
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <p><strong>Email:</strong> support@trynovi.app</p>
                {/* <p><strong>Website:</strong> [Your Website or Support Page]</p> */}
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
