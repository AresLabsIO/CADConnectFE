import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../utils/axiosConfig";

export const useCalls = (dataId:string) => {
  return useQuery({
    queryKey: ["calls",dataId],
    queryFn: () => apiRequest(dataId),
  });
};

const apiRequest = async (dataId:string) => {
  const url =  `/records?dataId=${dataId}`; // Replace with your API endpoint
  try {
    const response = await axiosInstance.get(url);
    return response.data.records;
  } catch (error: unknown) {
    if (error instanceof Error) {
      // Access properties of the Error object
      console.error("Error:", error.message);
    } else {
      // Handle cases where the thrown value is not an Error object
      console.error("Unknown error:", error);
    }
  }
};
