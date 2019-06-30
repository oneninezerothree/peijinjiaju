import React from "react";
import 'swiper/dist/css/swiper.css'
// import 'swiper/dist/js/swiper.min.js'
import Swiper from 'swiper';


class Ehhh extends React.Component {

    componentDidMount() {

        new Swiper('.swiper-container', {
            autoplay:true,
            loop: true,
            pagination :{
                el: '.swiper-pagination',
                clickable :true,
              }
        });
    }
    render() {
        return (
            <div style={{height: '173px',background:'rgba(75,75,75,1.0)'}}>
                
                <div className="swiper-container" style={{ boxSizing: 'borderBox', padding:'6px 0 0 0', height: '167px'}}>

                    <div className="swiper-wrapper" style={{  height: '167px'}} >

                        <div className="swiper-slide" style={{textAlign: 'center',background: '#fff',display: 'flex'}}><img style={{width: '414px',height: '100%'}} src="//1262329.s21i.faiusr.com/2/ABUIABACGAAg0daG3gUo-JeGGDDYBDj0AQ!640x640.jpg" alt=""/></div>

                        <div className="swiper-slide" style={{textAlign: 'center',background: '#fff',display: 'flex'}}><img style={{width: '414px',height: '100%'}} src="//1262329.s21i.faiusr.com/2/ABUIABACGAAglMyG3gUosNKsxgIw2AQ49AE!640x640.jpg" alt=""/></div>

                        <div className="swiper-slide" style={{textAlign: 'center',background: '#fff',display: 'flex'}}><img style={{width: '414px',height: '100%'}} src="//1262329.s21i.faiusr.com/2/ABUIABACGAAg3tmG3gUosvbxDTDYBDjrAQ!640x640.jpg" alt=""/></div>

                    </div>

                    <div className="swiper-pagination"></div>

                </div>

            </div>

        )
    }
}



export default Ehhh;