import { Body, Head, Html, Preview } from "@react-email/components";

interface MessageEmailProps {
  name: string;
  email: string;
  message: string;
}

export const MessageEmail = ({ name, email, message }: MessageEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from {name} via haydnjm.com</Preview>
    <Body>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
    </Body>
  </Html>
);

MessageEmail.PreviewProps = {} as MessageEmailProps;

export default MessageEmail;
