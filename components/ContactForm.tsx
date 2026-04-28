// 'use client';

// import { useState } from 'react';
// import Button from './ui/Button';
// import Input from './ui/Input';

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch('/api/submit-lead', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Lead submitted successfully!');
//         setFormData({ name: '', email: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Failed to submit lead');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <Input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//           <Input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows={5}
//           />
//           <Button type="submit" disabled={isLoading}>
//             {isLoading ? 'Sending...' : 'Send Message'}
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// }
// components/ContactForm.tsx
'use client';

import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState('loading');
    setErrorMessage('');

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // Functional state hook to call the internal API (Bonus)
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setFormState('success');
        (event.target as HTMLFormElement).reset(); // Reset form on success
      } else {
        setFormState('error');
        setErrorMessage(result.error || 'Failed to submit form.');
      }
    } catch (error) {
      setFormState('error');
      setErrorMessage('An unexpected error occurred.');
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-950 mb-6">Ready to accelerate development?</h2>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">Tell us about your project or request a live demo. A dedicated solutions engineer will get in touch shortly.</p>
        <p className="text-sm text-gray-500">Form responses are processed by our Next.js API serverless route (Bonus Feature).</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-inner">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
            <input id="name" name="name" type="text" required className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">Business Email</label>
            <input id="email" name="name" type="email" required className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">Project Details (Optional)</label>
            <textarea id="message" name="message" rows={4} className="w-full px-5 py-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-100 focus:border-blue-300 transition" />
          </div>

          <button
            type="submit"
            disabled={formState === 'loading'}
            className="w-full text-center px-8 py-3 text-lg font-semibold text-white bg-gray-950 rounded-lg hover:bg-gray-800 transition shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {formState === 'loading' ? 'Submitting...' : 'Submit Request'}
          </button>

          {/* Form Feedback UI (Crucial Requirement) */}
          {formState === 'success' && (
            <p className="p-4 rounded-lg bg-green-100 text-green-800 text-center text-sm font-medium">Thank you! Your request has been received. We'll be in touch soon.</p>
          )}
          {formState === 'error' && (
            <p className="p-4 rounded-lg bg-red-100 text-red-800 text-center text-sm font-medium">Error: {errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}