import axios from "axios";
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;

interface EnqProps {
  lastName: string;
  phoneNumbers: {
    type: string;
    code: string;
    value: string;
    dialCode: string;
    primary: boolean;
  }[];
  salutation: string | null;
  emails: {
    type: string;
    value: string;
    primary: boolean;
  }[];
  city: string;
  dnd: boolean;
}

export const EnquiryLead = async (body: EnqProps) => {
  const headers = {
    "api-key": "ca5d5c89-28fd-452b-adb8-cb7263cdd8d3:10770",
  };
  try {
    const response = await axios.post(`${API_URL}leads`, body, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error fetching");
  }
};
