import "../Styles/ProductDetails.css";
export const ProductDetails = () => {
  const data = {
    id: 1,
    image_url: "https://source.unsplash.com/random/300Xx1200/?Travel",
    destination_title: "Narkanda",
    location: "Sri Lanka",
    grade: "4 stars",
    fees: "$1113",
    description:
      "Narkanda is a tiny town in Shimla in the Indian hill state of Himachal Pradesh. Seated on the Hindustan-Tibet Road, Narkanda is encircled by the green cover of the Himalayas and hence, renowned for its apple orchards, treks and scenic beauty.",
  };
  const dataDetails = {
    id: 1,
  };
  return (
    <div className="main">
      <div className="mainImage">
        <img src={data.image_url} alt="" />
      </div>
      <div className="mainDesc">
        <h1>{data.destination_title}</h1>

        <h3>DESCRIPTION</h3>
        <hr />
        <p>{data.description}</p>

        <h3>THINGS TO DO IN {data.destination_title}</h3>
        <hr />
        <div className="thingstodo">
          <div>
            <h3>Skiing in Narkanda</h3>
            <p>
              Narkanda is renowned for its winter sports activities, especially
              skiing that is conducted under the supervision of qualified
              instructors, by HPTDC every year.
            </p>
          </div>
          <div>
            <h3>Banjara Orchard Retreat</h3>
            <p>
              Banjara Orchard Resort is set in the apple orchards overlooking
              the deep valleys. Offering eight suites, the property also
              features dining and sitting space.
            </p>
          </div>
          <div>
            <h3>Narkanda Kudrat Camp</h3>
            <p>
              Narkanda Kudrat Camp offers an opulent stay amidst the greens of
              the Himalayas in camps and bamboo cottages. With a host of
              activities, it is a great way to get close with nature.
            </p>
          </div>
        </div>
        <h2>{data.fees}</h2>
        <button>Book my trip</button>
      </div>
    </div>
  );
};
