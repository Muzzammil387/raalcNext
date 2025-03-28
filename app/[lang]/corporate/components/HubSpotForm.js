"use client";
import { useEffect } from "react";

const HubSpotForm = ({ formId }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "20189826",
          formId: "2ab9716a-88ab-481f-b5e9-f9a78857b7f6",
          region: "na1",
          target: `#${formId}`
        });
      }
    };

    document.body.appendChild(script);
  }, [formId]);

  return <div id={formId}></div>;
};

export default HubSpotForm;