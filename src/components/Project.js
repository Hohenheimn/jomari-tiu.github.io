import React from 'react'
import './project.css'
import ProjectCard from './ProjectCard'
export default function Project() {

  const images = ([
    // {
    //   id:1,
    //   name:'Initiative Website',
    //   imageName: 'initiativeWebiste.png',
    //   skill:['Tailwind CSS', 'Javascript' ,'Fullpage JS','AOS Animation','HTML'],
    //   description:'A responsive website and own design with One page given task by Magis Solution'
    // },
    {
      id:2,
      name:'Girl Scout of the Philippines',
      imageName: 'girl-Scout.png',
      skill:['Tailwind CSS', 'Javascript' ,'Swiper JS','AOS Animation','HTML'],
      description:'A re-create website using Tailwind CSS with 8 pages given task by Magis Solution'
    },
    {
      id:3,
      name:'Nolan & Co',
      imageName: 'nolan-&-co.png',
      skill:['Tailwind CSS', 'Javascript','AOS Animation','HTML'],
      description:'A re-create website using Tailwind CSS with 6 pages given task by Magis Solution'
    },
    {
      id:4,
      name:'KAISAHAN',
      imageName: 'kaisahan.png',
      skill:['Tailwind CSS', 'Javascript','HTML'],
      description:'A re-create website using Tailwind CSS with 1 pages given task by Magis Solution'
    }
  ])

	return (
    <div className="pro">
       <div className="custom-shape-divider-top-1629856756">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
      <div className="project" id="project">
        <div className="title-con">
          <h1 className="project-title" data-aos="fade-up">Here are my recent works</h1>
          <button className="more" data-aos="fade-left">More</button>
        </div>
        <div className="project-con">
          {
            images.map((imge) =>{
              return <ProjectCard key={imge.id} projName={imge.name} firstImage={imge.imageName} skills={imge.skill} description={imge.description}/>
            })
          }
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1629857299">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
        </svg>
      </div>
    </div>


	)
}
