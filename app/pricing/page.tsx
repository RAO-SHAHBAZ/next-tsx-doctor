import BredCrumbServices from '@/components/BreadCrumbServices'
import ContactUs from '@/components/contact-us';

const page = () => {
  const pricingList = [
    { type: "New Patient Exam (inc. x-rays)", price: "£130.00" },
    { type: "General Health Checkup", price: "£55.00" },
    { type: "Hygiene Appointment", price: "from £65.50" },
    { type: "GBR-guided biofilm therapy", price: "£140.00" },
    { type: "On the day, emergency ", price: "£99" },
    { type: "White Fillings", price: "from £99.00" },
    { type: "Composite Bonding", price: "from £100 per tooth" },
    { type: "Veneers", price: "from £750" },
    { type: "Crowns/Inlays and Onlays Work", price: "from £595.00" },
    { type: "Crown Recement", price: "£63" },
    { type: "Porcelain Bridge", price: "(per unit) from £494" },
    { type: "Extraction ", price: "from £110" },
    { type: "Surgical Extraction", price: "From £250" },
    { type: "Root Canal Therapy", price: "from £295" },
    { type: "Dentures ", price: "from £450" },
    { type: "Invisalign (Lite)", price: "£3500" },
    { type: "Invisalign (Full)", price: "£4000" },
    { type: "Boutique Tooth Whitening (At home)", price: "£350.00" },
    { type: "Night Guards", price: "from £110" },
    { type: "Temporary Fillings", price: "from £50" }
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