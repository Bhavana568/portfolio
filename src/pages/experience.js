import React from "react";

export default function Experience() {
  return (
    <div className=" max-w-6xl mx-auto p-5 py-20" id="experience">
      <div className="text-6xl md:text-7xl text-center md:text-left font-medium text-gray-300 pb-4 mb-16">
        Experience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-4 gap-4 md:order-2">
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  className="max-h-full max-w-full rounded-md"
                  src={
                    exp.img ||
                    "https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png"
                  }
                  alt=""
                ></img>
              </div>
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500">
                  {exp.company}
                </div>
                <div className="md:flex justify-between">
                  <div className="text-xl text-slate-500 ">{exp.position}</div>
                  <div className=" text-slate-400">{exp.date}</div>
                </div>
                <div className=" text-gray-400 font-extralight text-sm">
                  {exp.details}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: "React Js Developer Intern",
    company: "Sorceo Technologies Pvt. Ltd.",
    details:
      "Built a Vendor Management System and Auction Platform.The Platform automated the activities performed between Customers and Vendors. Tackled some real world problems by using advance React JS and Redux concepts. The platform is built to help top MNC's in the world.",
    date: "Aug 21 - Nov 21",
    img: "",
  },
  {
    position: "Graphic Design Intern",
    company: "Tech Tomatoes",
    details:
      "Conceptualizing visuals based on requirements and creating images and layouts using design softwares like Photoshop and Illustrator.",
    date: "Aug 21 - Nov 21",
    img: "https://media-exp1.licdn.com/dms/image/C560BAQGluLp7ffuFsA/company-logo_200_200/0/1603688355276?e=1650499200&v=beta&t=QZxwmyTGM_keGUDHVK5bT6SoUl_Kil3gzSLS6h8wl1U",
  },
  {
    position: "Graphic Design Intern",
    company: "ComplyHappy FinServ Private Limited",
    details:
      "Creted marketing and publicity posters and banners using design softwares like Photoshop and Illustrator.",
    date: "Aug 21 - Nov 21",
    img: "https://cdn-dfeae.nitrocdn.com/AqhDDJVauGlhcjVfMApJiCHqQCgPoIiM/assets/static/optimized/rev-e39daa7/wp-content/uploads/2021/06/IMG_4323-removebg-preview-e1595488282792-1.png",
  },

];
