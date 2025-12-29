import { useState } from 'react';
import { emailService } from '../services/sendEmail';



export const useEmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await emailService.send(formData);

      if (response.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error(response.error || 'Failed to send email');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError(
        err.message ||
          'Failed to send message. Please email directly at ojukwuchinonye70@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    setFormData,

    isSubmitting,
    isSubmitted,
    error,
    setError,
    handleSubmit
  };
};