import React from 'react';
import './OnlineBookingBtn.css';  // Ensure the path is correct for your project structure

export default function OnlineBookingBtn() {
    return (
        <a href="https://www.foo.com" className="pulse">
            UMÓW WIZYTĘ ON-LINE
        </a>
    );
}

    
//     const styles = {
//         button: {
//             //   backgroundColor: 'red',
//             color: `${btnColor}`,
//             padding: '6px 12px',
//             border: `4px solid ${btnColor}`,
//             borderRadius: '10px',
//             fontWeight: '1000',
//             fontSize: '16px',
//             cursor: 'pointer',
//             textDecoration: 'none',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//             animation: 'pulse 2s infinite',
//         },
//         '@keyframes pulse': {
//             '0%': { backgroundColor: 'hsl(120, 100%, 25%)' },
//             '50%': { backgroundColor: 'hsl(120, 100%, 15%)' },
//             '100%': { backgroundColor: 'hsl(120, 100%, 25%)' }
//           }
//   };