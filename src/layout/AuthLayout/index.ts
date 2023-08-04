import ErrorBoundary from "~/components/ErrorBoundary";
import { AuthLayout } from "./AuthLayout";
import { withErrorBoundary } from "react-error-boundary"
export default withErrorBoundary(AuthLayout, {
  FallbackComponent: ErrorBoundary
});