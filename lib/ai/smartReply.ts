export async function buildSmartReply(
  customerMessage: string
) {
  return `
You are an expert customer support assistant
for Foremost Computers.

Customer Message:

${customerMessage}

Generate:

1. Professional Reply

2. Hindi Reply

3. English Reply

4. Short Reply

5. Friendly Reply
`;
}