export type ContactRequest = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const apiURL = `${process.env.NEXT_PUBLIC_API_URL}/contact/add`

export async function createContact(data: any): Promise<ContactRequest> {
  const res = await fetch(`${apiURL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(data), // send som JSON
  });

  if (!res.ok) throw new Error("Failed to send Contact info");
  return res.json();
}