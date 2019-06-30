import React from 'react';


export default class Heads extends React.Component {

    state = {

    }
    render() {
        return (
            <div style={
                {
                    width: '100%',
                    height: '2.5rem',
                    lineHeight: '2.5rem',
                    background: '#272727',
                    paddingBottom: '2px',
                  

                }
            }>
                <div style={
                    {
                        color: '#fff',
                        fontSize: '2.7rem',
                        float: 'left'
                    }
                }>
                    <i className='faisco-icons-menu9'>

                    </i>
                </div>
                <div style={
                    {
                        cursor: 'pointer',
                        width: '64px',
                        height: '64px',
                        backgroundImage: 'url(http://1262329.s21i.faiusr.com/2/ABUIABACGAAgxo2G4QUo5fuiggIwwgM4wgM.jpg)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        float: 'left'

                    }
                }
                ></div>
                <div style={
                    { float: 'left' }
                }>
                    <h2 style={
                        {
                            color: '#fff',
                            fontWeight: 'normal',
                            padding: '0 0 0 .25rem'
                        }

                    }>
                        1500平方办公家具展厅
                    </h2>
                </div>
            </div >
        )
    }
}