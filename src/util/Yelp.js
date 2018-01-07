const apiKey = 'DskO7EuH3NEtSoD86M7dYFQ77pvTZsWCNWK7gKWGgjUHv7NOosnUOXhJIJgOe3DVZTrTQBaf9w2G9V7m67vlnp9GxYw9xGewCwPSi-Ru4LiVMmOC_BFW64uZq-9QWnYx';

const Yelp = {
search(term, location, sortBy) {
  return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
    .then(response => {return response.json();})
    .then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
              distance: business.distance
            }));
          }
        });
      }
    };

  export default Yelp;
