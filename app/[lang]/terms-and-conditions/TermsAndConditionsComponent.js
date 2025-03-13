"use client";

import React from "react";
import Image from "next/image";
import useFetch from "@/app/customHooks/useFetch";
import Loaders from "@/components/Loaders";
import styles from "../terms-and-conditions/TermsAndConditionsComponent.module.css";
import Link from "next/link";
import { List, ListItem, Typography } from "@mui/material";

const TermsAndConditionsComponent = ({ lang }) => {
  const { loading, data } = useFetch(`webContents/aboutUs/${lang}`);

  if (loading) return <Loaders />;

  return (
    <div className={styles.main_container}>
      <div className={styles.heading_container}>
        <h1 className={styles.main_heading}>Terms and Conditions</h1>
      </div>

      <div className={styles.sub_heading_container}>
  <h3 className={styles.sub_heading}>1. THE TERMS</h3>

  <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      Please review these terms carefully as they contain important information governing:
      </p>
    </ListItem>

    <List sx={{ listStyleType: "lower-roman", pl: 6 }}>
      <ListItem sx={{ display: "list-item" }}>Your use of the Sites (&quot;or Service&quot;);</ListItem>
      <ListItem sx={{ display: "list-item" }}>Your use of the services provided through the Sites;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Your rights to link to the Sites; and</ListItem>
      <ListItem sx={{ display: "list-item" }}>How we use and protect your information.</ListItem>
    </List>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      This page (together with our&nbsp;
      <Link 
      href="https://www.raalc.ae/privacy-policy" target="_blank">
       <span className={styles.hyper_link}>Privacy Policy Page</span> 
    </Link> 
      &nbsp; and the documents referred to on it) are called the &quot;Terms&quot;.
      </p>
    </ListItem>
  </List>
</div>

<div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>2. CONTENT</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We strive to ensure that the information on the Sites is accurate and up to date. However, unless explicitly stated otherwise, &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; assumes no responsibility for the accuracy, timeliness, or availability of the content on the Sites. We disclaim any liability for reliance on such information to the fullest extent permitted by law.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The Sites may contain information provided by third parties. We make no guarantees regarding the accuracy or timeliness of such third-party content and disclaim any liability related to it.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            If you come across any content on the Sites that you find to be obscene, offensive, defamatory, racist, harmful, unlawful, inaccurate, illegal, or deceptive, please inform us at &nbsp;
            <Link href="mailto:info@raalc.ae">
            <span className={styles.hyper_link}>info@raalc.ae</span>
            </Link>
        &nbsp;
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Upon receipt of your complaint, we may, at our sole discretion, remove or block access to the content in question.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>3. LEGAL AGREEMENT</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            By accessing and using the Sites, or any page accessible through the Sites, you agree to be bound by these Terms without limitation or modification. By continuing to use the Sites, you acknowledge that you are bound by the Terms to the extent that each section is applicable.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We reserve the right to modify or amend these Terms at our discretion, without providing individual notice to you. You are advised to review the Terms periodically to ensure that you are aware of any changes. If you continue to use the Sites following such modifications, you will be deemed to have accepted the updated Terms.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; reserves the right to remove any information or material from the Sites at any time, without prior notice, and without prejudice to any accrued rights. Additionally, we may make information or material available when required by law, or at the request of regulatory bodies or law enforcement authorities.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            If you do not agree to comply with your obligations in these Terms, please refrain from using the Sites.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>4.	REGISTRATION, SUBSCRIPTION OR MEMBERSHIP LOGIN</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Certain areas of the Site and certain services may not be accessible to all visitors. Access to some sections may require you to provide personal details.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            To access specific pages or services, you may be required to provide personal information. If you choose to provide such details, you are responsible for ensuring that the information you provide is accurate and up to date. Should there be any changes to your personal information, it is your responsibility to inform us promptly.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            By submitting your personal information, you consent to the use of your data to facilitate the provision of services and/or products. Your name, profile, and/or username may be displayed publicly on the Site if you submit content or as otherwise specified. We may share your information with our affiliates, third parties, or as necessary to comply with applicable laws and regulations. For further details on how we process your personal data, please refer to our &nbsp;
      <Link 
      href="https://www.raalc.ae/privacy-policy" target="_blank">
       <span className={styles.hyper_link}>Privacy Policy Page</span> 
    </Link> 
      &nbsp;
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            If any form of user login or access is provided (e.g., username and password), it is your responsibility to treat this information as confidential. You should not share your login credentials with any third party. If you believe that your login information has been compromised, please notify us immediately at  &nbsp;
            <Link href="mailto:info@raalc.ae">
            <span className={styles.hyper_link}>info@raalc.ae</span>
            </Link>
        &nbsp;
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We reserve the right to suspend or permanently disable your access to the Site at any time if we determine it is necessary for security or legal reasons, or if you fail to comply with our Terms. This may also occur if we believe it is necessary to protect your personal data.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>5. INTELLECTUAL PROPERTY</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We grant you a limited, non-exclusive, and non-transferable license to access and use the Site strictly for your personal, non-commercial purposes. You agree not to copy, store, or use the Sites, or any part thereof, in any manner beyond their intended purpose.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The Sites, including all content, graphics, images, layouts, and trademarks associated with &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; (collectively, the &quot;Content&quot;), are owned by or licensed to &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>. All copyright and intellectual property rights in the Content are the exclusive property of &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; or its licensors. You are not granted any rights to use, reproduce, or distribute the Content outside the Sites.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Without the express prior written consent of &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>, you are prohibited from using, transferring, copying, reproducing, modifying, or creating derivative works based on any part of the Content, the Sites, or their underlying source code. This restriction applies to all forms of reproduction, whether electronic, mechanical, or otherwise, including but not limited to uploading or downloading digital copies. The sole exception to this restriction is viewing the Content for its intended purpose on the Sites.
            </p>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default TermsAndConditionsComponent;
