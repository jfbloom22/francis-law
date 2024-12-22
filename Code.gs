// Add this new function to handle preflight OPTIONS requests
function doOptions(e) {
  return ContentService.createTextOutput()
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type')
    .setHeader('Access-Control-Max-Age', '86400');
}

function doPost(e) {
  // Add CORS headers to the response
  const output = ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeader('Access-Control-Allow-Origin', '*');
    
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.firstName,
    data.lastName,
    data.email,
    data.subject,
    data.message,
    data.timestamp
  ]);
  
  // Send email notification
  const recipientEmail = 'hello@francislawpractice.com'; 
  const subject = `New Contact Form Submission: ${data.subject}`;
  const emailBody = `
    New contact form submission:
    
    Name: ${data.firstName} ${data.lastName}
    Email: ${data.email}
    Subject: ${data.subject}
    Message: ${data.message}
    Timestamp: ${data.timestamp}
  `;
  
  try {
    MailApp.sendEmail({
      to: recipientEmail,
      subject: subject,
      body: emailBody
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    // Note: We still return success even if email fails, since the data was saved
  }
  
  return output;
} 