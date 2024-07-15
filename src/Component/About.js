import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor:'white',
    // })

    let myStyle={
        color: props.mode==='dark'?'white':'#2d0c63',
        backgroundColor: props.mode==='dark'?'#2d0c63':'white',
        border: '1px solid',
        borderColor: props.mode==='dark'?'white':'#2d0c63'
    }

return (
            <div className='container' style={{color: props.mode==='dark'?'white':'#2d0c63' }}>
                <h1 className='my-3'>About Us!</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong> About TxtUtilZ</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <p>Welcome to TxtUtilZ, your one-stop solution for all your text manipulation needs! TxtUtilZ is a versatile and user-friendly web application built using React, designed to help you effortlessly transform your text with just a few clicks.</p>
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>What We Offer!</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <p>At TxtUtilZ, we provide a range of text transformation options to make your text editing tasks quick and easy:
            <ul>
            <li>Convert to Uppercase: Instantly change all the letters in your text to uppercase.</li>
            <li>Convert to Lowercase: Quickly switch all the letters in your text to lowercase.</li>
            <li>Capitalize Words: Effortlessly capitalize the first letter of every word in your text.</li>
            </ul>
            </p>
            </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Why Choose TxtUtilZ?</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <p>TxtUtilZ was created with simplicity and efficiency in mind. We understand that text manipulation can sometimes be a tedious task, and our goal is to make it as straightforward and hassle-free as possible. Whether you're preparing a document, editing content, or just having fun with text, TxtUtilZ is here to assist you.
                <ul>
                    <li><strong>Easy to Use</strong><ul><li>Our intuitive interface ensures that you can transform your text in seconds. Simply enter your text into the input box, choose the desired transformation, and see the magic happen!</li></ul> </li>
                    <li><strong>Built with ReactJS</strong><ul><li>TxtUtilZ is built using ReactJS, a powerful JavaScript library for building user interfaces. This ensures a smooth, responsive, and enjoyable user experience</li></ul> </li>
                    <li><strong>Get in Touch</strong><ul><li>We value your feedback and suggestions. If you have any questions, comments, or ideas for new features, please feel free to reach out to us. We're always looking to improve and expand the capabilities of TxtUtilZ to better serve your needs.</li></ul></li>
                </ul>
            </p>
            </div>
            </div>
            </div>
            </div>
            
                </div>
)
}
