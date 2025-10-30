import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("A valid email is required"),
  subject: yup.string().required("Please enter a subject"),
  message: yup
    .string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters long"),
});

export const useYupForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState, // Include formState here
  } = useForm({
    resolver: yupResolver(schema),
  });

  return {
    register,
    handleSubmit,
    reset,
    errors: formState.errors, // Make sure to return the errors from formState
    formState, // Return formState to allow direct access
  };
};
