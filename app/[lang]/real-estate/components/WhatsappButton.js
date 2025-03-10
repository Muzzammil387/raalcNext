import Link from "next/link";
import Image from "next/image";
import styles from "../styles/WhatsappButton.module.css"

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/97145693370"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsapp_button}
    >
      <Image 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp Chat"
        width={100} // Adjust icon size
        height={100}
        className={styles.whatsapp_icon} // Apply custom size
      />
    </Link>
  );
};

export default WhatsAppButton;
