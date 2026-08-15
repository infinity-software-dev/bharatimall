import { toast } from "react-hot-toast";

export interface ProductEnquiry {
  id: string;
  productTitle: string;
  productId?: string;
  category: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  preferredContact: "WhatsApp" | "Phone Call" | "Email";
  preferredTime: string;
  budgetOrCoverage: string;
  message: string;
  createdAt: string;
  status: "Pending" | "In Review" | "Contacted" | "Closed";
}

const STORAGE_KEY = "bharatimall_product_enquiries";

/**
 * Retrieve all product enquiries from localStorage.
 */
export function getStoredEnquiries(): ProductEnquiry[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as ProductEnquiry[];
  } catch (error) {
    toast.error("Unable to load stored product enquiries.");
    return [];
  }
}

/**
 * Save a new product enquiry to localStorage.
 */
export function saveEnquiry(
  data: Omit<ProductEnquiry, "id" | "createdAt" | "status"> & {
    id?: string;
    createdAt?: string;
    status?: ProductEnquiry["status"];
  }
): ProductEnquiry {
  const enquiries = getStoredEnquiries();
  
  const newEnquiry: ProductEnquiry = {
    id: data.id || `ENQ-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`,
    productTitle: data.productTitle,
    productId: data.productId || "",
    category: data.category || "Insurance",
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    city: data.city || "Not Specified",
    preferredContact: data.preferredContact || "Phone Call",
    preferredTime: data.preferredTime || "Morning (9 AM - 12 PM)",
    budgetOrCoverage: data.budgetOrCoverage || "Standard Coverage",
    message: data.message || "",
    createdAt: data.createdAt || new Date().toISOString(),
    status: data.status || "Pending",
  };

  const updated = [newEnquiry, ...enquiries];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    toast.success("Enquiry details logged successfully!");
  } catch (error) {
    toast.error("Failed to save enquiry.");
  }

  return newEnquiry;
}

/**
 * Delete an enquiry by ID.
 */
export function deleteEnquiry(id: string): ProductEnquiry[] {
  const enquiries = getStoredEnquiries();
  const updated = enquiries.filter((e) => e.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    toast.success("Enquiry deleted.");
  } catch (error) {
    toast.error("Failed to delete enquiry.");
  }
  return updated;
}

/**
 * Clear all stored enquiries.
 */
export function clearAllEnquiries(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    toast.success("All stored enquiries cleared.");
  } catch (error) {
    toast.error("Failed to clear enquiries.");
  }
}

/**
 * Update enquiry status in localStorage.
 */
export function updateEnquiryStatus(id: string, status: ProductEnquiry["status"]): ProductEnquiry[] {
  const enquiries = getStoredEnquiries();
  const updated = enquiries.map((e) => (e.id === id ? { ...e, status } : e));
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    toast.success(`Enquiry status updated to ${status}`);
  } catch (error) {
    toast.error("Failed to update enquiry status.");
  }
  return updated;
}
