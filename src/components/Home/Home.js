import React from 'react'
import './Home.css';
const Home = () => {
	

	return (

<div>
	<section className="section1">
		<div className="container p-5">
			<div className="row px-5">
				<div className="col-md-4">
					<div className="">
						<h1 className="fw-bold">Become The Hero <br/>Of Your Own Story</h1>
						<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
						eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
						<div className="input">
							<input type="text" className="p-2" name="" placeholder="Enter Your Email Id"/>
							<a className="px-4 d-flex justify-content-center align-items-center">Subscribe</a>
						</div>
					</div>
				</div>
				<div className="col-md-8">
					<div className="container d-flex justify-content-center align-items-center">
						<div class="stripes-container">
							<div class="stripe stripe1"></div>
							<div class="stripe stripe0"></div>
							<div class="stripe stripe2"></div>
							<div class="stripe stripe0"></div>
							<div class="stripe stripe3"></div>
							<div class="stripe stripe0"></div>
							<div class="stripe stripe4"></div>
							<div class="stripe stripe0"></div>
							<div class="stripe stripe5"></div>
							<div class="stripe stripe0"></div>
							<div class="stripe stripe6"></div>
						</div>
					</div>
				</div>
			</div>
			<div className="podcast-container py-5">
				<div className="podcasts pt-5">
					<div className="podcasts-list d-flex justify-content-between align-items-center mt-4">
						<li><a href="" className="nav-link text-dark fw-bold"> Podcast Available On</a></li>
						<li><a href="" className="nav-link text-dark"><img src="images/ap.png" alt=""/> Apple Podcasts</a></li>
						<li><a href="" className="nav-link text-dark"><img src="images/gp.png" alt=""/> Google Podcasts</a></li>
						<li><a href="" className="nav-link text-dark"><img src="images/sc.png" alt=""/> SOUNDCLOUD</a></li>
						<li><a href="" className="nav-link text-dark"><img src="images/sp.png" alt=""/> Spotify</a></li>
					</div>
				</div>
			</div>
		</div>
		
	</section>
	<section className="section-episodes">
		<div className="episodes-container container">
			<div className="episodes-header d-flex justify-content-between">
				<div className="episodes-header-element">
					<h2 className="fw-bold">Recent Episodes</h2>
					<p>Apparently we had reached a great height in the <br/> atmosphere, for the sky was a dead black.</p>
				</div>
				<div className="episode-btn-element d-flex justify-content-center align-items-center">
					<a className="episode-btn  nav-link text-light py-2 px-3">See All Episiodes</a>
				</div>
				
			</div>
			<div className="episode-elements">
				<div className="episode-element">
					<div class="card border-0 ">
						<img src="images/img1.png" class="card-img-top rounded-0" alt="..."/>
						<div class="card-body px-0">
							<h5 class="card-title fw-bold">Ep 1: How to build a world-class business brand</h5>
							<p class="card-text">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
							<a href="#" class="px-0 btn listen-btn fw-bold"><i class="fa-solid fa-circle-play fa-1x"></i><span className="text-center"> Listen Now</span></a>
						</div>
					</div>
					<div class="card border-0">
						<img src="images/img2.png" class="card-img-top rounded-0" alt="..."/>
						<div class="card-body px-0">
							<h5 class="card-title fw-bold">Ep 2: Getting the first 100 customers for your business</h5>
							<p class="card-text">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
							<a href="#" class="px-0 btn listen-btn fw-bold"><i class="fa-solid fa-circle-play fa-1x"></i><span className="text-center"> Listen Now</span></a>
						</div>
					</div>
					<div class="card border-0">
						<img src="images/img3.png" class="card-img-top rounded-0" alt="..."/>
						<div class="card-body px-0">
							<h5 class="card-title fw-bold">Ep 3: Should I raise money for my startup, or not?</h5>
							<p class="card-text">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
							<a href="#" class="px-0 btn listen-btn fw-bold"><i class="fa-solid fa-circle-play fa-1x"></i><span className="text-center"> Listen Now</span></a>
						</div>
					</div>
				</div>
			</div>
			<div className="article-elements">
				<div className="article-element">
				<div class="card border-0">
						<div class="card-body article-card-body px-0">
							<div className="article-card-header p-4">
							<h2 className="text-dark fw-bold">Read our <br/> articles & news</h2>
							<a href="" className="nav-link link-btn fw-bold">See More</a>
							</div>
							<div className="article-card-element">
								<div className="angle-div angle-div1"></div>
								<div className="angle-div angle-div0"></div>
								<div className="angle-div angle-div2"></div>
								<div className="angle-div angle-div0"></div>
								<div className="angle-div angle-div3"></div>
							</div>
						</div>
					</div>
					<div class="card border-0">
						<img src="images/img4.png" class="card-img-top rounded-0" alt="..."/>
						<div class="card-body px-0">
							<h5 class="card-title fw-bold">Getting the first 100 customers for your business</h5>
							<p class="card-text">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
							<a href="#" class="px-0 btn listen-btn fw-bold link-btn"><span className="text-center">Read more</span></a>
						</div>
					</div>
					<div class="card border-0">
						<img src="images/img5.png" class="card-img-top rounded-0" alt="..."/>
						<div class="card-body px-0">
							<h5 class="card-title fw-bold">Apparently we had reached a great height in the atmosphere, ...</h5>
							<p class="card-text">Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.</p>
							<a href="#" class="px-0 btn listen-btn fw-bold link-btn"><span className="text-center">Read more</span></a>
						</div>
					</div>
				</div>
			</div>

			
		</div>
	</section>
	
</div>
	

					

		
	)
}

export default Home