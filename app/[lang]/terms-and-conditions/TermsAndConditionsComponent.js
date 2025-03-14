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

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>6. USING THE WEBSITE</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            To access or use the Sites, you must be at least 21 years old. If you are under 21, you may only use the Sites or register for an account with the consent of a parent or legal guardian.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            When providing any information in connection with the Sites, you agree to ensure that all details are true, accurate, current, and complete. Providing optional information is entirely at your discretion.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
          You agree not to use the Sites for any unlawful purpose or in any manner that violates these Terms. Additionally, deep linking to the Sites is strictly prohibited unless expressly authorized by &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            You must not use any automated tools, including robots, spiders, or similar technologies, to monitor or copy content from the Sites without prior written consent. Furthermore, you shall not use any device, software, or routine to interfere with the proper functioning of the Sites, nor take any action that places an excessive or disproportionate load on our infrastructure.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            You agree to indemnify and hold harmless &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>, its officers, employees, and licensors from any losses or damage they may incur, directly or indirectly, as a result of your breach of these Terms.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We may track and monitor your visits to the Sites through the use of cookies. Details regarding how we process personal data and use cookies can be found in our &nbsp;
      <Link 
      href="https://www.raalc.ae/privacy-policy" target="_blank">
       <span className={styles.hyper_link}>Privacy Policy Page</span> 
    </Link>
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
  <h3 className={styles.sub_heading}>7. USER GENERATED CONTENT AND PROHIBITED CONTENT</h3>

  <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>

  <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      When using our website and services (&quot;Sites&quot;), you may be permitted to submit, post, publish, upload, or otherwise share content, including but not limited to comments, images, and other materials (collectively, &quot;Content&quot;).
      </p>
    </ListItem>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      By submitting Content, you represent and warrant that:
      </p>
    </ListItem>

    <List sx={{ listStyleType: "lower-roman", pl: 6 }}>
      <ListItem sx={{ display: "list-item" }}>You own the Content or have obtained all necessary permissions from the rightful owner(s) to submit and publish such Content; and</ListItem>
      <ListItem sx={{ display: "list-item" }}>The Content does not infringe any intellectual property rights, privacy rights, contractual rights, or any other legal rights of any third party, nor does it contain defamatory or unlawful material.</ListItem>
    </List>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      By submitting Content, you grant us a non-exclusive, transferable, sub-licensable, perpetual, worldwide, royalty-free license to use, reproduce, distribute, modify, publicly display, and disclose such Content for any purpose.
      </p>
    </ListItem>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      If you believe that your rights have been violated in connection with Content posted on our Sites, you may contact us at &nbsp;
            <Link href="mailto:info@raalc.ae">
            <span className={styles.hyper_link}>info@raalc.ae</span>
            </Link>
        &nbsp;
      </p>
    </ListItem>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      Users must not submit or upload Content that falls under any of the following categories (&quot;Prohibited Content&quot;):
      </p>
    </ListItem>

    <List sx={{ listStyleType: "lower-roman", pl: 6 }}>
      <ListItem sx={{ display: "list-item" }}>Content protected by copyright, trademark, or other intellectual property rights, or derivative works thereof, without proper authorization;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that is offensive to the online community, including material that promotes racism, hate speech, violence, or harm toward any individual or group;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that is obscene, vulgar, defamatory, libelous, threatening, abusive, or harassing;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that promotes or encourages illegal activities, including but not limited to the use of illegal substances, hacking, or the creation of malicious software;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that constitutes harassment, cyberbullying, or stalking;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that involves unsolicited mass communications, spam, junk mail, chain letters, or phishing schemes;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that is false, misleading, or deceptive;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that promotes or facilitates the infringement of copyrighted materials, including but not limited to pirated software, music, or digital media;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that includes restricted or password-protected access pages, hidden pages, or unauthorized links;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that constitutes a criminal offense, violates any law, or incites others to commit unlawful acts;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that prejudices any ongoing legal proceedings or investigations;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that contains explicit, pornographic, or sexually exploitative material, particularly that which involves minors;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that provides instructions for illegal activities, including but not limited to making or acquiring illegal weapons, hacking, or violating privacy rights;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that solicits passwords, personal data, or financial information for fraudulent or unauthorized purposes; and</ListItem>
      <ListItem sx={{ display: "list-item" }}>Content that engages in unauthorized commercial activities, including but not limited to contests, sweepstakes, pyramid schemes, advertising, or solicitation without our prior written consent.</ListItem>
    </List>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      We reserve the right, at our sole discretion, to take any or all of the following actions if a user upload Prohibited Content:
      </p>
    </ListItem>

    <List sx={{ listStyleType: "lower-roman", pl: 6 }}>
      <ListItem sx={{ display: "list-item" }}>Edit or remove such Content from the Sites;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Suspend or terminate the user’s ability to upload Content;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Restrict, block, or terminate the user’s access to the Sites;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Terminate the user’s membership or account (if applicable); and/or</ListItem>
      <ListItem sx={{ display: "list-item" }}>Take any further legal action as deemed necessary</ListItem>
    </List>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      Our Sites may contain user-generated content, which has not been verified or endorsed by us. We do not assume responsibility for the accuracy, legality, or reliability of any user-generated content posted on our Sites. The opinions expressed in such content do not necessarily reflect our views, values, or legal standing.
      </p>
    </ListItem>

    <ListItem sx={{ display: "list-item" }}>
      <p className={styles.paragraph}>
      If you fail to comply with this Policy, we reserve the right to take the following actions:
      </p>
    </ListItem>
    <List sx={{ listStyleType: "lower-roman", pl: 6 }}>
      <ListItem sx={{ display: "list-item" }}>Withdraw your access to our Sites;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Remove any Content uploaded by you;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Issue a formal warning;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Initiate legal action against you;</ListItem>
      <ListItem sx={{ display: "list-item" }}>Report your actions to law enforcement authorities where necessary; and/or</ListItem>
      <ListItem sx={{ display: "list-item" }}>Take any other action we reasonably deem appropriate.</ListItem>
    </List>

    <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>8. LIABILITY DISCLAIMER</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            You acknowledge and agree that your use of this website (the &quot;Sites&quot;) is entirely at your own risk.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            To the fullest extent permitted by law, &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>, expressly disclaims all warranties, terms, conditions, and representations that may otherwise be implied by law in relation to the Site. This includes, without limitation, warranties regarding technical efficiency, satisfactory quality, availability, non-infringement, completeness, and fitness for a particular purpose. The materials and content on the Site may contain inaccuracies or typographical errors. We do not warrant the accuracy, reliability, or completeness of any information contained on the Site.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The content on this Site is provided solely for general informational purposes. It does not constitute legal, financial, or professional advice. You should seek appropriate professional or specialist advice before taking or refraining from any action based on the content provided on this Site.
            </p>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The Site may contain third-party advertisements. &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; does not endorse, verify, or accept any responsibility for the accuracy, completeness, or reliability of any advertising material appearing on the Site.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or in connection with your use of the Site, the inability to access the Site, the provision of or failure to provide services, or reliance on any information contained within the Site. This limitation applies regardless of whether the liability is based on contract, tort, negligence, or any other legal theory, even if &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; has been advised of the possibility of such damages.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; does not guarantee that the Site will be free from errors, uninterrupted, or that it will yield specific results from its use, including any searches or links. While we endeavor to maintain access to the Site, we do not warrant any specific availability or performance levels. We reserve the right to modify, suspend, withdraw, or restrict access to all or any part of the Site at our discretion and for any reason.
            </p>
          </ListItem>

          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            If you are dissatisfied with any portion of the Site or any of these terms, your sole and exclusive remedy is to discontinue use of the Site.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Nothing in these Terms shall limit or exclude liability for death or personal injury resulting from our negligence, fraudulent misrepresentation, or any other liability that cannot be excluded or limited under applicable law. By continuing to use this Site, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>9. LINKS TO THIRD PARTY SITES</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The website may include links to external websites operated by entities other than &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; (&quot;Third-Party Websites&quot;). By clicking on such links, you will be redirected away from our website.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Your access to and interactions with any Third-Party Website are governed by the respective website&apos;s own terms, conditions, and policies. We do not control or oversee such websites and are not responsible for their content, privacy practices, or operations.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The inclusion of any link to a Third-Party Website on our platform does not constitute endorsement, sponsorship, or approval of the material, services, or operators of such websites.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; expressly disclaims any responsibility or liability for any content, representations, offers, or promotions available on or through Third-Party Websites. This disclaimer extends to any direct or indirect damages, losses, or consequences arising from your use of such websites.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            We advise users to exercise caution and review the terms, policies, and privacy practices of any Third-Party Website before engaging with it. If you choose to access a Third-Party Website, you do so at your own risk.
            </p>
          </ListItem>
        </List>
      </div>

      <div className={styles.sub_heading_container}>
        <h3 className={styles.sub_heading}>10. LINKS TO THIRD PARTY SITES</h3>
        <List sx={{ listStyleType: "lower-alpha", pl: 4 }}>
        <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The website raalc.ae, along with its controlled entities and affiliates, shall be entitled to enforce these Terms of Use and benefit from their provisions.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            The enforcement of these Terms shall remain at our sole discretion. Any failure or delay in enforcing these Terms in certain instances shall not be deemed a waiver of our right to enforce them in the future.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Unless expressly stated otherwise, this website is intended for users accessing it from within the United Arab Emirates (UAE).
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            Users who choose to access the website from jurisdictions outside the UAE are solely responsible for ensuring compliance with local laws, to the extent applicable.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            If any provision of these Terms, including disclaimers or exclusions, is deemed unlawful, void, or unenforceable for any reason, such provision shall be severed without affecting the validity and enforceability of the remaining provisions.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            These Terms constitute the entire agreement between the user and &nbsp;
        <Link href="https://www.raalc.ae/" target="_blank">
          <span className={styles.hyper_link}>www.raalc.ae</span>
        </Link>
        &nbsp; regarding the use of the website.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            These Terms supersede any prior agreements, representations, or understandings, whether written or oral, relating to the subject matter herein.
            </p>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <p className={styles.paragraph}>
            To the maximum extent permitted by law, all warranties, conditions, terms, undertakings, and obligations implied by statute, common law, trade practice, course of dealing, or otherwise, are expressly excluded.
            </p>
          </ListItem>
        </List>
      </div>
  </List>
</div>

    </div>
  );
};

export default TermsAndConditionsComponent;
