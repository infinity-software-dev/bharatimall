"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  MapPin, 
  Eye, 
  EyeOff, 
  RefreshCw, 
  CheckCircle,
  X
} from "lucide-react";

// Indian States and Cities Data
const STATE_CITIES_DATA: { [key: string]: string[] } = {
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Kolhapur"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar"],
  "Delhi": ["New Delhi", "North Delhi", "South Delhi", "West Delhi", "East Delhi"],
  "Karnataka": ["Bengaluru", "Mysore", "Hubli-Dharwad", "Mangalore", "Belgaum", "Gulbarga"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Noida", "Ghaziabad", "Agra", "Varanasi", "Meerut"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"]
};

export default function RegisterPage() {
  const router = useRouter();

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    referralCode: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: ""
  });

  // Verification Captcha State
  const [captcha, setCaptcha] = useState({ num1: 7, num2: 9, answer: "" });
  const [agree, setAgree] = useState(false);

  // UI Control State
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [successMsg, setSuccessMsg] = useState("");

  // Populate dynamic captcha on load
  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 10) + 1;
    const n2 = Math.floor(Math.random() * 10) + 1;
    setCaptcha({ num1: n1, num2: n2, answer: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset city if state changes
      if (name === "state") {
        updated.city = "";
      }
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: string[] = [];

    // Validations
    if (!formData.fullName.trim()) newErrors.push("Full Name is required.");
    if (!formData.email.trim()) newErrors.push("Email Address is required.");
    if (!formData.mobileNumber.trim()) {
      newErrors.push("Mobile Number is required.");
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.push("Mobile Number must be a valid 10-digit number.");
    }

    if (!formData.state) newErrors.push("Please select your State.");
    if (!formData.city) newErrors.push("Please select your City.");

    if (formData.password.length < 8) {
      newErrors.push("Password must be at least 8 characters.");
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }

    // Captcha validation
    const correctAnswer = captcha.num1 + captcha.num2;
    if (parseInt(captcha.answer) !== correctAnswer) {
      newErrors.push("Verification answer is incorrect.");
      generateCaptcha(); // Regenerate Captcha on error
    }

    if (!agree) {
      newErrors.push("You must agree to the Terms & Privacy Policy.");
    }

    if (newErrors.length > 0) {
      setErrors(newErrors);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Process local storage data
    const existingUsersJSON = localStorage.getItem("bharatimall_users");
    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    // Check duplicate email
    const isDuplicate = existingUsers.some((u: any) => u.email.toLowerCase() === formData.email.toLowerCase());
    if (isDuplicate) {
      setErrors(["Email is already registered. Please login or use a different email."]);
      return;
    }

    // Save user
    const newUser = {
      fullName: formData.fullName,
      email: formData.email,
      mobileNumber: formData.mobileNumber,
      referralCode: formData.referralCode,
      state: formData.state,
      city: formData.city,
      password: formData.password
    };

    existingUsers.push(newUser);
    localStorage.setItem("bharatimall_users", JSON.stringify(existingUsers));

    setErrors([]);
    setSuccessMsg("Registration successful! Redirecting to sign in page...");

    // Clear form
    setFormData({
      fullName: "",
      email: "",
      mobileNumber: "",
      referralCode: "",
      state: "",
      city: "",
      password: "",
      confirmPassword: ""
    });

    // Redirect to login page after 2 seconds
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-16 px-4 relative overflow-hidden">
        {/* Decorative backdrop gradients */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#2076C7]/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#1CADA3]/5 blur-[120px] pointer-events-none" />

        {/* Register Dialog Container */}
        <div className="relative w-full max-w-2xl bg-white text-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl z-10 animate-slide-up border border-zinc-100">
          
          {/* Close button representation */}
          <Link href="/" className="absolute top-6 right-6 p-1.5 rounded-full text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100 transition-colors">
            <X className="w-5 h-5" />
          </Link>

          {/* Modal Header Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-[#2076C7] tracking-tight">Customer Registration</h1>
            <p className="text-xs text-zinc-500 mt-1.5 font-medium">Create your account to apply for services.</p>
          </div>

          {/* Error Bulletins */}
          {errors.length > 0 && (
            <div className="p-4.5 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs rounded-r-xl space-y-1 font-semibold mb-6">
              {errors.map((err, i) => (
                <div key={i}>• {err}</div>
              ))}
            </div>
          )}

          {/* Success Bulletins */}
          {successMsg && (
            <div className="p-4.5 bg-green-50 border-l-4 border-green-500 text-green-700 text-xs rounded-r-xl font-bold flex items-center gap-2 mb-6 animate-pulse">
              <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
              {successMsg}
            </div>
          )}

          {/* Registration Details Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Subsection header */}
            <div className="border-l-4 border-[#2076C7] pl-3">
              <h3 className="text-zinc-800 font-extrabold text-sm uppercase tracking-wider">Registration Details</h3>
            </div>

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="abc@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="10-digit Mobile"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                />
              </div>

              {/* Referral Code */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5 flex items-center gap-1">
                  Referral Code <span className="text-zinc-400 font-medium font-sans text-[10px]">(Optional)</span>
                </label>
                <input
                  type="text"
                  name="referralCode"
                  placeholder="Referral Code"
                  value={formData.referralCode}
                  onChange={handleInputChange}
                  className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                />
              </div>

              {/* State Dropdown */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                >
                  <option value="">Select State</option>
                  {Object.keys(STATE_CITIES_DATA).map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* City Dropdown */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">City</label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  disabled={!formData.state}
                  className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all disabled:bg-zinc-50 disabled:text-zinc-400"
                >
                  <option value="">
                    {formData.state ? "Select City" : "Select State first"}
                  </option>
                  {formData.state && STATE_CITIES_DATA[formData.state].map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Min 8 chars"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 pl-3.5 pr-10 text-sm placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-zinc-400 hover:text-zinc-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 pl-3.5 pr-10 text-sm placeholder-zinc-400 focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-3 text-zinc-400 hover:text-zinc-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Captcha Math Verification */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-zinc-700">
                Verification: {captcha.num1} + {captcha.num2} = ?
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="captchaAnswer"
                  placeholder="?"
                  value={captcha.answer}
                  onChange={(e) => setCaptcha((prev) => ({ ...prev, answer: e.target.value }))}
                  className="w-28 bg-white text-zinc-800 border border-zinc-200 rounded-lg py-2.5 px-3.5 text-sm text-center focus:outline-none focus:border-[#2076C7] focus:ring-1 focus:ring-[#2076C7]/20"
                />
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 text-zinc-500 hover:text-zinc-800 transition-colors"
                  title="Generate new sum"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Agreement Terms Checkbox Container Card */}
            <div className="border border-zinc-100 rounded-xl p-3 bg-zinc-50/50 flex items-start gap-3">
              <input
                type="checkbox"
                id="agree-checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="mt-0.5 rounded border-zinc-300 text-[#1CADA3] focus:ring-[#1CADA3] cursor-pointer"
              />
              <label htmlFor="agree-checkbox" className="text-[11px] text-zinc-500 leading-normal cursor-pointer select-none">
                I agree to the <Link href="/about" className="font-bold text-[#2076C7] hover:underline">Terms</Link> & <Link href="/about" className="font-bold text-[#2076C7] hover:underline">Privacy Policy</Link>.
              </label>
            </div>

            {/* Cyan Register Now button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2076C7] to-[#1CADA3] hover:shadow-lg hover:shadow-[#2076C7]/15 active:scale-99 transition-all cursor-pointer text-center"
            >
              Register Now
            </button>
            
            <div className="text-center text-xs text-zinc-500">
              Already registered customer?{" "}
              <Link href="/login" className="font-bold text-[#2076C7] hover:underline">
                Sign In here
              </Link>
            </div>

          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
