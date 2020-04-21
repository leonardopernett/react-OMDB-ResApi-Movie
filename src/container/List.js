import React, { Fragment, useState, useEffect } from "react";
import Card from "../components/card/Card";

export default function List() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading]= useState(true)
  const API = process.env.REACT_APP_API

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await fetch(`${API}&s=batman`);
    const datos = await res.json();
    setData(datos.Search);
    setLoading(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) {
      return setError("please field valid");
    } else {
      const res = await fetch(`${API}&s=${search}`);
      const datos = await res.json();
      if (!datos.Search) {
        setSearch('')
       return setError("there are not results");
        
      }
      setData(datos.Search);
      setSearch("");
      setError("")
    }
  };

  return (
    <Fragment>
  
        <div className="row">
        <div className="col-md-4 mx-auto ">
          <form onSubmit={handleSubmit}>
            <div className="input-group mt-5">
              <input
                type="text"
                placeholder="search"
                className="form-control "
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
              />
              <button className="btn btn-primary">Enter</button>
            </div>
          </form>
          <p className="text-white">{error ? error : ""}</p>
          { loading  && <h2 className="text-white">Loading...</h2> }
        </div>
      </div>
      <div className="row">
        {data.map((movie, i) => (
          <Card movie={movie} key={i} />
        ))}
      </div>
      
    </Fragment>
  );
}
