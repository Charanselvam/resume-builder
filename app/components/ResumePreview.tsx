import React from 'react';

interface PreviewPageProps {
  data: any;
}

const PreviewPage = ({ data }: PreviewPageProps) => {
  return (
    <div className="bg-white text-black p-10 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{data.name}</h1>
        <p className="text-xl">{data.profession}</p>
        <p className="mt-2">{data.phone} | {data.email} | {data.location}</p>
        <div className="mt-2">
          <a href={data.github} target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a> | 
          <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500"> LinkedIn</a> | 
          <a href={data.website} target="_blank" rel="noopener noreferrer" className="text-blue-500"> Website</a>
        </div>
      </div>

      {/* Summary Section */}
      {data.summary && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <p>{data.summary}</p>
        </div>
      )}

      {/* Education Section */}
      {data.education && data.education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          {data.education.map((edu: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-lg">{edu.institution}</p>
              <p>{edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      )}

      {/* Work Experience Section */}
      {data.experience && data.experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Work Experience</h2>
          {data.experience.map((exp: any, index: number) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <p className="text-lg">{exp.company}</p>
              <p>{exp.startDate} - {exp.endDate}</p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {data.skills && data.skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
          <ul className="list-disc list-inside">
            {data.skills.map((skill: string, index: number) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Certifications Section */}
      {data.certifications && data.certifications.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <ul className="list-disc list-inside">
            {data.certifications.map((cert: string, index: number) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages Section */}
      {data.languages && data.languages.length > 0 && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Languages</h2>
          <ul className="list-disc list-inside">
            {data.languages.map((language: string, index: number) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PreviewPage;
