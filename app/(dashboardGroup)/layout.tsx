import React from "react";

const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <h1>This is the layout of dashboard!</h1>
      </div>
      {children}
    </div> 
  );
};

export default dashboardLayout;
