// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import { Menu, Search, Bell, User } from "lucide-react";
// import Sidebar from "../../components/Layout/Sidebar";

// export default function DashboardLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-50 overflow-hidden">
      
//       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      
//       <div className="flex flex-col flex-1 min-h-screen">
        
//         <header className="flex items-center justify-between bg-white border-b p-4 md:px-6 sticky top-0 z-30 shadow-sm">
//           <div className="flex items-center space-x-3">
//             <button
//               className="md:hidden text-gray-600"
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//             >
//               <Menu size={24} />
//             </button>
//             <h1 className="text-lg md:text-xl font-semibold text-gray-800">
//               Dashboard
//             </h1>
//           </div>

          
//           <div className="flex items-center space-x-4">
            
//             <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-1.5">
//               <Search className="w-4 h-4 text-gray-500" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="bg-transparent focus:outline-none ml-2 text-sm text-gray-700"
//               />
//             </div>

//             {/* Notification Bell */}
//             <button className="relative p-2 hover:bg-gray-100 rounded-full">
//               <Bell size={20} className="text-gray-600" />
//               <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full"></span>
//             </button>

            
//             <div className="flex items-center space-x-2">
//               <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-semibold">
//                 A
//               </div>
//               <span className="hidden md:block text-sm font-medium text-gray-800">
//                 Admin
//               </span>
//               <User size={16} className="text-gray-500 hidden md:block" />
//             </div>
//           </div>
//         </header>

      
//         <main className="flex-1 p-4 md:p-6 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Home, Share2, MessageSquare, Wallet, MapPin, BarChart3, Bell, Settings, Menu, X, Heart, Share, Users, Clock } from 'lucide-react';

const Cosplitz = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('All Active');

  const categories = [
    { icon: '↔️', label: 'Split Expenses', count: 0 },
    { icon: '🚗', label: 'Bulk Orders & Riders', count: 0 },
    { icon: '🔄', label: 'Borrow/Lend', count: 0 },
    { icon: '👥', label: 'Crowdfund', count: 0 },
  ];

  const splits = [
    {
      id: 1,
      title: 'Concert Ticket Group',
      price: 'N1000',
      participants: '2/3',
      timeLeft: '2 days left',
      distance: '1.2 km',
      creator: 'Ade O.',
      image: 'bg-gradient-to-br from-purple-400 to-pink-400',
      badge: 'Food',
      status: 'Active',
    },
    {
      id: 2,
      title: 'Shared Taxi to Campus',
      price: 'N2000',
      participants: '3/5',
      timeLeft: '15 min left',
      distance: '0.8 km',
      creator: 'Jane D.',
      image: 'bg-yellow-300',
      badge: 'Ride',
      status: 'Active',
    },
    {
      id: 3,
      title: 'Bulk Groceries Order',
      price: 'N500',
      participants: '2/4',
      timeLeft: '3h min left',
      distance: '1.2 km',
      creator: 'Jones R.',
      image: 'bg-orange-200',
      badge: 'Food',
      status: 'Active',
    },
    {
      id: 4,
      title: 'Pizza Party Splittz',
      price: 'N1500',
      participants: '2/8',
      timeLeft: '45 min left',
      distance: '1.2 km',
      creator: 'Sara K.',
      image: 'bg-yellow-100',
      badge: 'Food',
      status: 'Active',
    },
  ];

  const specials = [
    {
      title: 'Get Special Offer',
      discount: '40% Off',
      time: '30 min left',
      participants: '910',
    },
    {
      title: 'Bulk Grocery Deal',
      discount: '30% Off',
      time: '30 min left',
      participants: '710',
    },
    {
      title: 'Concert Deal',
      discount: '',
      time: '30 min left',
      participants: '910',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 transition-transform duration-300 z-50 ${!sidebarOpen && '-translate-x-full'}`}>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">C</div>
            <span className="text-xl font-bold text-gray-900">COSPLITZ</span>
          </div>

          <nav className="space-y-3">
            {[
              { icon: Home, label: 'Home', active: true },
              { icon: Share2, label: 'My Splittz', count: 3 },
              { icon: MessageSquare, label: 'Messages', count: 8 },
              { icon: Wallet, label: 'Wallet' },
              { icon: MapPin, label: 'Nearby', count: 12 },
              { icon: BarChart3, label: 'Analytics' },
            ].map((item, i) => (
              <button key={i} className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${item.active ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                <div className="flex items-center gap-3">
                  <item.icon size={20} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                {item.count && <span className="text-xs bg-gray-300 px-2 py-1 rounded">{item.count}</span>}
              </button>
            ))}
          </nav>

          <div className="mt-8 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-1 bg-white rounded-full" />)}
            </div>
            <h3 className="font-bold text-sm mb-1">Community Bonding</h3>
            <p className="text-xs mb-3">Level 4</p>
            <p className="text-xs mb-3">23 completed split</p>
            <div className="w-full h-1 bg-green-700 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-white" />
            </div>
            <p className="text-xs mt-2">Reliability Score: 87%</p>
          </div>

          <button className="w-full mt-6 flex items-center gap-3 p-3">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=alice" alt="Profile" className="w-10 h-10 rounded-full" />
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Alice Badmus</p>
              <p className="text-xs text-gray-500">View Profiles & Settings</p>
            </div>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Navigation */}
        <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 hover:bg-gray-100 rounded-lg">
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="flex-1 max-w-md">
                <input type="text" placeholder="Find splittz nearby: Taxi, Groceries, Tools..." className="w-full px-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings size={20} />
              </button>
            </div>
          </div>
          <div className="px-6 py-2 text-sm text-gray-600">Ikeja Lagos, Nigeria</div>
        </header>

        {/* Main Content Area */}
        <main className="p-6 space-y-8">
          {/* Quick Access Categories */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Access Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((cat, i) => (
                <button key={i} className="p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all text-center group">
                  <div className="text-3xl mb-2">{cat.icon}</div>
                  <p className="text-sm font-medium text-gray-900">{cat.label}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Special Offers */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">#SpecialForYou</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto pb-2">
              {specials.map((special, i) => (
                <div key={i} className="min-w-fit md:min-w-0 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-xl text-white flex flex-col justify-between h-40">
                  <div>
                    <p className="text-xs font-semibold opacity-80 mb-1">Limited Deal</p>
                    <h3 className="font-bold text-lg mb-2">{special.title}</h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      {special.discount && <p className="text-lg font-bold">{special.discount}</p>}
                      <p className="text-xs opacity-80">⏱ {special.time}</p>
                    </div>
                    <button className="px-3 py-1 bg-white text-green-600 rounded font-semibold text-sm hover:bg-gray-100">Join Now</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Active Nearby Splittz */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Active Nearby Splittz</h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {['All Active', 'Popular', 'Newest', 'Food (2)', 'Rides (4)', 'Tools (1)'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                  {tab}
                </button>
              ))}
            </div>

            {/* Splittz Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {splits.map((split) => (
                <div key={split.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                  <div className={`${split.image} h-40 relative flex items-center justify-center overflow-hidden`}>
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button className="w-8 h-8 bg-gray-900 rounded-full text-white flex items-center justify-center hover:bg-gray-700 transition">
                        <Share size={16} />
                      </button>
                      <button className="w-8 h-8 bg-gray-900 rounded-full text-white flex items-center justify-center hover:bg-red-600 transition">
                        <Heart size={16} />
                      </button>
                    </div>
                    <span className="absolute bottom-3 right-3 px-3 py-1 bg-cyan-400 text-gray-900 rounded-full text-xs font-semibold">{split.badge}</span>
                  </div>

                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{split.title}</h3>
                      <p className="text-green-600 font-semibold">{split.price} <span className="text-gray-600 text-sm">/person</span></p>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{split.participants} Participants</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{split.timeLeft}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{split.distance}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center gap-2">
                        <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${split.creator}`} alt={split.creator} className="w-6 h-6 rounded-full" />
                        <span className="text-sm text-gray-700">{split.creator}</span>
                        <span className="text-yellow-500">★ 4.8</span>
                      </div>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition">
                        Join Splittz
                      </button>
                    </div>

                    <div className="pt-2 border-t border-gray-200">
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-green-600 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Cosplitz;