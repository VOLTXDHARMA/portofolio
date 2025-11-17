// EmailJS Configuration
// This is ready to work - just add your credentials from EmailJS dashboard

const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_actual_public_key', // Get from https://dashboard.emailjs.com/
    SERVICE_ID: 'your_actual_service_id',   // Get from EmailJS dashboard
    TEMPLATE_ID: 'your_actual_template_id'  // Get from EmailJS dashboard
};

// SETUP INSTRUCTIONS (5 minutes):
// 1. Go to https://dashboard.emailjs.com/ and create free account
// 2. Add Email Service (Gmail works best)
// 3. Create Email Template with these variables:
//    - {{from_name}} (sender's name)
//    - {{from_email}} (sender's email)
//    - {{message}} (message content)
//    - {{to_name}} (your name = Dharma Mudita)
// 4. Set template recipient to: Dharma_Mudita@teknokrat.ac.id
// 5. Copy Public Key, Service ID, Template ID to the config above
// 6. Contact form will work immediately after hosting!

// Example Email Template:
// Subject: New Portfolio Message from {{from_name}}
//
// Body:
// Hello {{to_name}},
//
// You have received a new message from your portfolio contact form:
//
// From: {{from_name}} ({{from_email}})
//
// Message:
// {{message}}
//
// Best regards,
// Portfolio Contact System
