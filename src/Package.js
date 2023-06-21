function Package(props) {
  console.log(props);
  return (
    <div className="col-sm-3">
      <div className="card">
        <img src={`./images/${props.img}`} className="card--image" />
        <div className="card--stats py-2">
          <img src="./images/Star 1.png" className="card--star me-1" />
          <span>{props.rating}</span>
          <span className="gray me-1">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p className="mb-1">{props.title}</p>
        <p>
          <span className="bold">From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
}

export default Package;
