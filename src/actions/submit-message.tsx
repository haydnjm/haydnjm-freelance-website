"use server";

import React from "react";
import { Resend } from "resend";
import { MessageEmail } from "../emails/message";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMessageEmail = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const res = await resend.emails.send({
      from: "Website <hello@haydnjm.com>",
      to: "hello@haydnjm.com",
      subject: `New message from ${name}`,
      replyTo: email,
      react: <MessageEmail name={name} email={email} message={message} />,
    });

    console.log(`Email sent successfully`, res.data);
  } catch (error) {
    console.error(`Failed to send email:`, error);
  }
};
