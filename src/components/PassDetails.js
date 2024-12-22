import React, { useEffect, useState } from 'react';
import logo from '../img/logo12.png'; // Corrected path for logo
import bgImage from '../img/bg1.png'; // Import background image

function PassDetails({ data }) {
  const [storedData, setStoredData] = useState(data);

  // Store data in localStorage on mount
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      localStorage.setItem('passData', JSON.stringify(data));
    } else {
      const savedData = JSON.parse(localStorage.getItem('passData'));
      if (savedData) setStoredData(savedData);
    }
  }, [data]);

  return (
    <div style={{ ...styles.passDetails, backgroundImage: `url(${bgImage})` }}>
      <div style={styles.box}>
        {/* Top Red Line */}
        <div style={styles.header}>Pune Mahanagar Parivahan Mahamandal Ltd</div>
        <div style={styles.content}>
          {/* Horizontal Layout for Pass Type, ID, and Fare */}
          <div style={styles.horizontal}>
            <div style={styles.item}>
              <span style={styles.label}>Pass Type:</span>
              <div style={styles.value}>{storedData.passType}</div>
            </div>
            <div style={styles.item}>
              <span style={styles.label}>ID:</span>
              <div style={styles.value}>{storedData.id}</div>
            </div>
            <div style={styles.item}>
              <span style={styles.label}>Fare:</span>
              <div style={styles.value}>₹{storedData.fare}</div>
            </div>
          </div>
          <div style={styles.dottedLine}></div>
          {/* Horizontal Layout for Booking and Validity Time */}
          <div style={styles.horizontal}>
            <div style={styles.itemTime}>
              <span style={styles.label}>Booking Time:</span>
              <div style={{ ...styles.value, fontSize: styles.bookingTimeFontSize }}>{storedData.bookingTime}</div>
            </div>
            <div style={styles.itemTime}>
              <span style={styles.label}>Validity Time:</span>
              <div style={{ ...styles.value, fontSize: styles.validityTimeFontSize }}>{storedData.validityTime}</div>
            </div>
          </div>
          {/* <div style={styles.dottedLine}></div> */}
          {/* ID and Footer */}
          <div style={styles.id}>2409041826Y71TNU</div>
          <div style={styles.dottedLine}></div>
          {/* Logo */}
          <div style={{ ...styles.logo, backgroundImage: `url(${logo})` }}></div>
        </div>
        {/* Bottom Red Line */}
        <div style={styles.footer}>One Day Pass</div>
      </div>
    </div>
  );
}

const styles = {
  passDetails: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.3px',
    backgroundColor: '#f9f9f9',
    height: '160vh',
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
  },
  box: {
    width: '95%',
    maxWidth: '500px', // Increased the width to 900px
    minWidth: '320px', // Added minimum width
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    height: '27%', // Auto height for box
    paddingTop: '80px', // To create space for the header
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    minHeight: '50px', // Ensure enough height for the header
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px', // Increased font size for readability
    fontWeight: 'bold',
    lineHeight: '20px',
    padding: '10px', // Padding to make text more readable
    wordWrap: 'break-word', // Ensure long words wrap
    whiteSpace: 'normal', // Allow text to wrap onto the next line
    borderRadius: '10px 10px 0 0',
  },
  content: {
    padding: '14px 10px 50px', // Adjusted padding to avoid overlapping with header/footer
  },
  horizontal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  item: {
    textAlign: 'left',
    flex: 1,
    margin: '0 5px',
  },
  label: {
    fontSize: '14px',
    color: '#808080',
  },
  value: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },

  dottedLine: {
    borderTop: '1px dashed #ccc',
    margin: '10px 0 ',
  },
  id: {
    fontSize: '15px',
    // fontWeight: 'bold',
    textAlign: 'center',
    color: '#808080',
    padding: '4px',
  },
  logo: {
    width: '100px',
    height: '120px',
    margin: '10px auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: 'zoom-in-out 2s infinite',
    padding: '10px',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30px',
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    lineHeight: '30px',
    borderRadius: '0 0 10px 12px',
  },
  itemTime: {
    flex: 0.47, // Reduce width to make them fit in one line
    margin: '0.5px',
    textAlign: 'left',
  },
  bookingTimeFontSize: '12.5px',
  validityTimeFontSize: '12.5px',
};

export default PassDetails;
