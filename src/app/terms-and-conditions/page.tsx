"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsAndConditionsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="fixed top-28 left-4 z-50 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 text-[#2076C7] font-medium border border-gray-100 group cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform duration-200">
          <path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>
        </svg>
        <span>Back</span>
      </button>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg flex flex-col hover:shadow-xl transition-shadow duration-300">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#2076C7] to-[#1CADA3] text-white py-8 px-6 text-center shrink-0 rounded-t-xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Terms And Conditions</h1>
            <p className="text-blue-100 italic">Our Terms and Conditions</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">

            {/* Important Notice */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <div className="flex items-start space-x-3">
                <div className="text-amber-500 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-amber-800">
                  Please read the following carefully. These terms and conditions (&quot;Terms and Conditions&quot;) control your use of this website https://bhartisharemarket.com/ (&quot;Website&quot;). In these Terms and Conditions, &quot;Bharti Share Market&quot; is referred to as the &quot;Company&quot;, &quot;us,&quot; or &quot;we.&quot;
                </p>
              </div>
            </div>

            {/* Terms of Use */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Terms of Use</h2>
              <p className="text-gray-700 leading-relaxed">
                &apos;You&apos; refers as user or a paying customer. If you are a company or another person who gives access to company products, you agree to take responsibility in full in case of damages or indemnification that could properly lie against the customer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Bharti Share Market web site (the &apos;Site&apos;), the educational services made available through the site and the content (the &apos;Products&apos;) are owned, operated and maintained, as applicable, by Bharti Share Market (&apos;we&apos;, &apos;our&apos;, &apos;us&apos;, or the &apos;Company&apos;). The Site, Products and Content are, collectively, the &apos;Company Products&apos;.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using this website or its Products and Services, You Agree and Warrant that you have read, understood, and agree to be bound by these terms. If you do not accept these terms, you must not use — and are not authorized to use — all or any portion of the company&apos;s website and its products or services.
              </p>
            </section>

            {/* General Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">General Terms</h2>
              <div className="space-y-3">
                {[
                  "You should not use this site in an unlawful manner; you must respect website terms and conditions and follow the privacy policy.",
                  "Under no situations or circumstances, the company will be liable for any change in the content which it provides on the website through its products and services, including but not limited to any errors, omissions, loss or damage experienced in connection with the use of exposure, any content made available via our products, services or various resources such as email, blog etc.",
                  "Our services are free to any user with access to the internet. However, we are not responsible for the charges incurred for the usage of hardware, software or internet services provider fee.",
                  "You will be required to use login credentials for some of the sections on the site and the company reserves the right to block access to our services for any user who does not follow these conditions.",
                  "We make sure that users get uninterrupted access to our service, but there is no obligation to do so.",
                  "Bharti Share Market is not responsible and is not obligated for issues in your network or server beyond certain limits."
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2076C7] hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Website Usage Guidelines */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Website Usage Guidelines</h2>
              <div className="space-y-3">
                {[
                  "Do not insult, abuse, harass, stalk, threaten or otherwise infringe the rights of others.",
                  "Do not publish, post, distribute or disseminate any defamatory, infringing, indecent, offensive or unlawful material or information.",
                  "Do not upload, install, transfer files which are protected by Intellectual Property laws or software which affect other computers.",
                  "It's prohibited to edit HTML source code, reverse engineer or attempt to hack.",
                  "Do not run Spam services/scripts or anything which could affect infrastructure, and in turn, users.",
                  "Do not communicate spam, advertise or sell services such as digital downloads, eBooks or phishing links.",
                  "You may not copy, distribute and indulge in plagiarism with website content or user submitted content."
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2076C7] hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* The Content */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">The Content</h2>
              <p className="text-gray-700 leading-relaxed">
                All website content or information that can be seen, heard or otherwise experienced on the Site is copyrighted and belongs to Bharti Share Market or its partners, affiliates or third parties. You may use the Site, the Service and the Content for your own personal, non-commercial use only.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You may download and print the available material for your own personal, non-commercial use only.</li>
                <li>You will not transfer any information from the website or produce derivative work which you can display, distribute or transmit.</li>
                <li>This website may have links to other websites. We do not undertake any control on the content of these websites; nor are we responsible for their website content.</li>
              </ul>
            </section>

            {/* Links and Hyperlinks */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Links and Hyperlinks Terms</h2>
              <div className="space-y-3">
                {[
                  "You may not mirror or frame the home page or any other pages of this Site on any other web site or web page.",
                  "Do not link to Bharti Share Market pages and subpages with spam links/anchor text which could provide false impression.",
                  "Do not use or include copyrighted or registered trademarks, or Intellectual property images, design or content as a link to Bharti Share Market website.",
                  "Do not link to pages which support racism, terrorism.",
                  "Do not link to pages which provide pornographic content and violate human rights."
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2076C7] hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Copyright and Intellectual Property */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Copyright and Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed">
                We value and respect others intellectual property and expect our users to do the same. The entire contents of the Site are protected by copyright and trademark laws. The material on the site, including text, graphics, code and/or software is copyrighted and belongs to Bharti Share Market, therefore you may not duplicate, modify, publish or reproduce the content in any manner.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bharti Share Market has all the rights to disable or prohibit access to the users who do not respect and involve in the infringement of Bharti Share Market intellectual property. You are not allowed to use any of the digital images or logos from the website.
              </p>
            </section>

            {/* Claims of IP Violations */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Claims of Intellectual Property Violations</h2>
              <p className="text-gray-700 leading-relaxed">If you believe that your work has been used without your permission in a way which prompts for copyright infringement, please provide us the below information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>The authorized person who will act on behalf of the owner of the copyright, should send a digital or physical signature.</li>
                <li>A description of the copyrighted work that you claim to be infringing your IP.</li>
                <li>A description of where and how the material that you claim is infringing is located on the Bharti Share Market website.</li>
                <li>Contact Details — Address, telephone number, and email address.</li>
                <li>A statement by you, that the information which you provided is accurate and your claim of the copyright or intellectual property is on your owner&apos;s behalf.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can reach Bharti Share Market to notify your claims of copyright by email: <span className="bg-amber-50 px-2 py-1 rounded font-semibold text-amber-800">ecourse@bhartiinstitute.com</span>.
              </p>
            </section>

            {/* Transaction Terms */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Transaction Terms</h2>
              <div className="space-y-3">
                {[
                  "To make a transaction on Bharti Share Market website, you are bound to pay for that transaction.",
                  "Please pay close attention to your payment details such as total bill, taxes, shipping costs, discounts.",
                  "There are certain products which require additional terms and conditions which you have to agree before you make the purchase.",
                  "WE MAKE NO WARRANTIES OF ANY KIND, EXPRESSED OR IMPLIED, WITH RESPECT TO ANY PRODUCTS OR SERVICES SOLD ON OR THROUGH Bharti Share Market.",
                  "No additional or different terms contained in any purchase order, document, transmission or other communication shall be binding upon Bharti Share Market unless agreed to by Bharti Share Market in writing.",
                  "Bharti Share Market reserves the right to modify, change without prior notice and in its sole discretion, to limit the order quantity on any item and to refuse service to anyone."
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2076C7] hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Disclaimer */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Pricing Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                All prices, products and offers of Bharti Share Market website are subject to change without notice. While we make sure to provide most accurate and up-to-date information, in some cases one or more items on our web site may be priced incorrectly. This might happen due to human errors, digital images, technical error or a mismatch in pricing information received from our suppliers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Bharti Share Market reserves the right to change prices for all our products, offers or deals. These changes are done due to market conditions, course termination, providers, price changes, errors in advertisements and other mitigating circumstances. However the price you paid at the time of purchase still holds for you.
              </p>
            </section>

            {/* Acceptance */}
            <section>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <div className="flex items-start space-x-3">
                  <div className="text-green-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-green-800">
                    By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
