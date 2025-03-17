import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function DataProcessing() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        DATA PROCESSING - SHOUTSTART
      </h1>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-4">How We Handle Your Data</h2>
          <p className="mb-6">
            At ShoutStart, we value your privacy and take data protection
            seriously. This page explains how we collect, process and safeguard
            your information when you use our PR and media services.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">What Data We Collect</h2>
          <p className="mb-4">
            We collect and process the following types of information:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Contact Information:</span> Names,
              email addresses, phone numbers and business addresses of clients
              and their representatives.
            </li>

            <li>
              <span className="font-semibold">Business Information:</span>{" "}
              Company details, industry sector, product/service information and
              business objectives relevant to our PR services.
            </li>

            <li>
              <span className="font-semibold">Content Data:</span> Information
              you provide for press releases, articles, media pitches and other
              content we create or distribute on your behalf.
            </li>

            <li>
              <span className="font-semibold">Communication Records:</span>{" "}
              Records of our communications including emails, phone calls and
              meetings related to service delivery.
            </li>

            <li>
              <span className="font-semibold">Service Performance Data:</span>{" "}
              Information about the performance of our services including media
              placement results, audience engagement and other metrics.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">How We Use Your Data</h2>
          <p className="mb-4">
            ShoutStart uses your data for the following purposes:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Service Delivery:</span> To
              provide the PR and media services you've hired us to perform.
            </li>

            <li>
              <span className="font-semibold">Client Communication:</span> To
              maintain contact throughout our business relationship.
            </li>

            <li>
              <span className="font-semibold">Media Relations:</span> To pitch
              your stories to relevant media outlets on your behalf.
            </li>

            <li>
              <span className="font-semibold">Service Improvement:</span> To
              analyze and improve the effectiveness of our services.
            </li>

            <li>
              <span className="font-semibold">Legal Compliance:</span> To comply
              with applicable laws and regulations.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Data Protection Measures</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to
            protect your data:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Secure Storage:</span> All digital
              information is stored securely with appropriate access controls.
            </li>

            <li>
              <span className="font-semibold">Limited Access:</span> Only
              authorized staff members have access to client information on a
              need-to-know basis.
            </li>

            <li>
              <span className="font-semibold">Confidentiality Agreements:</span>{" "}
              Our team members are bound by confidentiality obligations.
            </li>

            <li>
              <span className="font-semibold">Regular Reviews:</span> We
              regularly review and update our data security practices.
            </li>
          </ol>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">
            Data Sharing and Third Parties
          </h2>
          <p className="mb-4">
            In providing our services, we may share certain information with:
          </p>

          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li>
              <span className="font-semibold">Media Contacts:</span> Information
              contained in press releases and media pitches is shared with
              relevant journalists, editors and media outlets.
            </li>

            <li>
              <span className="font-semibold">Service Providers:</span> We may
              use third-party service providers for specific functions (email
              distribution, media monitoring etc.). These providers are bound by
              appropriate data protection agreements.
            </li>

            <li>
              <span className="font-semibold">Legal Requirements:</span> We may
              disclose information when required by law, court order or
              governmental authority.
            </li>
          </ol>

          <p className="mb-6">
            We do not sell your personal information to third parties under any
            circumstances.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p className="mb-6">
            We may update this Data Processing information from time to time.
            Significant changes will be communicated to active clients directly.
          </p>

          <Separator className="my-6" />

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions about how we process your data, please contact
            us at:
          </p>

          <div className="mt-4">
            <p className="font-semibold">ShoutStart</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
