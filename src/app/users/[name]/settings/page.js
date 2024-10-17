import React from "react";

const Settings = ({ params }) => {
  const { name } = params;

  return <div>This is settings page for {name} </div>;
};

export default Settings;
