import React from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
    render(){
        return(
         <div className="container">
             <div className="topbar clearfix">
               <div className="container">
                  <div className="col-lg-12 text-right">
                      <div className="social_buttons">
                          <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><i className="fa fa-facebook"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><i className="fa fa-twitter"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="bottom" title="Google+"><i className="fa fa-google-plus"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="bottom" title="Dribbble"><i className="fa fa-dribbble"></i></a>
                          <a href="#" data-toggle="tooltip" data-placement="bottom" title="RSS"><i className="fa fa-rss"></i></a>
                      </div>
                  </div>
               </div>
             </div>
             <header className="header">
                <div className="container">
                   <div className="site-header clearfix">
                        <div className="col-lg-3 col-md-3 col-sm-12 title-area">
                             <div className="site-title" id="title">
                                 <a href="/" title="">
                                     <h4>SYNAB<span>ANALYTICS</span></h4>
                                 </a>
                             </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12">
                           <div id="nav" className="right">
                                 <div className="container clearfix">
                                 <ul id="jetmenu" className="jetmenu blue">
                                     <li className="active"><a href="/">Latest</a></li>
                                     <li className="active"><a href="#">Why Synab </a></li>
                                     <li className="active"><a href="#">What We Do</a></li>
                                     <li className="active"><Link to="/about">About Us</Link></li>
                                     <li className="active"><Link to="#">Our Team</Link></li>
                                     <li className="active"><Link to="/blog">Blog</Link></li>
                                     <li className="active"><a href="#">Join Us</a></li>
                                 </ul>
                                 </div>
                             </div>
                        </div>
                     </div>
                </div>
             </header>
               {this.props.children}
               <footer className="footer">
                  <div className="container">
                     <div className="widget col-lg-4 col-md-4 col-sm-12">
                        <h4 className="title">About us</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s..</p>
                        <a className="button small" href="#">read more</a>
                      </div>
                      <div className="widget col-lg-4 col-md-4 col-sm-12">
                      <h4 className="title">Recent Posts</h4>
                      <ul className="recent_posts">
                        <li>
                           <a href="home1.html#"><img src="demos/recent_post_01.png" alt="" />Our New Dashboard Is Here</a>
                           <a className="readmore" href="#">read more</a>
                        </li>
                        <li>
                           <a href="home1.html#"><img src="demos/recent_post_02.png" alt="" />Design Is In The Air</a>
                           <a className="readmore" href="#">read more</a>
                        </li>
                      </ul>
                      </div>
                      <div className="widget col-lg-4 col-md-4 col-sm-12">
                      <h4 className="title">Get In Touch</h4>
                          <ul className="contact_details">
                           <li><i className="fa fa-envelope-o"></i> info@synab.com</li>
                           <li><i className="fa fa-phone-square"></i> +255 715 565 555</li>
                           <li><i className="fa fa-home"></i> Umoja Road, Dar-es-salaam, Tanzania.</li>
                           <li><a href="#"><i className="fa fa-map-marker"></i> View large map</a></li>
                          </ul>
                      </div>
                  </div>

                  <div className="copyrights">
                      <div className="container">
                          <div className="col-lg-6 col-md-6 col-sm-12 columns">
                              <p>Copyright © 2017 - All rights reserved.</p>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 columns text-right">
                              <div className="footer-menu right">
                                  <ul className="menu">
                                      <li><a href="/">Home</a></li>
                                      <li><a href="/about">About</a></li>
                                      <li><a href="#">Sitemap</a></li>
                                      <li><a href="#">Site Terms</a></li>
                                      <li><Link to="/contact">Contact</Link></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
             </footer>
         </div>
        );
    }
}
