import React, { useState } from "react";

const UserAgreement = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-white w-full font-roboto text-4xl font-medium leading-none tracking-[1.92px] py-6 text-start">
        User Agreement
      </h1>

      <div className="text-white font-roboto text-6xl w-[806px] font-normal leading-10 overflow-y-scroll scrollbar-hide py-4">
        <h1 className="text-white font-roboto text-xl font-normal">
          स्विव्ट TMS वेबसाइट प्रयोगकर्ता सहमति
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          १. सेवा प्रयोग <br />
          • यो वेबसाइट व्यक्तिगत र व्यावसायिक प्रयोगका लागि मात्र हो। <br />•
          कुनै अनधिकृत गतिविधि निषेधित छ।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          २. व्यक्तिगत जानकारी <br />• तपाईको जानकारी गोपनीय रहन्छ र गोपनीयता
          नीतिअनुसार सुरक्षित गरिन्छ।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          ३. बौद्धिक सम्पत्ति <br />• वेबसाइटमा रहेको सामग्री स्वामित्व अधिकार
          अन्तर्गत सुरक्षित छ। अनुमति बिना प्रयोग नगर्नुहोस्।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          ४. उत्तरदायित्व <br />• स्विव्ट TMS प्राविधिक समस्या वा हानिको लागि
          उत्तरदायी हुनेछैन।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          ५. खाता सुरक्षा <br />• खाता जानकारी सुरक्षित राख्न तपाई आफै जिम्मेवार
          हुनुहुन्छ।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          ६. सेवा परिवर्तन <br />• स्विव्ट TMS ले कुनै पनि समय सेवा परिवर्तन वा
          बन्द गर्न सक्छ।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          ७. कानुन <br />• यो सम्झौता नेपालको कानुनद्वारा नियन्त्रित हुनेछ।
        </h1>
        <h1 className="text-white font-roboto text-xl font-normal">
          वेबसाइट प्रयोग गर्दा तपाई यी सर्तहरूसँग सहमत हुनुहुन्छ। अद्यावधिक मिति:
          [मिति]
        </h1>
      </div>

      {/* 👇 Checkbox Section */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="agree"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-5 h-5 text-white bg-[#F1F510] border-gray-300 rounded"
        />
        <label htmlFor="agree" className="text-white font-roboto text-xl">
          म सर्तहरू र नियमहरूमा सहमत छु। (I agree to the terms and conditions.)
        </label>
      </div>

      
    </div>
  );
};

export default UserAgreement;
