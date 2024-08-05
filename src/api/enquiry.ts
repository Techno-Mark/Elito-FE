import axios from "axios";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

interface EnqProps {
  fullName: string;
  emails: string[];
  phoneNumbers: {
    code: string;
    value: string;
  };
  city: string;
  dnd: boolean;
}

export const EnquiryLead = async (body: EnqProps) => {
  try {
    const response = await axios.post(`${API_URL}/leads`, body);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching");
  }
};
