import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="mb-6 text-center text-black tagline">
      Ikatan Senat Mahasiswa Kedokteran Indonesia Wilayah 3 
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
