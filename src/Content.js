import Package from "./Package";
import packagesData from "./Data";

function Content() {
  const packageElements = packagesData.map((airpackage) => {
    return (
      <Package
        img={airpackage.img}
        rating={airpackage.rating}
        reviewCount={airpackage.reviewCount}
        country={airpackage.country}
        title={airpackage.title}
        price={airpackage.price}
      />
    );
  });

  return (
    <section id="content">
      <div className="container">
        <div className="row">{packageElements}</div>
      </div>
    </section>
  );
}

export default Content;
