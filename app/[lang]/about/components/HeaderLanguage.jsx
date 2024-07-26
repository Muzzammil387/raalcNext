import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { svgrepo } from '@/app/untils/imgimport';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const items = [
  {
    label: "EN",
    key: 'en',
  },
  {
    label: "CH",
    key: 'ch',
  },
  {
    label: "AR",
    key: 'ar',
  },
  {
    label: "RU",
    key: 'ru',
  },
];

const HeaderLanguage = () => {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const changeLanguage = (locale) => {
    // Get the current path and query parameters
    const currentPathname = pathname.split('/').filter(Boolean); // Split and clean up pathname
    const newPathname = `/${locale}/${currentPathname.slice(-1)}`; // Construct new pathname with locale
    router.push(newPathname); // Navigate to new locale path
  };

  const handleMenuClick = (e) => {
    const selectedItem = items.find(item => item.key === e.key);
    setSelectedLanguage(selectedItem.label);
    changeLanguage(selectedItem.key);
  };

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
