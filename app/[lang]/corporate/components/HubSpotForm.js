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
          formId: "a52a74e0-b6ad-4feb-b8dd-fcecc2b73eb0",
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