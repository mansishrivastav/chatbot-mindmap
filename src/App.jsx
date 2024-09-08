import React, { useState } from 'react';
import {Sidebar, Navbar, Header, Body} from './utils/imports'
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex flex-col w-full">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 overflow-auto">
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default App;