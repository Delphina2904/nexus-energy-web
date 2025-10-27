import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const TABS = [
  { label: 'Customer', value: 'customer' },
  { label: 'Suggestions and Feedback', value: 'feedback' },
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState(TABS[0].value);
  // Verification code
  const [captcha, setCaptcha] = useState(() => Math.random().toString(36).substring(2, 7).toUpperCase());
  const [captchaInput, setCaptchaInput] = useState("");
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  // Customer form
  const [customerData, setCustomerData] = useState({
    company: "",
    website: "",
    name: "",
    tel: "",
    email: "",
    scenario: [],
    area: "",
    requirements: "",
    captcha: "",
    agree: false,
  });
  // Feedback form
  const [feedbackData, setFeedbackData] = useState({
    name: "",
    tel: "",
    email: "",
    title: "",
    details: "",
    captcha: "",
    agree: false,
  });

  // Handlers for both forms
  const handleCustomerChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'scenario') {
      setCustomerData((prev) => {
        const arr = prev.scenario.includes(value)
          ? prev.scenario.filter((v) => v !== value)
          : [...prev.scenario, value];
        return { ...prev, scenario: arr };
      });
    } else if (type === 'checkbox' && name === 'agree') {
      setAgree(checked);
      setCustomerData((prev) => ({ ...prev, agree: checked }));
    } else {
      setCustomerData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleFeedbackChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox' && name === 'agree') {
      setAgree(checked);
      setFeedbackData((prev) => ({ ...prev, agree: checked }));
    } else {
      setFeedbackData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    let valid = true;
    if (activeTab === 'customer') {
      // Validate required fields
      const required = [customerData.company, customerData.name, customerData.tel, customerData.email, customerData.scenario.length, customerData.requirements, captchaInput, agree];
      if (required.some((v) => !v)) {
        setError("Please fill in all required fields and agree to the privacy policy.");
        valid = false;
      } else if (captchaInput !== captcha) {
        setError("Verification code is incorrect.");
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(customerData.email)) {
        setError("Please enter a valid email address.");
        valid = false;
      }
      if (!valid) return;
      setIsSubmitting(true);
      // EmailJS template for customer
      const htmlTemplate = `
        <div style='font-family:Segoe UI,Arial,sans-serif;background:#f8fafc;padding:32px;color:#222;'>
          <div style='max-width:700px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px #e0e7ef;padding:32px;'>
            <h2 style='color:#2563eb;margin-bottom:16px;'>Customer Contact Submission</h2>
            <hr style='margin-bottom:24px;border:none;border-top:2px solid #e0e7ef;' />
            <div><b>Company:</b> ${customerData.company}</div>
            <div><b>Website:</b> ${customerData.website}</div>
            <div><b>Name:</b> ${customerData.name}</div>
            <div><b>Tel:</b> ${customerData.tel}</div>
            <div><b>Email:</b> ${customerData.email}</div>
            <div><b>Application scenario:</b> ${customerData.scenario.join(', ')}</div>
            <div><b>Application area:</b> ${customerData.area}</div>
            <div><b>Requirements:</b> ${customerData.requirements}</div>
          </div>
        </div>
      `;
      try {
        const payload = {
          company: customerData.company,
          website: customerData.website,
          name: customerData.name,
          tel: customerData.tel,
          email: customerData.email,
          scenario: customerData.scenario.join(', '),
          area: customerData.area,
          requirements: customerData.requirements,
          html_message: htmlTemplate,
        };
        // ...removed debug logs...
        await emailjs.send(
          'service_2g0877i',
          'template_zb7nn07',
          payload,
          'BPhDWuSGdzWh8fu5J'
        );
        toast({ title: "Message sent!", description: "We'll get back to you as soon as possible.", duration: 5000 });
        setCustomerData({ company: "", website: "", name: "", tel: "", email: "", scenario: [], area: "", requirements: "", captcha: "", agree: false });
        setCaptchaInput("");
        setAgree(false);
        setCaptcha(Math.random().toString(36).substring(2, 7).toUpperCase());
      } catch (err) {
        if (typeof window !== 'undefined') {
          window.alert('EmailJS error (customer): ' + (err?.text || err?.message || err));
        }
        console.error('EmailJS error (customer):', err);
        setError("Failed to send message. Please try again later. " + (err?.text || ''));
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Feedback tab
      const required = [feedbackData.name, feedbackData.tel, feedbackData.email, feedbackData.title, feedbackData.details, captchaInput, agree];
      if (required.some((v) => !v)) {
        setError("Please fill in all required fields and agree to the privacy policy.");
        valid = false;
      } else if (captchaInput !== captcha) {
        setError("Verification code is incorrect.");
        valid = false;
      } else if (!/^\S+@\S+\.\S+$/.test(feedbackData.email)) {
        setError("Please enter a valid email address.");
        valid = false;
      }
      if (!valid) return;
      setIsSubmitting(true);
      const htmlTemplate = `
        <div style='font-family:Segoe UI,Arial,sans-serif;background:#f8fafc;padding:32px;color:#222;'>
          <div style='max-width:700px;margin:0 auto;background:#fff;border-radius:12px;box-shadow:0 2px 8px #e0e7ef;padding:32px;'>
            <h2 style='color:#2563eb;margin-bottom:16px;'>Suggestions & Feedback</h2>
            <hr style='margin-bottom:24px;border:none;border-top:2px solid #e0e7ef;' />
            <div><b>Name:</b> ${feedbackData.name}</div>
            <div><b>Tel:</b> ${feedbackData.tel}</div>
            <div><b>Email:</b> ${feedbackData.email}</div>
            <div><b>Title:</b> ${feedbackData.title}</div>
            <div><b>Details:</b> ${feedbackData.details}</div>
          </div>
        </div>
      `;
      try {
        const payload = {
          name: feedbackData.name,
          tel: feedbackData.tel,
          email: feedbackData.email,
          title: feedbackData.title,
          details: feedbackData.details,
          html_message: htmlTemplate,
        };
        // ...removed debug logs...
        await emailjs.send(
          'service_2g0877i',
          'template_zb7nn07',
          payload,
          'BPhDWuSGdzWh8fu5J'
        );
        toast({ title: "Message sent!", description: "We'll get back to you as soon as possible.", duration: 5000 });
        setFeedbackData({ name: "", tel: "", email: "", title: "", details: "", captcha: "", agree: false });
        setCaptchaInput("");
        setAgree(false);
        setCaptcha(Math.random().toString(36).substring(2, 7).toUpperCase());
      } catch (err) {
        if (typeof window !== 'undefined') {
          window.alert('EmailJS error (feedback): ' + (err?.text || err?.message || err));
        }
        console.error('EmailJS error (feedback):', err);
        setError("Failed to send message. Please try again later. " + (err?.text || ''));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-b-xl shadow-lg border border-gray-200">
      {/* Tab Bar - Nexus Energy style */}
      <div className="flex w-full rounded-t-xl overflow-hidden h-[80px] mb-0">
        {TABS.map((tab, idx) => (
          <button
            key={tab.value}
            className={`flex-1 h-[80px] text-lg font-semibold transition-all duration-200 focus:outline-none border-none ${
              activeTab === tab.value
                ? 'bg-[#0028AA] text-white border-b-4 border-[#0028AA]'
                : 'bg-[#001e5a] text-white/80 border-b-4 border-transparent hover:bg-[#0028AA] hover:text-white'
            } ${idx === 0 ? 'rounded-tl-xl' : ''} ${idx === TABS.length - 1 ? 'rounded-tr-xl' : ''}`}
            onClick={() => setActiveTab(tab.value)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 pt-8">
        {activeTab === 'customer' ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Company name<span className="text-red-500">*</span></label>
                <Input name="company" value={customerData.company} onChange={handleCustomerChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Official website</label>
                <Input name="website" value={customerData.website} onChange={handleCustomerChange} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name<span className="text-red-500">*</span></label>
                <Input name="name" value={customerData.name} onChange={handleCustomerChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tel.<span className="text-red-500">*</span></label>
                <Input name="tel" value={customerData.tel} onChange={handleCustomerChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-mail<span className="text-red-500">*</span></label>
                <Input name="email" value={customerData.email} onChange={handleCustomerChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Application scenario<span className="text-red-500">*</span></label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {['Passenger vehicles','Private vehicles','Operating vehicles','Commercial vehicles','Bus & Coach','Logistic vehicles','Heavy trucks','Sanitation vehicles','Energy storage','Generation side','Transmission & Distribution (T&D)','Commercial & Industrial (C&I)','Residential','UPS','Telecoms base station','Microgrid','Others (charge station...)','New businesses','Vessels','Application in ports','Application in airports','Rail traffic','Forklifts','Two- or three-wheeled vehicles','Engineering machinery','Others'].map(opt => (
                  <label key={opt} className="flex items-center gap-2">
                    <input type="checkbox" name="scenario" value={opt} checked={customerData.scenario.includes(opt)} onChange={handleCustomerChange} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Application areas</label>
              <select name="area" value={customerData.area} onChange={handleCustomerChange} className="w-full border rounded px-3 py-2">
                <option value="">Select an area</option>
                <option value="North America">North America</option>
                <option value="Europe">Europe</option>
                <option value="Asia">Asia</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Detailed requirements (estimated order requirements, expected delivery date, other special requirements, etc.)<span className="text-red-500">*</span></label>
              <Textarea name="requirements" value={customerData.requirements} onChange={handleCustomerChange} required className="min-h-[100px]" />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name<span className="text-red-500">*</span></label>
                <Input name="name" value={feedbackData.name} onChange={handleFeedbackChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tel.<span className="text-red-500">*</span></label>
                <Input name="tel" value={feedbackData.tel} onChange={handleFeedbackChange} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">E-mail<span className="text-red-500">*</span></label>
                <Input name="email" value={feedbackData.email} onChange={handleFeedbackChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Suggested Title<span className="text-red-500">*</span></label>
              <Input name="title" value={feedbackData.title} onChange={handleFeedbackChange} required />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Suggested Details<span className="text-red-500">*</span></label>
              <Textarea name="details" value={feedbackData.details} onChange={handleFeedbackChange} required className="min-h-[100px]" />
            </div>
          </>
        )}
        <div className="flex items-center gap-2 mt-4">
          <span className="font-mono bg-gray-100 px-3 py-2 rounded border">{captcha}</span>
          <Input className="w-32" value={captchaInput} onChange={e => setCaptchaInput(e.target.value.toUpperCase())} placeholder="Enter code" required />
          <button type="button" className="ml-2 text-blue-600 underline" onClick={() => setCaptcha(Math.random().toString(36).substring(2, 7).toUpperCase())}>↻</button>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="agree" checked={agree} onChange={e => setAgree(e.target.checked)} />
          <label htmlFor="agree" className="text-sm">I agree to comply with <a href="/privacy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a></label>
        </div>
        {error && <div className="text-red-600 text-sm mb-2">{error}</div>}
        <Button type="submit" disabled={isSubmitting} className="w-fit bg-[#001E5A] hover:bg-primary/90 text-white py-6 text-lg font-medium">
          {isSubmitting ? "Sending..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
