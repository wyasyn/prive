import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({
  name,
  email,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f6f6f6", padding: "20px" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "8px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Heading>New Contact Message</Heading>

          <Text>
            <strong>Name:</strong> {name}
          </Text>

          <Text>
            <strong>Email:</strong> {email}
          </Text>

          <Hr />

          <Text>
            <strong>Message:</strong>
          </Text>

          <Text style={{ whiteSpace: "pre-line" }}>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
