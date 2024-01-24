import { Parallax } from 'react-parallax';


const Cover = ({img, title, subtitle,}) => {
    return (

        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       
        <div className="hero h-[700px] " >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" bg-black opacity-60 text-white py-16 mx-32 px-56 rounded-lg ">
                        <h4 className="text-5xl text-center uppercase font-medium mb-3">{title}</h4>
                        <p className="text-xl text-justify">{subtitle}</p>
                    </div>
                </div>
            </div>
    </Parallax>
     
    );
};

export default Cover;