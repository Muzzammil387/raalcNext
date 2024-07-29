import React, { useContext, useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { svgrepo } from '@/app/untils/imgimport';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { MainLanguageValueContext } from '@/app/context/MainLanguageValue';
import { setLanguage } from '@/app/utils/common';

const items = [
  {
    label: "En",
    key: 'en',
  },
  {
    label: "Ch",
    key: 'ch',
  },
  {
    label: "Ar",
    key: 'ar',
  },
  {
    label: "Ru",
    key: 'ru',
  },
];

const HeaderLanguage = () => {
  const languages = ['en', 'ar', 'ch', 'ru'];
  const router = useRouter();
  const pathname = usePathname()
  const { langValue, handleLanguage } = useContext(MainLanguageValueContext);
  const [selectedLanguage, setSelectedLanguage] = useState(`${langValue}`);


  const handleMenuClick = (e) => {
    const selectedItem = items.find(item => item.key === e.key);
    setSelectedLanguage(selectedItem.label);
    handleLanguage(selectedItem.key);
    const newLang = selectedItem.key;
    
    // Construct new path with selected language
    let pathParts = pathname.split('/');

    // Remove the existing language segment if present
    if (languages.includes(pathParts[1])) {
      pathParts.splice(1, 1);
    }

    // Add the new language segment
    if (newLang !== 'en') {
      pathParts = ['', newLang, ...pathParts.slice(1)];
    } else {
      pathParts = ['', ...pathParts.slice(1)];
    }
    // Construct the new path
    const newPath = pathParts.join('/');
    console.log(newPath)
    router.push(newPath);
  }

  return (
    <Dropdown
      overlay={
        <Menu onClick={handleMenuClick}>
          {items.map(item => (
            <Menu.Item key={item.key}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      }
      trigger={['click']}
    >
      <a onClick={(e) => e.preventDefault()} className="btn btn-secondary bg-white py-2 px-4 flex gap-1 items-center">
        <Image className="w-5" src={svgrepo} alt="global-svgrepo-com.svg" />
        <span className="font-medium capitalize text-[.9rem] font-Mluvka">{selectedLanguage}</span>
      </a>
    </Dropdown>
  );
};

export default HeaderLanguage;
