import React from "react";
import Products from "./Products";
import Header from "./Header";
import Card from "./Card";
import UpcomingProduct from "./UpcomingProduct";
import Company from "./Company";
import upcomingProdsData from "../data/upcomingProdsData";
import companies from "../data/companies";

class App extends React.Component {
  render() {
    return (
      <div className="bg-gray-200 min-h-screen">
        <Header />
        <main className="lg:flex md:container mx-auto pt-8 ">
          <section className="w-full lg:w-4/6 products-all ">
            <Products />
          </section>
          <section className="w-full mx-auto md:w-1/2 lg:mx-0 lg:w-2/6 sidebar">
            <Card
              className="upcoming-products"
              childComponent={UpcomingProduct}
              header="Upcoming Products"
              list={upcomingProdsData}
            />

            <Card
              className="hiring-now"
              childComponent={Company}
              header="Hiring Now"
              list={companies}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
