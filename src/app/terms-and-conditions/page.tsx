import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsAndConditions() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        TERMS AND CONDITIONS - SHOUTSTART
      </h1>

      <Card className="mb-8">
        <CardContent className="pt-6">
          <p className="font-semibold mb-4">
            PLEASE READ CAREFULLY: These Terms and Conditions outline the
            legally binding agreement between ShoutStart and you as our client.
            By engaging our services, you acknowledge that you have read,
            understood and agreed to these terms in their entirety.
          </p>

          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <span className="font-semibold">INTRODUCTION:</span> ShoutStart
              provides public relations, media placement and content creation
              services to clients. When you hire ShoutStart, you accept these
              Terms completely.
            </li>

            <li>
              <span className="font-semibold">SERVICES:</span> We provide public
              relations services including press release creation, media
              outreach, author article placement and content creation as
              specified in your Service Agreement. All services will be
              delivered according to the agreed timeline, which may be adjusted
              based on your responsiveness or external factors beyond our
              control.
            </li>

            <li>
              <span className="font-semibold">CLIENT RESPONSIBILITIES:</span>{" "}
              You agree to provide accurate and timely information needed for
              our work. You must promptly review and approve all content before
              publication and ensure all information you provide complies with
              applicable laws.
            </li>

            <li>
              <span className="font-semibold">PAYMENT TERMS:</span> You agree to
              pay fees as outlined in your Service Agreement. Invoices must be
              paid within the specified timeframe. Late payments may incur
              interest charges and we may suspend services until payment is
              received.
            </li>

            <li>
              <span className="font-semibold">INTELLECTUAL PROPERTY:</span> You
              retain rights to materials you provide to us. We retain rights to
              our pre-existing materials and methodologies. Upon full payment,
              you receive a non-exclusive license to use the deliverables, while
              we retain the right to use non-confidential aspects for our
              portfolio.
            </li>

            <li>
              <span className="font-semibold">CONFIDENTIALITY:</span> Both
              parties agree to maintain confidentiality of all non-public
              information shared during our engagement, with standard exceptions
              for information that becomes public through no fault of the
              receiving party or is required to be disclosed by law.
            </li>

            <li>
              <span className="font-semibold">DISCLAIMER OF LIABILITY:</span>{" "}
              ShoutStart is not liable for any outcomes resulting from our
              services. We cannot guarantee specific media placement, coverage
              results or business outcomes. Our maximum liability is limited to
              the total fees you paid for the specific services in question. We
              are not liable for any indirect, special, incidental or
              consequential damages including lost profits or opportunities. By
              engaging our services, you acknowledge and accept that ShoutStart
              is not liable for anything beyond the direct fees paid.
            </li>

            <li>
              <span className="font-semibold">TERM AND TERMINATION:</span> Our
              engagement begins on the date specified in your Service Agreement
              and continues until completed or terminated. Either party may
              terminate with written notice but you remain responsible for
              payment of services performed up to the termination date.
            </li>

            <li>
              <span className="font-semibold">GENERAL PROVISIONS:</span>{" "}
              ShoutStart acts as an independent contractor, not as your employee
              or agent. Neither party will be liable for failures due to
              circumstances beyond reasonable control. These Terms together with
              your Service Agreement, constitute our entire agreement. Any
              amendments must be in writing and signed by both parties.
            </li>

            <li>
              <span className="font-semibold">CONTACT INFORMATION:</span> For
              questions regarding these Terms, please contact us at:
            </li>
          </ol>

          <div className="mt-6">
            <p className="font-semibold">ShoutStart</p>
            <p>[Address]</p>
            <p>[Email]</p>
            <p>[Phone]</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
