import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import FooterHardWard from '../16-FooterHardWard/FooterHardWard';
import NavbarHardWard from '../15-NavbarHardWard/NavbarHardWard';

export default function LayoutHardWord({toggleLanguage}) {
  const location = useLocation();

  return (
    <div>
        {!location.pathname.startsWith("/markting") && <NavbarHardWard toggleLanguage={toggleLanguage}/>}
      <Outlet />
      {/* عرض FooterHardWard فقط إذا لم يكن داخل موقع Layout الثاني */}
    
      {!location.pathname.startsWith("/markting") && <FooterHardWard />}
    </div>
  );
}
