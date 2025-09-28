```typescript
// src/components/ContactForm/ContactForm.tsx
import React, { useState, useCallback } from 'react';
import styles from './ContactForm.module.css';
import { useFormValidation } from '../../hooks/useFormValidation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

/**
 * ContactForm Component
 *
 * A form component for users to submit their contact information and message.
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const { errors, validateForm, isValid } = useFormValidation<FormData>(formData);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      validateForm();

      if (isValid) {
        // Simulate form submission (replace with actual API call)
        try {
          console.log('Form Data Submitted:', formData);
          alert('Form submitted successfully!');

          // Reset form after successful submission
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        } catch (error) {
          console.error('Form submission error:', error);
          alert('Form submission failed. Please try again.');
        }
      }
    },
    [formData, isValid, validateForm]
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
        />
        {errors.name && (
          <div id="name-error" className={styles.error}>
            {errors.name}
          </div>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <div id="email-error" className={styles.error}>
            {errors.email}
          </div>
        )}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          rows={5}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        {errors.message && (
          <div id="message-error" className={styles.error}>
            {errors.message}
          </div>
        )}
      </div>

      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
```