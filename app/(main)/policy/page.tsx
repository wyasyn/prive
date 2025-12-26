export default function PrivacyPolicyPage() {
  return (
    <main>
      {/* Header */}
      <section className=" bg-primary/10 mx-auto px-6 py-24 lg:py-32 text-center rounded-b-[40%]">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="font-mono text-sm">
          Effective Date: {new Date("12-26-2025").toLocaleDateString()}
        </p>
      </section>

      {/* Content */}
      <section className=" py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-10 leading-relaxed text-[15px]">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              1. Information We Collect
            </h2>
            <p>
              We collect limited information through Google Authentication,
              including your name, email address, and profile image. This
              information is used strictly for authentication and access control
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used only to verify identity and restrict
              access to authorized administrators. No personal data is sold,
              shared, or used for analytics or advertising.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
            <p>
              Authentication is handled securely via Google OAuth. We do not
              store passwords or sensitive authentication credentials on our
              servers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              4. Third-Party Services
            </h2>
            <p>
              This application uses Google OAuth for identity verification.
              Google&apos;s privacy practices can be reviewed at{" "}
              <a
                rel="noopener"
                href="https://policies.google.com/privacy"
                target="_blank"
                className="text-primary underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3">
              5. Contact Information
            </h2>
            <p>
              For questions regarding this policy, please contact:
              <br />
              <strong>Email:</strong> {process.env.NEXT_PUBLIC_EMAIL}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
