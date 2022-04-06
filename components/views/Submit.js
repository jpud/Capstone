import html from "html-literal";

export default () => html`
  <section id="order">
    <form id="order" method="POST" action="">
      <h2>Submit your own oddity</h2>
      <div>
        <label for="Type">Type:</label>
        <select id="crust" name="Type">
          <option value="">Select a category</option>
          <option value="thin">Milky Way</option>
          <option value="chicago">Deep Space</option>
          <option value="deep-dish">Invention</option>
        </select>
      </div>
      <div>
        <label for="cheese">Name:</label>
        <input
          type="text"
          name="cheese"
          id="cheese"
          placeholder="Enter Name"
          required
        />
      </div>
      <div>
        <label for="sauce">Describe it:</label>
        <input
          type="text"
          name="sauce"
          id="sauce"
          placeholder="Briefly describe your oddity"
          required
        />
      </div>
      <input type="hidden" name="customer" id="customer" value="Matt T" />
      <input type="submit" name="submit" value="Submit Oddity" />
    </form>
  </section>
`;
