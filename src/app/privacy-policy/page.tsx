import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        PRIVACY POLICY - SHOUTSTART
      </h1>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">Introduction</h2>
          <p className="mb-6">
            ShoutStart respects your privacy and is committed to protecting your
            personal data. This Privacy Policy explains how we collect, use,
            disclose and safeguard your information when you visit our website
            or use our services.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-4">
            We may collect the following types of information:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">
                Personal Identification Information:
              </span>{" "}
              Name, email address, phone number, company name, job title and
              business address.
            </li>

            <li>
              <span className="font-semibold">Communication Data:</span>{" "}
              Information you provide when contacting us including email
              correspondence, form submissions, and phone conversations.
            </li>

            <li>
              <span className="font-semibold">Technical Data:</span> IP address,
              browser type, device information, pages visited, time spent on
              site, and other analytics data collected through cookies and
              similar technologies.
            </li>

            <li>
              <span className="font-semibold">
                Marketing and Communications Data:
              </span>{" "}
              Your preferences in receiving marketing communications from us.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">
            How We Use Your Information
          </h2>
          <p className="mb-4">
            We use your information for the following purposes:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Provide Our Services:</span> To
              deliver the PR and media services you've requested.
            </li>

            <li>
              <span className="font-semibold">Communication:</span> To respond
              to your inquiries, provide updates about our services and maintain
              our client relationship.
            </li>

            <li>
              <span className="font-semibold">Website Improvement:</span> To
              analyze usage patterns and improve our website functionality.
            </li>

            <li>
              <span className="font-semibold">Marketing:</span> To send relevant
              content, news, and service information (only with your consent
              where required by law).
            </li>

            <li>
              <span className="font-semibold">Legal Obligations:</span> To
              comply with applicable laws and regulations.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">
            Legal Basis for Processing
          </h2>
          <p className="mb-4">
            We process your information based on the following legal grounds:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Contractual Necessity:</span>{" "}
              Processing necessary for performing our contract with you.
            </li>

            <li>
              <span className="font-semibold">Legitimate Interests:</span>{" "}
              Processing necessary for our legitimate business interests where
              your rights do not override these interests.
            </li>

            <li>
              <span className="font-semibold">Consent:</span> Processing based
              on your specific consent for certain purposes such as marketing
              communications.
            </li>

            <li>
              <span className="font-semibold">Legal Compliance:</span>{" "}
              Processing necessary to comply with our legal obligations.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">
            Cookies and Tracking Technologies
          </h2>
          <p className="mb-4">
            Our website uses cookies and similar tracking technologies to
            collect information about your browsing activities. You can manage
            your cookie preferences through your browser settings. We use:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Essential Cookies:</span> Required
              for the website to function properly.
            </li>

            <li>
              <span className="font-semibold">Analytical Cookies:</span> Help us
              understand how visitors interact with our website.
            </li>

            <li>
              <span className="font-semibold">Marketing Cookies:</span> Used to
              track visitors across websites to enable us to display relevant
              advertisements.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
          <p className="mb-6">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these sites. We
            encourage you to read the privacy policies of any third-party sites
            you visit.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The updated
            version will be indicated by a revised "Last Updated" date. We
            encourage you to review this Privacy Policy periodically.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or our data
            practices, please contact us at:
          </p>

          <div className="mt-4">
            <p className="font-semibold">ShoutStart</p>
            <p>[Address]</p>
            <p>[Email]</p>
            <p>[Phone]</p>
          </div>

          <p className="mt-6 text-sm text-gray-500">Last Updated: [Date]</p>
        </CardContent>
      </Card>
    </div>
  );
}
