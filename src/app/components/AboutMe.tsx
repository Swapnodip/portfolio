export default function AboutMe() {
  return (
    <div>
      <div className="flex flex-row gap-20">
        <div className="text-xl">
          <h4 className="font-bold text-2xl bg-gradient-to-br from-sky-500 to-emerald-500 bg-clip-text text-transparent">
            Education:
          </h4>
          <b>Manipal Institute of Technology, Manipal</b>
          <br />
          BTech in Computer Science and Engineering
          <br />
          Graduated in 2023
          <br />
          <br />
          <h4 className="font-bold text-2xl bg-gradient-to-br from-sky-500 to-emerald-500 bg-clip-text text-transparent">
            Experience:
          </h4>
          <b>Internship at Redpositive</b>
          <br />
          4 month internship in 2023
          <br />
          Building a blog website using NextJS and GraphQL
          <br />
          <br />
          <b>Associate Technical Consultant at Adobe</b>
          <br />
          2023 - present
          <br />
          Building websites using Adobe Experience Manager
        </div>
        <div>
          <div className="p-1 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-2xl">
            <div className="p-5 bg-[#000E22] rounded-xl text-lg">
              <h3 className="text-3xl mb-5 font-bold bg-gradient-to-br from-sky-500 to-emerald-500 bg-clip-text text-transparent">
                Skills:
              </h3>
              <ul className="flex flex-col gap-5">
                <li>
                  <b>Web dev:</b> HTML, CSS, Tailwind CSS
                </li>
                <li>
                  <b>Web scripting:</b> JavaScript, TypeScript
                </li>
                <li>
                  <b>Front end:</b> ReactJS, NextJS
                </li>
                <li>
                  <b>Back end:</b> NodeJS, REST APIs
                </li>
                <li>
                  <b>Database:</b> MongoDB, GraphQL, SQL
                </li>
                <li>
                  <b>Other languages:</b> C, C++, Java, Python
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
