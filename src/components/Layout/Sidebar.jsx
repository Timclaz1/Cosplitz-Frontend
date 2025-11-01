import { NavLink } from "react-router-dom";
import {
  Home,
  BarChart3,
  Settings,
  Users,
  Folder,
  Bell,
  HelpCircle,
  LogOut,
  X,
} from "lucide-react";
import Logo from "../../assets/logo.svg";

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const mainNav = [
    { to: "/dashboard", label: "Overview", icon: Home },
    { to: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
    { to: "/dashboard/projects", label: "Projects", icon: Folder },
    { to: "/dashboard/team", label: "Team", icon: Users },
  ];

  const secondaryNav = [
    { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
    { to: "/dashboard/support", label: "Support", icon: HelpCircle },
    { to: "/dashboard/settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg border-r transform transition-transform duration-300 ease-in-out 
      ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
      md:translate-x-0 md:static`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <img src={Logo} alt="App logo" className="h-8" />
        <button
          onClick={() => setSidebarOpen(false)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Nav sections */}
      <div className="flex flex-col justify-between h-full overflow-y-auto">
        <nav className="flex flex-col p-4 space-y-6">
          {/* MAIN */}
          <div>
            <p className="text-xs uppercase text-gray-400 font-semibold mb-2 px-2">
              Main
            </p>
            <div className="space-y-1">
              {mainNav.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  end
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setSidebarOpen?.(false)}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* SETTINGS */}
          <div>
            <p className="text-xs uppercase text-gray-400 font-semibold mb-2 px-2">
              More
            </p>
            <div className="space-y-1">
              {secondaryNav.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-green-100 text-green-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  onClick={() => setSidebarOpen?.(false)}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Logout */}
        <div className="border-t p-4">
          <button className="flex items-center space-x-3 px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-all w-full">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
