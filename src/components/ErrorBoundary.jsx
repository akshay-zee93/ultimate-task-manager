import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className=" bg-white p-8 flex flex-col">
          <div>Something went wrong.</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
