import React from 'react';

const TravelList = ({ travelPlans }) => {
  return (
    <div className="plans-container">
      {travelPlans.map((onePlan) => (
        <div key={onePlan.id} className="card">
          <img src={onePlan.image} alt={onePlan.destination} />
          <div className="inner card">
            <h4>Destination: {onePlan.destination}</h4>
            <h4>Days: {onePlan.days}</h4>
            <h4>Total Cost: ${onePlan.totalCost}</h4>

            {/* Conditional Rendering for Labels */}
            {onePlan.totalCost <= 350 && <p className="label">Great Deal</p>}
            {onePlan.totalCost >= 1500 && <p className="label">Premium</p>}
            {onePlan.allInclusive && <p className="label">All Inclusive</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TravelList;
