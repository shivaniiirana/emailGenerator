import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config(); 

export const handleEmail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: "shivaniranasr1110@gmail.com",
      subject: "Mailed using nodemailer",
      text: `Hi User, Welcome to our Notification System!  This is a test email to verify that your Nodemailer setup is working correctly.  
      Please find the attached Holiday Calendar for reference.  
Best Regards,  
[Shivani Rana]`,
      attachments: [
        {
          filename: 'Holiday_Calendar.pdf',
          path: path.join(process.cwd(), 'HolidayCalendar.pdf') 
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    // console.log("Message sent:", info.messageId);

    res.json({ message: 'Email sent', messageId: info.messageId });

  } catch (error) {
    console.error("Error sending email", error);
    res.status(500).json({ error: "Failed to send email" });
  }
};
