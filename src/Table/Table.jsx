import React from 'react';

const Table = () => {
  const data = [
    { claimed: '₹1,000', passed: '₹900', month: 'January', year: '2025', remarks: 'Dental Checkup' },
    { claimed: '₹3,000', passed: '₹2,500', month: 'March', year: '2025', remarks: 'Body Checkup' },
    { claimed: '₹2,000', passed: '₹2,000', month: 'February', year: '2025', remarks: 'Eye Specialist Consultation' },
    { claimed: '₹1,500', passed: '₹1,200', month: 'April', year: '2025', remarks: 'Lab Test' },
    { claimed: '₹4,000', passed: '₹3,800', month: 'May', year: '2025', remarks: 'Medicines Purchase' },
    { claimed: '₹2,500', passed: '₹2,000', month: 'June', year: '2025', remarks: 'X-Ray & Ultrasound' },
    { claimed: '₹3,500', passed: '₹3,000', month: 'July', year: '2025', remarks: 'ENT Consultation' },
    { claimed: '₹1,800', passed: '₹1,500', month: 'August', year: '2025', remarks: 'Skin Allergy Treatment' },
  ];

  return (
    <div>
    <div className="overflow-x-auto mt-10 bg-[#4DA8DA]">
      <table className="min-w-full bg-white text-black border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-amber-600 text-white text-lg">
          <tr>
            <th className="py-3 px-4 text-left border-r">Claimed Amount</th>
            <th className="py-3 px-4 text-left border-r">Passed Amount</th>
            <th className="py-3 px-4 text-left border-r">Month</th>
            <th className="py-3 px-4 text-left border-r">Year</th>
            <th className="py-3 px-4 text-left">Remarks</th>
          </tr>
        </thead>
        <tbody className="text-xl">
          {data.map((item, index) => (
            <tr key={index} className="border-t border-gray-300">
              <td className="py-3 px-4 border-r">{item.claimed}</td>
              <td className="py-3 px-4 border-r">{item.passed}</td>
              <td className="py-3 px-4 border-r">{item.month}</td>
              <td className="py-3 px-4 border-r">{item.year}</td>
              <td className="py-3 px-4">{item.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Table;
