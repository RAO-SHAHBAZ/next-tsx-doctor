import BredCrumbServices from '@/components/BreadCrumbServices'
import ContactUs from '@/components/contact-us';
import Link from 'next/link'

const page = () => {
  const pricingList = [
    { type: "New Patient Exam (inc x-rays)", price: "£100.00" },
    { type: "Dental Health Check", price: "£84.00" },
    { type: "Hygiene Appointment", price: "£94.50" },
    { type: "Direct Access Hygiene (non registered patient)", price: "£98.00" },
    { type: "Emergency Appointment (up to 10 minutes)", price: "No Charge" },
    { type: "Emergency Appointment (up to 20 minutes)", price: "£85.00" },
    { type: "Fillings", price: "from £133.00" },
    { type: "Crowns/Inlays and Onlays Work", price: "from £1070.00" },
    { type: "Crown Recement", price: "£215.00" },
    { type: "Porcelain Bridge (per unit)", price: "from £1747.50" },
    { type: "Extraction", price: "from £202.50" },
    { type: "Root Canal Therapy (Molars)", price: "from £1092.50" },
    { type: "Dentures", price: "from £1012.50" },
    { type: "Six Month Smiles", price: "from £2695 to £3595" },
    { type: "Invisalign (Lite)", price: "£3550.00" },
    { type: "Invisalign (Full)", price: "£4495.00" },
    { type: "EDS Tooth Whitening (at home)", price: "from £450.00" }
  ];
  return (
    <div>
         <BredCrumbServices
        title="Pricing"
        subtitle='Pricing'
      />

<section className="py-16 bg-white px-4 container mx-auto">
      <div className="text-center mb-10">
        <div className=" text-[#1D5C5C] uppercase tracking-wide mb-2">Price List</div>
        <h2  className="text-4xl md:text-5xl  mt-2 mb-4 text-[#1D5C5C] ">
          Dental Treatment Pricing <br className="hidden md:block" /> in Edinburgh
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-[#1D5C5C]  uppercase">
              <th className="p-4 text-2xl"><h3>Appointment Type</h3></th>
              <th className="pr-4 text-2xl text-right border-l border-gray-300 "><h3>Price</h3></th>
            </tr>
          </thead>
          <tbody>
            {pricingList.map((item, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} `}
              >
                <td className="p-4">{item.type}</td>
                <td className="pr-4 text-right border-l border-gray-300">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>

       <br className="hidden md:block" />
          <ContactUs />
      

    </div>
  )
}

export default page