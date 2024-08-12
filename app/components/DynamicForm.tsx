import React from 'react';

interface DynamicFormProps {
  formData: any;
  onUpdate: (field: string, value: string) => void;
}

const DynamicForm: React.FC<DynamicFormProps> = ({ formData, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate(name, value);
  };

  return (
    <form className="space-y-4">
      {formData.fields.map((field: any, index: number) => (
        <div key={index}>
          <label className="block text-sm font-medium text-gray-700">{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      ))}
    </form>
  );
};

export default DynamicForm;
