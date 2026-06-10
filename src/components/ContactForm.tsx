import { useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/styles/motionVariants';

const formFields = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', placeholder: 'you@company.com' },
  { name: 'budget', label: 'Project type / budget', type: 'text', autoComplete: 'off', placeholder: 'Website, app, platform…' },
];

type FormState = Record<string, string>;

const inputClasses =
  'mt-2 w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-ink3 outline-none backdrop-blur-md transition focus:border-brand-cyan/50 focus:shadow-[0_0_0_4px_rgba(19,78,124,0.12)]';

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', budget: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const emailConfig = useMemo(
    () => ({
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }),
    [],
  );

  const canUseEmail = Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!formState.name.trim()) nextErrors.name = 'Name is required.';
    if (!formState.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = 'Enter a valid email.';
    if (!formState.message.trim()) nextErrors.message = 'Tell us a bit about your project.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    if (!validate()) {
      event.preventDefault();
      return;
    }
    if (!canUseEmail) return; // degrade to Netlify form post

    event.preventDefault();
    setStatus('loading');
    try {
      await emailjs.send(
        emailConfig.serviceId!,
        emailConfig.templateId!,
        {
          name: formState.name,
          email: formState.email,
          budget: formState.budget,
          message: formState.message,
        },
        { publicKey: emailConfig.publicKey },
      );
      setStatus('success');
      setFormState({ name: '', email: '', budget: '', message: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <motion.form
      name="contact"
      method="POST"
      data-netlify="true"
      className="glass-card relative overflow-hidden rounded-3xl p-6 sm:p-8"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onSubmit={handleSubmit}
    >
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-60" />
      <input type="hidden" name="form-name" value="contact" />
      <div className="space-y-5">
        {formFields.map((field) => (
          <label key={field.name} className="block text-sm font-semibold text-ink">
            {field.label}
            <input
              {...field}
              value={formState[field.name]}
              onChange={(event) => setFormState((prev) => ({ ...prev, [field.name]: event.target.value }))}
              className={`${inputClasses} ${errors[field.name] ? 'border-rose-400/70' : ''}`}
              aria-invalid={Boolean(errors[field.name])}
            />
            {errors[field.name] ? (
              <span className="mt-1 block text-xs font-normal text-rose-400">{errors[field.name]}</span>
            ) : null}
          </label>
        ))}
        <label className="block text-sm font-semibold text-ink">
          Project details
          <textarea
            name="message"
            rows={4}
            placeholder="Goals, platforms, timelines — anything helpful."
            value={formState.message}
            onChange={(event) => setFormState((prev) => ({ ...prev, message: event.target.value }))}
            className={`${inputClasses} resize-none ${errors.message ? 'border-rose-400/70' : ''}`}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message ? (
            <span className="mt-1 block text-xs font-normal text-rose-400">{errors.message}</span>
          ) : null}
        </label>
        <button
          type="submit"
          className="w-full rounded-pill bg-gradient-brand px-6 py-3.5 font-semibold text-white transition duration-300 hover:shadow-glow disabled:opacity-60"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'success' ? (
          <motion.p
            className="text-sm font-semibold text-brand-teal"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Thanks! We typically reply within one business day.
          </motion.p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-rose-400">Something went wrong. Please try again or email us directly.</p>
        ) : null}
      </div>
    </motion.form>
  );
};

export default ContactForm;
