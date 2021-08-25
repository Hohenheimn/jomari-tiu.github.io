import React from 'react'

export default function ProjectCard({firstImage, projName , skills, description}) {
  return (
		<div
			data-aos="fade-up"
			data-aos-easing="ease-in-sine"
			data-aos-delay="300"
		>
			<div className="project-card">
				<img className="bckImg" src={`./images/${ firstImage }`} alt="" />
				<div className="card-info">
					<p>{description}</p>
				</div>
				<div className="card-description">
					<div className="des-con">
						<div className="card-head">
							<h1 className="card-title">{projName}</h1>
							<div className="tools">
								{
									skills.map(jom =>{
										return <div key={jom.length + 1} className="tool">{jom}</div>
									})
								}
							</div>
							<div className="card-btn-con">
								<a className="card-buttons" href="#">Code</a>
								<a className="card-buttons" href="#">Demo</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

  )
}
