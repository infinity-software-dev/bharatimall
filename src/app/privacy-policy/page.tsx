"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-blue-100 italic">Our Privacy Policy</p>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 md:p-8 space-y-8">

            {/* Overview */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                We take your privacy seriously and are committed to protect your right to privacy as a user of our website. We have made every effort to ensure your information is secure. This privacy policy information covers what information is collected, what we do with it, and what you can do about it. You can use this information to make your decisions about your privacy.
              </p>
            </section>

            {/* Information Practices */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Bharti Share Market Information Practices</h2>
              <p className="text-gray-700 leading-relaxed">
                Every effort has been taken to ensure the accuracy of the information on the website; the content is naturally subject to change. We are not responsible for any damages arising out of the use of the information held on this server.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We assure that all our downloadable training content is virus free. However, Bharti Share Market can accept no liability for damages resulting from virus infection.
              </p>
            </section>

            {/* Information Collected */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Information collected by Bharti Share Market</h2>
              <p className="text-gray-700 leading-relaxed">You have total control on the privacy of your information.</p>
              <div className="space-y-3">
                {[
                  "Your information will never be sold, exchanged or disclosed to any third party for marketing purposes.",
                  "You can decide whether you want to opt-in to receive offers from us.",
                  "You can browse our website without registration. We may collect and store the information that you voluntarily disclose to us, in order to access our free tests and discussion forum.",
                  "We do not share your personal information with any third party. We do not collect information about our visitors from email databases, private/public organization or bodies.",
                  "We may use your information to contact you via email or telephone, typically to get feedback, to inform you about new products or provide support on your issues. If you do not want us to contact you via email, you can unsubscribe at any time with one click.",
                  "When you purchase our online products or register for classroom training, you need to make the payment online, thus you will be required to share your personal information such as name, e-mail address, telephone number, address(s), credit card number, expiration, and CVV number, with us.",
                  "Your credit card information is never stored in our system as it is processed by our payment gateway which uses Secure Encryption Technology (SSL). Our payment processing partners are CC Avenue, PayPal and Google Checkout."
                ].map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#2076C7] hover:bg-gray-100 transition-colors duration-200">
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cookie Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Cookie Information</h2>
              <p className="text-gray-700 leading-relaxed">
                In order to enhance your online experience and track website performance, our website uses cookies. It&apos;s a small text file which gets placed in your computer hard drive and can be retrieved later. Cookies do not tell us who you are.
              </p>
            </section>

            {/* Ecommerce Tracking */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Ecommerce Tracking</h2>
              <p className="text-gray-700 leading-relaxed">
                To provide superior online shopping experience, our shopping cart may use cookies to temporarily store name and email address. Cookies will never store credit card information as they&apos;re processed using Secure SSL using payment gateways.
              </p>
            </section>

            {/* External Links */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">External Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may have links to other sites which includes third party websites or resources. We are not responsible for the privacy policies and information practices of third party websites. Please read privacy policies of third party websites as every website has different terms of use and privacy policies.
              </p>
            </section>

            {/* Course Content */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Course Content</h2>
              <p className="text-gray-700 leading-relaxed">
                Course content for all the study programs both online and blended programs, it is provided for the purpose of education and guidance only. The course content is regularly reviewed and is subjected to change without notice. Bharti Share Market reserves the right to modify training content without notice.
              </p>
            </section>

            {/* Copyright Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Copyright Information</h2>
              <p className="text-gray-700 leading-relaxed">
                You can electronically copy or take print of the website pages, if it is being used for personal use only. Bharti Share Market holds the copyright to all the material on this website, unless otherwise indicated. A written permission of the copyright holder must be obtained for any use of this material other than for purposes permitted by law.
              </p>
            </section>

            {/* Personal Information and Video Capture */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Personal Information and Video Capture</h2>
              <p className="text-gray-700 leading-relaxed">
                Any images captured during events organized and hosted by Bharti Share Market should not be misused. That includes pictures of Bharti Share Market staff and training participants. If you enroll in a Bharti Share Market course your picture may also be featured in photos or videos of the Bharti Share Market classes.
              </p>
            </section>

            {/* Sharing Your Personal Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Sharing Your Personal Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have purchased a Bharti Share Market course, we may ask you for testimonial and if you authorize us, we will display your testimonial on our website, photos and videos or in our social media channels such as Facebook, YouTube or Flickr. You should be aware that your publicly identifiable information could be used to send you promotional, unsolicited messages. We are not responsible for your personal information which you have chosen to display.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you don&apos;t want us to feature your pictures/testimonials on our website or on our social media channels, you can write a mail to <span className="bg-amber-50 px-2 py-1 rounded font-semibold text-amber-800">ecourse@bhartiinstitute.com</span>.
              </p>
            </section>

            {/* Personal Information Corrections */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Personal Information Corrections</h2>
              <p className="text-gray-700 leading-relaxed">
                You can contact us if you notice that the information we are holding is incorrect or incomplete. Please send us a mail to <span className="bg-amber-50 px-2 py-1 rounded font-semibold text-amber-800">ecourse@bhartiinstitute.com</span>.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Changes to Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                This privacy policy terms may change time to time and we reserve the right to change the terms of this privacy policy at any time. When we update the privacy policy, all our registered users will be notified via email.
              </p>
            </section>

            {/* Deleting Personal Information */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#2076C7] border-l-4 border-[#1CADA3] pl-4">Deleting Personal Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If you would like to delete your account, write to <span className="bg-amber-50 px-2 py-1 rounded font-semibold text-amber-800">ecourse@bhartiinstitute.com</span>.
              </p>
            </section>

            {/* Contact */}
            <section>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-start space-x-3">
                  <div className="text-blue-500 mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-800">
                    If you have any questions regarding Bharti Share Market Privacy Policy, please write to <span className="bg-amber-50 px-2 py-1 rounded font-semibold text-amber-800">ecourse@bhartiinstitute.com</span>.
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
