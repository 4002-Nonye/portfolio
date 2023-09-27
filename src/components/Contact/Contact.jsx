import React from 'react';
import styles from './Contact.module.css';
import pattern from '../../assets/pattern.svg'
import Button from '../Button/Button';

function Contact() {
  return (
    <>
      {' '}
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
            <form>
              <div>
               
                <input type='text' id='name' placeholder='Name'/>
              </div>
              <div>
               
                <input type='email' id='email' placeholder='Email'/>
              </div>

              <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>


              <Button variant='send'>SEND MESSAGE</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
