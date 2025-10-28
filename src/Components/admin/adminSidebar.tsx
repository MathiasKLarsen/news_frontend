import Link from 'next/link';
import LogOutButton from './logOutButton';

const menuItems = [
  { label: 'Podcast', href: '/admin/dashboard/podcast' },
];

const AdminSidebar = () => {
  return (
    <nav className="bg-neutral-700 w-64 h-screen p-6 flex flex-col justify-between">
      {/* Menu */}
      <div>
        <Link 
          href="/admin"
        >
          <h2 className="text-white text-2xl font-bold mb-6">Admin Panel</h2>
        </Link>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-white hover:bg-neutral-600 p-2 rounded-md block"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Buttons */}
      <div className="space-y-2 mt-4">
        <Link
          href="/"
          className="text-white hover:bg-blue-600 p-2 rounded-md block text-left"
        >
          Home
        </Link>
        <LogOutButton />
      </div>
    </nav>
  );
};

export default AdminSidebar;