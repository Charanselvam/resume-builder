"use client";
import React, { useState } from 'react';
import DynamicForm from './components/DynamicForm';
import PreviewPage from './components/ResumePreview';
import { initialResumeData } from './utils/resumeData';
import formConfig from '../public/formConfig.json'; // Import the form configuration

function Page() {
  const [resumeData, setResumeData] = useState(initialResumeData);

  const handleUpdate = (field: string, value: string) => {
    setResumeData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        [field]: value,
      },
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Form Side */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <DynamicForm formData={formConfig.personalInfo} onUpdate={handleUpdate} />
        </div>

        {/* Preview Side */}
        <div className="bg-white p-4 rounded-lg">
          <PreviewPage data={resumeData.personalInfo} />
        </div>
      </div>
    </div>
  );
}

export default Page;