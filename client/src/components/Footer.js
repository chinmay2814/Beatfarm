import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#4A3728] text-[#F5E6D3] p-4 text-center">
      <p>© 2024 Beat Farm. All rights reserved.</p>
      <nav>
        <ul className="flex justify-center space-x-4">
          <li><a href="#">License Info</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
