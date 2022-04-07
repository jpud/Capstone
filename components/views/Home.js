import html from "html-literal";

export default st => html`
  <section id="homeSpace">
    <h1>Space Oddities</h1>
    <h4>
      Welcome to Space Oddities, a collection of the most bizarre and unknown
      formations in the known universe. Get started by clicking the link below,
      or clicking 'Oddities' in the navigation bar above.
    </h4>
    <a href="/Oddities" onClick="" )>Explore Oddities</a>
<div>
    <h2>ISS Info:</h2>
    <h3>
      Latitude: ${st.satellite.lat}
    </h3>
    <h3>
      Longitude: ${st.satellite.long}
    </h3>
    <h3>
      Velocity (mph): ${st.satellite.velo}
    </h3>
    <h3>
      Visibility: ${st.satellite.vision}
    </h3>
</div>
  </section>
`;
