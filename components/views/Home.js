import html from "html-literal";

export default st => html`
  <section id="homeSpace">
    <h1>Space Oddities</h1>
    <h4>
      Welcome to Space Oddities, a collection of the most bizarre and unknown
      formations in the known universe. Get started by clicking the link below,
      or clicking 'Oddities' in the navigation bar above.
    </h4>
    <a href="" onClick="alert('Hello! You clicked the Button!')"
      >Explore Oddities</a
    >
  </section>
  <h2>
    Weather in ${st.weather.city} ${kelvinToFahrenheit(st.weather.temp)}F, feels
    like ${kelvinToFahrenheit(st.weather.feelsLike)}F
  </h2>
`;
const kelvinToFahrenheit = kelvinTemp =>
  Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);
