import React, { useState } from 'react';
import { Home, Share2, MessageSquare, Wallet, MapPin, BarChart3, Bell, Settings, Menu, X, ChevronLeft, Camera, Calendar, Clock, Wifi, AlertCircle, Shield } from 'lucide-react';

const CreateSplitzPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [formData, setFormData] = useState({
    splitTitle: '',
    category: '',
    totalAmount: '₦10,000',
    participants: '4',
    costMethod: 'equal',
    includeMe: true,
    startDate: '15/05/2025',
    startTime: '12:00 AM',
    endDate: '17/05/2025',
    endTime: '10:00 PM',
    location: 'Computer Village, Ikeja, Lagos',
    visibility: 5,
    recurrence: 'Weekly',
  });

  const [imageFile, setImageFile] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(URL.createObjectURL(file));
    }
  };

  const handleCostMethodChange = (method) => {
    setFormData(prev => ({ ...prev, costMethod: method }));
  };

  const categories = [
    'Select Category',
    'Food & Groceries',
    'Transportation',
    'Events & Tickets',
    'Utilities',
    'Entertainment',
    'Other'
  ];

  return (
    <div className="min-h-screen ">
        <main className="p-6 max-w-7xl mx-auto">
          <div className="mb-8">
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium mb-4">
              <ChevronLeft size={20} />
              Back
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Create Splittz</h1>
          </div>

          {/* Form Sections */}
          <div className="space-y-6">

            {/* What are you splitting? */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">What are you splitting?</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Split Title</label>
                  <input 
                    type="text" 
                    name="splitTitle"
                    placeholder="eg. Shared Costco Groceries"
                    value={formData.splitTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Split Type/Category</label>
                  <select 
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image/Photo (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex items-center gap-4 hover:border-green-500 transition cursor-pointer">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Camera size={20} className="text-gray-400" />
                    </div>
                    <label className="flex-1 cursor-pointer">
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <span className="text-green-600 font-medium">Choose File</span>
                    </label>
                  </div>
                  {imageFile && <img src={imageFile} alt="Preview" className="mt-3 h-24 rounded-lg" />}
                </div>
              </div>
            </section>

            {/* Cost and Participants */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Cost and Participants</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total Amount</label>
                  <input 
                    type="text" 
                    name="totalAmount"
                    value={formData.totalAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Participant Needed (Excluding you)</label>
                  <input 
                    type="number" 
                    name="participants"
                    value={formData.participants}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">Total members in split will be the number inputted</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Cost Sharing Method</label>
                  <div className="space-y-3">
                    <button 
                      onClick={() => handleCostMethodChange('equal')}
                      className={`w-full p-3 border-2 rounded-lg transition text-left ${formData.costMethod === 'equal' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <div className={`w-4 h-4 rounded-full border-2 ${formData.costMethod === 'equal' ? 'bg-green-600 border-green-600' : 'border-gray-400'}`} />
                        <span className="font-medium text-gray-900">Equal Split</span>
                      </div>
                      <p className="text-xs text-gray-600 ml-6">Equal division is default. Custom allows different amount per person (e.g. for bulk orders)</p>
                    </button>

                    <button 
                      onClick={() => handleCostMethodChange('custom')}
                      className={`w-full p-3 border-2 rounded-lg transition text-left ${formData.costMethod === 'custom' ? 'border-green-600 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded-full border-2 ${formData.costMethod === 'custom' ? 'bg-green-600 border-green-600' : 'border-gray-400'}`} />
                        <span className="font-medium text-gray-900">Custom Split</span>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <input 
                    type="checkbox" 
                    checked={formData.includeMe}
                    onChange={(e) => setFormData(prev => ({ ...prev, includeMe: e.target.checked }))}
                    className="w-4 h-4 accent-green-600 rounded cursor-pointer"
                  />
                  <label className="text-sm font-medium text-gray-700 cursor-pointer">I want to be part of the split</label>
                </div>
              </div>
            </section>

            {/* Start Period */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Start Period</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select a date</label>
                  <input 
                    type="text" 
                    value={formData.startDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    placeholder="15/05/2025"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                  <input 
                    type="text" 
                    value={formData.startTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, startTime: e.target.value }))}
                    placeholder="12:00 AM"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* End Period */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">End Period</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select a date</label>
                  <input 
                    type="text" 
                    value={formData.endDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                    placeholder="17/05/2025"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Time</label>
                  <input 
                    type="text" 
                    value={formData.endTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, endTime: e.target.value }))}
                    placeholder="10:00 PM"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </section>

            {/* Location and Timing */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Location and Timing</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Split Location (Required for Hyperlocal)</label>
                  <input 
                    type="text" 
                    value={formData.location}
                    onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                    placeholder="Computer Village, Ikeja, Lagos"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">Visibility Radius : 5 km</label>
                  <input 
                    type="range" 
                    min="0" 
                    max="10" 
                    value={formData.visibility}
                    onChange={(e) => setFormData(prev => ({ ...prev, visibility: e.target.value }))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                  />
                  <p className="text-xs text-gray-500 mt-2">Only users within this distance will see your split (Max: 10 km)</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="repeat"
                      className="w-4 h-4 accent-green-600 rounded cursor-pointer"
                    />
                    <label htmlFor="repeat" className="text-sm font-medium text-gray-700 cursor-pointer">Repeat Split</label>
                  </div>
                  <div className="flex gap-2">
                    {['Weekly', 'Monthly'].map(freq => (
                      <button 
                        key={freq}
                        onClick={() => setFormData(prev => ({ ...prev, recurrence: freq }))}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition ${formData.recurrence === freq ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Rules and Safety */}
            <section className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Rules and Safety</h2>
              
              <div className="space-y-3">
                <div className="p-4 border-l-4 border-red-500 bg-red-50 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-700 text-sm mb-1">Mandatory Refund Rule</h4>
                      <p className="text-sm text-red-600">A 5% charge is enforced on the total amount if this split is canceled after less than 70% of participant have joined</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-l-4 border-green-600 bg-green-50 rounded flex items-start gap-3">
                  <Shield size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-700 text-sm">Secure Payment Protection</h4>
                    <span className="text-xs text-green-600">Always Active</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Create Button */}
            <button className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
              Create Splittz
            </button>
          </div>
        </main>
    </div>
  );
};

export default CreateSplitzPage;