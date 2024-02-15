import "./Featured.css"

const Featured = () => {
    return (
        <div className="featured-item py-8 md:py-28 bg-fixed bg-cover ">
            <div className=" bg-slate-300 mx-4 py-6 md:py-16  md;mx-8 lg:mx-32 md:px-48 px-4 rounded-lg opacity-80">
                <h4 className="md:text-3xl text-center uppercase font-medium">Bistro Boss</h4>
                <p className="text-lg md:text-xl md:text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default Featured;