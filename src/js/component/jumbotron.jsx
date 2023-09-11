import React from "react";

const Jumbotron = () => {
  return (
    // <div className="container"></div>
    <section className="jumbotron text-align-left grey-background">
      <div className="container">
        <h1 className="jumbotron-heading">A Warm Welcome</h1>
        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
        <p>
          <a href="#" className="btn btn-primary my-2">Call to action</a>
        </p>
      </div>
    </section>
  )

}
export default Jumbotron