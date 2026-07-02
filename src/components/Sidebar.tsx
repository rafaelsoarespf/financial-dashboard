import { useEffect, useRef, useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(target) &&
        toggleRef.current &&
        !toggleRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        ref={toggleRef}
        className="sidebar__toggle"
        aria-label="Open menu"
        onClick={() => setIsOpen((open) => !open)}
      >
        ☰
      </button>

      <aside
        ref={sidebarRef}
        className={`sidebar ${isOpen ? "active" : ""}`}
      >
        <div className="sidebar__header">
          <h2>Financial Dashboard</h2>
        </div>

        <nav className="sidebar__menu">
          <a href="#" className="active">Dashboard</a>
          <a href="#">Projects</a>
          <a href="#">Settings</a>
          <a href="#">Profile</a>
        </nav>

        <div className="sidebar__footer">
          <button className="btn size-full">Logout</button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;