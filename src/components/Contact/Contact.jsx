import styles from './Contact.module.css';
import pattern from '../../assets/pattern.svg';
import Button from '../Button/Button';
import { useEmailForm } from '../../hooks/useEmailForm';

function Contact() {
  const {
    formData,
    setFormData,
    handleSubmit,
    isSubmitting,
    isSubmitted,
    error,
    setError
  } = useEmailForm();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

        if (error) setError(null);

  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields');
      return;

    }

    await handleSubmit();
  };

  return (
    <section className={styles.contact}>
      <img src={pattern} alt="pattern" className={styles.pattern} />

      <div className={styles.contactDetails}>
        <div>
          <h2>Contact</h2>
          <div className={styles.underline} />
          <p className={styles.feedback}>
            I would love to hear about your project and how I could help.
            Please fill in the form, and I'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className={styles.form}>
          <form onSubmit={onSubmit} noValidate>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && <p className={styles.error}>{error}</p>}
            {isSubmitted && (
              <p className={styles.success}>Message sent successfully!</p>
            )}

            <Button variant="send" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
