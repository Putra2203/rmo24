import Section from "./Section";
import Heading from "./Heading";

const Timeline = () => {
  return (
    <Section
      className="pt-[5rem] lg:pt-[10rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="timeline"
    >
      <Heading
        className="text-center text-black md:max-w-md lg:max-w-2xl"
        title="Timeline Kegiatan"
      />
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-[62rem] mx-auto p-5 pt-1 lg:p-0 text-black">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-start md:text-end">
            <time className="font-mono italic">16 September 2024</time>
            <div className="text-lg text-black">Technical Meeting I</div>
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3"/>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-end">
            <time className="font-mono italic">24 - 25 September 2024</time>
            <div className="text-lg font-black">Tahap penyisihan (Online)</div>
            Tahap penyisihan akan dilaksanakan pada 24 - 25 Oktober 2024. Semua peserta harus melalui tahap penyisihan. Untuk setiap cabang perlombaan, setiap universitas diperbolehkan mengirimkan maksimal 2 tim yang terdiri dari dua orang. Setiap universitas diwajibkan untuk mengirimkan perwakilannya dalam perlombaan ini. Tahap penyisihan terdiri dari 1 babak, yaitu Multiple Choice Question (MCQ). 
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-end">
            <time className="font-mono italic">24 September 2024</time>
            <div className="text-lg font-black">Opening Ceremony</div>
            Acara Opening Ceremony dilaksanakan yakni tanggal 24 September 2024 dilaksanakan secara online melalui Zoom Meeting. Acara ini merupakan rangkaian acara RMO untuk menyambut delegasi dari 19 institusi di Wilayah 3 meliputi Semarang, Purwokerto, Solo, Yogyakarta, dan Kalimantan.
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-start md:text-end">
            <time className="font-mono italic">30 September 2024</time>
            <div className="text-lg font-black">Technical Meeting II</div>
            
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-end">
            <time className="font-mono italic">3 Oktober 2024</time>
            <div className="text-lg font-black">Welcoming Ceremony</div>
            Acara Welcoming Ceremony dilaksanakan yakni tanggal 3 Oktober 2024 dilaksanakan secara offline. Acara ini merupakan rangkaian acara RMO untuk menyambut delegasi yang lolos ke babak semifinal dari 19 institusi di Wilayah 3 meliputi Semarang, Purwokerto, Solo, Yogyakarta, dan Kalimantan 
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3"/>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-start md:text-end">
            <time className="font-mono italic">4 Oktober 2024</time>
            <div className="text-lg font-black">Tahap Semifinal</div>
            Tahap semifinal akan dilaksanakan pada 4 Oktober 2024. Pada tahap ini, akan diambil 6 tim dengan nilai tertinggi dari masing-masing bidang lomba. Pada tahap semifinal, akan dilaksanakan dua babak lomba, yaitu sebagai berikut:
            <br />
            1)	 Objective Structured Practical Examination (OSPE)
            <br />
            2)   Students Oral Case Analysis (SOCA)

          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-end">
            <time className="font-mono italic">5 Oktober 2024</time>
            <div className="text-lg font-black">Tahap Final</div>
            Tahap final akan dilaksanakan yakni 5 Oktober 2024. Pada tahap final, terdapat 3 tim akhir dengan nilai tertinggi dari babak Semifinal.  Tahap final akan dilaksanakan dalam dua babak yaitu: 
            <br />
            1) Lomba Cepat Tepat (LCT) 
            <br />
            2) Objective Structured Clinical Examination (OSCE)
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3"/>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-10 timeline-end">
            <time className="font-mono italic">5 Oktober 2024</time>
            <div className="text-lg font-black">Seminar</div>
            Acara seminar akan dilaksanakan yakni tanggal 5 Oktober 2024. Acara seminar merupakan rangkaian acara RMO yang bertujuan untuk meningkatkan pengetahuan dari peserta.
          </div>
          <hr className="bg-n-3" />
        </li>
        <li>
          <hr className="bg-n-3" />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="mb-5 timeline-end lg:mb-24">
            <time className="font-mono italic">5 Oktober 2024</time>
            <div className="text-lg font-black">Closing Ceremony</div>
            Closing Ceremony akan dilaksanakan yakni pada tanggal 5 Oktober 2024. Acara ini merupakan penutupan acara Regional Medical Olympiad (RMO) 2024 yang diselenggarakan offline terdapat adanya penampilan dari guest star, penampilan video aftermovie dan tentunya terdapat serangkaian acara seperti penyerahan hadiah kepada pemenang RMO 2024 juga akan dilaksanakan pada acara ini.
          </div>
        </li>
       
      </ul>
    </Section>
  );
};

export default Timeline;
