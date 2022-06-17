import React, { Component } from 'react';

class ErrorBoundary extends Component<{}, { [key: string]: string | boolean }> {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false,
      };
   }

   static getDerivedStateFromError() {
      return {
         hasError: true,
      };
   }


   render() {
      if (this.state.hasError) {
         return (
            <h1>
               Oops...
            </h1>
         );
      }
      return this.props.children;
   }
}

export default ErrorBoundary;
