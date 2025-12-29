export const emailService = {
  async send(formData) {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },

        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Project Inquiry from ${formData.name}`,
          from_name: formData.name,
          replyto: formData.email,
        }),
      });

      const data = await response.json();
      if (data.success) return { success: true };
      throw new Error(data.message || 'Failed to send');
    } catch (error) {
      return { success: false, error: error.message };
    }
  },
};