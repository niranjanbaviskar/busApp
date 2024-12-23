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
    width: '100%',
    height: '100vh', // Fixed height to occupy the full viewport
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    backgroundSize: 'cover', // Ensures the image covers the entire container
    backgroundPosition: 'center', // Centers the image
    overflow: 'hidden', // Disables vertical scrolling
  },
  box: {
    width: '92%',
    maxWidth: '500px',
    minWidth: '320px',
    backgroundColor: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    height: '54%',
    paddingTop: '80px',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    minHeight: '50px',
    backgroundColor: 'rgb(213, 54, 54)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '22px', // Reduced slightly to allow better fit
    // fontWeight: 'bold',
    lineHeight: '22px', // Adjusted for multi-line text
    padding: '10px',
    borderRadius: '15px 15px 0 0',
    wordWrap: 'break-word', // Allow long words to wrap
    whiteSpace: 'normal', // Prevent text from staying on one line
  },  
  content: {
    padding: '12px 10px 50px',
  },
  horizontal: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px', // Space between the items
    marginBottom: '18px',
  },
  item: {
    textAlign: 'left',
    flex: '1 1 auto', // Ensures even distribution without wrapping
    minWidth: '0',    // Prevents items from breaking to the next line
  },
  
  label: {
    fontSize: '16px',
    color: '#808080',
  },
  value: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#333',
  },
  dottedLine: {
    borderTop: '1.5px dashed #ccc',
    margin: '10px 0',
  },
  id: {
    fontSize: '17px',
    textAlign: 'center',
    color: '#696969',
    padding: '4px',
  },
  logo: {
    width: '170px',
    height: '195px',
    margin: '15px auto',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    animation: 'zoom-in-out 2s infinite',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30px',
    backgroundColor: 'rgb(213, 54, 54)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '16px',
    // fontWeight: 'bold',
    lineHeight: '30px',
    borderRadius: '0 0 15px 15px',
  },
  itemTime: {
    flex: 0.47,
    margin: '0.5px',
    textAlign: 'left',
  },
  bookingTimeFontSize: '14px',
  validityTimeFontSize: '14px',
};

// Add this to the head of your app
const stylesAnimation = document.createElement('style');
stylesAnimation.innerHTML = `
@keyframes zoom-in-out {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
`;
document.head.appendChild(stylesAnimation);

export default PassDetails;
