import React from 'react';

function PersonalInfoForm({ data, onUpdate }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate(name, value);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Similar structure for other fields */}
    </div>
  );
}

export default PersonalInfoForm;
