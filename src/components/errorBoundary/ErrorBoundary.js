import { useState } from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ErrorBoundary = (props) => {
  const [error, setError] = useState(false);

  const componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    setError(true);
  };

  if (error) {
    return <ErrorMessage />;
  }
  return props.children;
};

export default ErrorBoundary;
