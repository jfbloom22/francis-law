// Handle OPTIONS (preflight) requests
function doOptions(e) {
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.TEXT)
    // Specifically allow only your domain
    .setHeader('Access-Control-Allow-Origin', 'https://www.francislawpractice.com')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

function doPost(e) {
  // Create output with specific CORS header for your domain
  const output = ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', 'https://www.francislawpractice.com');
  
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Save to spreadsheet
    sheet.appendRow([
      data.firstName,
      data.lastName,
      data.email,
      data.subject,
      data.message,
      data.timestamp
    ]);
    
    // Send email notification
    const recipientEmail = 'your-email@example.com'; // Replace with your email
    const subject = `New Contact Form Submission: ${data.subject}`;
    const emailBody = `
      New contact form submission:
      
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Subject: ${data.subject}
      Message: ${data.message}
      Timestamp: ${data.timestamp}
    `;
    
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody
    });

    output.setContent(JSON.stringify({ 'result': 'success' }));
  } catch (error) {
    console.error('Error:', error);
    output.setContent(JSON.stringify({ 'result': 'error', 'message': error.toString() }));
  }
  
  return output;
} 