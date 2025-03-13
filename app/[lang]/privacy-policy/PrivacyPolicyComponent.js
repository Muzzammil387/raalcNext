"use client";

import React from "react";
import Image from "next/image";
import useFetch from "@/app/customHooks/useFetch";
import Loaders from "@/components/Loaders";
import styles from "../privacy-policy/PrivacyPolicyComponent.module.css";
import Link from "next/link";
import { List, ListItem, Typography } from "@mui/material";

const PrivacyPolicyComponent = ({ lang }) => {
  const { loading, data } = useFetch(`webContents/aboutUs/${lang}`);

  if (loading) return <Loaders />;

  return (
    <div className={styles.main_container}>
      <div className={styles.heading_container}>
        <h1 className={styles.main_heading}>Privacy Policy</h1>
      </div>

      <p className={styles.paragraph}>
        Abdelaziz Alkhamiri Advocates and Legal Consultants aka RAALC Law Firm
        operates the&nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; website, which provides the SERVICE (or the “SITES”).
      </p>

      <p className={styles.paragraph}>
        This page is used to inform website visitors regarding our policies with
        the collection, use, and disclosure of Personal Information if anyone
        decides to use our Service, &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; website.
      </p>

      <p className={styles.paragraph}>
      If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
      </p>
     <p className={styles.paragraph}>
      The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible through&nbsp;
      <Link 
      href="https://www.raalc.ae/terms-and-conditions/" target="_blank">
       <span className={styles.hyper_link}>Terms and Conditions Page</span> 
    </Link> 
      &nbsp;, unless otherwise defined in this Privacy Policy.
      </p>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>1. INFORMATION COLLECTION AND USE</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
              For a better experience while using our Service, we may require you to
              provide us with certain personally identifiable information, including
              but not limited to your name, phone number, email address, and postal
              address. The information that we collect will be used to contact or
              identify you.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>2. LOG DATA</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
              We want to inform you that whenever you visit our Service, we collect
              information that your browser sends to us called Log Data. This Log Data
              may include information such as your computer&apos;s Internet Protocol
              (&quot;IP&quot;) address, browser version, pages of our Service that you
              visit, the time and date of your visit, the time spent on those pages,
              and other statistics.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>3. COOKIES</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
              Cookies are files with a small amount of data that are commonly used as
              an anonymous unique identifier. These are sent to your browser from the
              website that you visit and are stored on your computer&apos;s hard
              drive.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
              Our website uses these &quot;cookies&quot; to collect information and
              improve our Service. You have the option to either accept or refuse
              these cookies and know when a cookie is being sent to your computer. If
              you choose to refuse our cookies, you may not be able to use some
              portions of our Service.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
  <h3 className={styles.sub_heading}>4. SERVICE PROVIDERS</h3>

  {/* Lower-alpha list with continuous numbering */}
  <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
        We may employ third-party companies and individuals due to the following reasons:
      </p>
    </ListItem>

    {/* Roman numeral sublist (indented inside alpha list) */}
    <List sx={{ listStyleType: "lower-roman", pl: 6 }}>
      <ListItem sx={{ display: "list-item" }}>To facilitate our Service;</ListItem>
      <ListItem sx={{ display: "list-item" }}>To provide the Service on our behalf;</ListItem>
      <ListItem sx={{ display: "list-item" }}>To perform Service-related services; or</ListItem>
      <ListItem sx={{ display: "list-item" }}>To assist us in analyzing how our Service is used.</ListItem>
    </List>

    {/* Continuation of the main alpha list (ensures 'b' is used) */}
    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
        We want to inform our Service users that these third parties have access to your Personal Information. 
        The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to 
        disclose or use the information for any other purpose.
      </p>
    </ListItem>
  </List>
</div>


      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>5. SECURITY</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
              We value your trust in providing us with your Personal Information; thus,
              we strive to use commercially acceptable means of protecting it. But
              remember that no method of transmission over the internet or electronic
              storage is 100% secure and reliable, and we cannot guarantee its absolute
              security.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>6. LINKS TO OTHER SITES</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
              Our Service may contain links to other sites. If you click on a
              third-party link, you will be directed to that site. Note that these
              external sites are not operated by us. Therefore, we strongly advise you
              to review the Privacy Policy of these websites. We have no control over
              and assume no responsibility for the content, privacy policies, or
              practices of any third-party sites or services.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
      <h3 className={styles.sub_heading}>7. CHILDREN&apos;S PRIVACY</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
      <h3 className={styles.sub_heading}>8. CHANGES TO THIS PRIVACY POILICY</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
      <h3 className={styles.sub_heading}>9. CONTACT US</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
            </p>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default PrivacyPolicyComponent;
