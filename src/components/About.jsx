import React from "react";
import Heading from "./Heading";
import Section from "./Section";
import Test from "../assets/Test.jpg";

const About = () => {
  return (
    <Section id="about">
      <div className="container ">
        <Heading
          title="About RMO24."
          text="Push Your Limit, Keep Studied for Community Medicine Orientied"
          className="flex-col items-center justify-center mb-6 text-center text-n-2"
        />

        <div className="max-w-[23rem] mx-auto md:max-w-5xl xl:mb-0">
          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
            <img src={Test} className="rounded-lg shadow-2xl w-[500px]" />
            <div className="py-4 md:mx-6 lg:text-justify">
              <h1 className="text-5xl font-bold text-n-2">Regional</h1>
              <h1 className="text-3xl font-bold text-n-2">Medical Olympiad</h1>
              <p className="py-6 text-sm text-n-2">
                Regional Medical Olympiad atau RMO adalah salah satu ajang
                olimpiade bertaraf nasional. Regional Medical Olympiad (RMO)
                merupakan suatu program kerja yang dimiliki oleh Ikatan Senat
                Mahasiswa Kedokteran Indonesia Wilayah 3 berupa kegiatan dalam
                bentuk olimpiade yang tahun ini diselenggarakan atas kerja sama
                antara ISMKI Wilayah 3 dengan bidang Pendidikan dan Profesi dari
                setiap Institusi di Wilayah 3. Regional Medical Olympiad (RMO)
                tahun ini diadakan secara hybrid.
              </p>
              <p className="text-sm text-n-2">
                Regional Medical Olympiad (RMO) bertujuan untuk mewujudkan calon
                dokter yang unggul demi tercapainya tujuan Indonesia sehat,
                pengembangan ilmu dan keterampilan mahasiswa kedokteran yang
                unggul, menjalin kekerabatan antar mahasiswa kedokteran
                Indonesia di Wilayah 3, meningkatkan wawasan, pengetahuan serta
                jiwa kompetitif mahasiswa kedokteran Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
