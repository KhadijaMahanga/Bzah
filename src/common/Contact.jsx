import React from 'react';
import { render } from 'react-dom';

export default class Contact extends React.Component {
   render() {
      return (
         <div>
            <section className="post-wrapper-top">
               <div id="googlemaps" className="google-map hidden-xs"></div>
            </section>
            <section className="section1">
              <div className="container clearfix">
                 <div className="content col-lg-12 col-md-12 col-sm-12 clearfix">
                     <div className="col-lg-6 col-md-6 col-sm-6">
                        <h4 className="title">Contact Form</h4>
                        <div id="message"></div>
                        <form id="contact" name="contactform" className="row" method="post">
                           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <input type="text" name="name" id="name" className="form-control" placeholder="Name" />
                                <input type="text" name="email" id="email" className="form-control" placeholder="Email" />
                           </div>
                           <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <input type="text" name="phone" id="phone" className="form-control" placeholder="Phone" />
                                <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" />
                           </div>
                           <div className="clearfix"></div>
                           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <textarea className="form-control" name="comments" id="comments" rows="6" placeholder="Your Message ..."></textarea>
                           </div>
                           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="pull-left">
                                    <label for="verify">3+1=?</label> <input name="verify" type="text" id="verify" value="" className="form-control form-verif" />
                                </div>
                                <div className="pull-right">
                                    <input type="submit" value="SEND" id="submit" className="button small" />
                                </div>
                           </div>
                        </form>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-6">
                        <h4 className="title">Contact Details</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                           <ul className="contact_details">
                             <li><i className="fa fa-envelope-o"></i> info@synab.com</li>
                             <li><i className="fa fa-phone-square"></i> +255 715 565 555</li>
                             <li><i className="fa fa-home"></i> Umoja Road, Dar-es-salaam, Tanzania.</li>
                           </ul>
                        </div>

                        <div className="clearfix"></div>
                        <div className="divider"></div>

                        <h4 className="title">Social Media</h4>
                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="servicebox text-center">
                                <div className="service-icon">
                                    <div className="dm-icon-effect-1" data-effect="slide-bottom">
                                        <a href="#" className=""> <i className="dm-icon fa fa-facebook fa-3x"></i> </a>
                                    </div>
                                    <div className="servicetitle">
                                    <h4>Facebook</h4>
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="servicebox text-center">
                                <div className="service-icon">
                                    <div className="dm-icon-effect-1" data-effect="slide-bottom">
                                        <a href="#" className=""> <i className="dm-icon fa fa-twitter fa-3x"></i> </a>
                                    </div>
                                    <div className="servicetitle">
                                    <h4>Twitter</h4>
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="servicebox text-center">
                                <div className="service-icon">
                                    <div className="dm-icon-effect-1" data-effect="slide-bottom">
                                        <a href="#" className=""> <i className="dm-icon fa fa-google-plus fa-3x"></i> </a>
                                    </div>
                                    <div className="servicetitle">
                                    <h4>Google Plus</h4>
                                    </div>
                                </div>
                           </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-3">
                           <div className="servicebox text-center">
                                <div className="service-icon">
                                    <div className="dm-icon-effect-1" data-effect="slide-bottom">
                                        <a href="#" className=""> <i className="dm-icon fa fa-youtube fa-3x"></i> </a>
                                    </div>
                                    <div className="servicetitle">
                                    <h4>Youtube</h4>
                                    </div>
                                </div>
                           </div>
                        </div>

                    </div>
                </div>
           </section>
           <script src="http://maps.google.com/maps/api/js?sensor=false"></script>
        	<script src="../../public/js/jquery.gmap.js"></script>
        		<script type="text/javascript" dangerouslySetInnerHTML={{__html: `
        			var mapMarkers = [{
        				"address": "Some Fine Address",
        				"html": "<strong>Hello There</strong>",
        				"icon": {
        					image: "images/pin.png",
        					iconsize: [100, 100],
        					iconanchor: [64, 45]
        				}
        			}];
        			var initLatitude = 42.383109;
        			var initLongitude = 5.283558;
        			var mapSettings = {
        				controls: {
        					panControl: true,
        					zoomControl: true,
        					mapTypeControl: true,
        					scaleControl: true,
        					streetViewControl: true,
        					overviewMapControl: true
        				},
        				scrollwheel: false,
        				markers: mapMarkers,
        				latitude: initLatitude,
        				longitude: initLongitude,
        				zoom: 5
        			};
        			var map = $("#googlemaps").gMap(mapSettings);
        			var mapCenterAt = function(options, e) {
        				e.preventDefault();
        				$("#googlemaps").gMap("centerAt", options);
        			}
            `}}>
        		</script>
         </div>
      );
   }
}
