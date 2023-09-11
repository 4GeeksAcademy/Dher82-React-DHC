import React from "react";

const Card = () => {
    return (

        <div className="row g-4 m-3 justify-content-center" >
            <div className="col-2">
                <div className="card h-100">
                    <img src="https://picsum.photos/40/33?random=1" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary text-center">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="card h-100">
                    <img src="https://picsum.photos/40/33?random=2" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer..</p>
                        <a href="#" class="btn btn-primary text-center">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="card h-100">
                    <img src="https://picsum.photos/40/33?random=1" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary text-center">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col-2">
                <div className="card h-100">
                    <img src="https://picsum.photos/40/33?random=2" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary text-center">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
