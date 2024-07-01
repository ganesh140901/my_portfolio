import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to a server
    console.log(formData);
  };

  const styles = {
    contactPage: {
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      marginTop: '80px' // Increased top margin to accommodate navbar
    },
    contactInfoBar: {
      backgroundColor: '#f8f9fa',
      padding: '10px',
      borderRadius: '5px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column'
    },
    label: {
      marginBottom: '10px',
      color: 'orange' // Change label color to red
    },
    input: {
      padding: '10px',
      marginTop: '5px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box'
    },
    textarea: {
      padding: '10px',
      marginTop: '5px',
      marginBottom: '15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
      resize: 'vertical'
    },
    button: {
      padding: '10px 15px',
      border: 'none',
      borderRadius: '5px',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={styles.contactPage}>
      <div style={styles.contactInfoBar}>
        <p>Mobile: +91 7408508247</p>
        <p>Email: ganesh.cse.21@nitap.ac.in</p>
      </div>
      <form style={styles.contactForm} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={styles.textarea}
          ></textarea>
        </label>
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
