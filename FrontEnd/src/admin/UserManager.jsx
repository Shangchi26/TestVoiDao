import React, { useEffect, useState } from 'react'

const UserManager = () => {
    useEffect(() => {
      setUser(false);

      // Khi component Admin unmount, hiển thị lại header và footer
      return () => setUser(true);
    }, [setUser]);

    const [activeTab, setActiveTab] = useState("dashboard");

    const handleTabClick = (tabName) => {
      setActiveTab(tabName);
    };
  return (
    <div>UserManager</div>
  )
}

export default UserManager