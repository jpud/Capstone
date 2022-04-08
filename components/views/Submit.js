import html from "html-literal";

export default () => html`
  <section id="order">
    <img
      src="https://images.newscientist.com/wp-content/uploads/2018/07/19134120/titan.jpg"
      alt="me"
    />
    <form id="order" action="https://formspree.io/f/xqknykeg" method="POST">
      <h2>Submit your own oddity</h2>
      <div>
        <label for="Type">Type:</label>
        <select id="space" name="Type">
          <option value="">Select a category</option>
          <option value="galaxy">Milky Way</option>
          <option value="universe">Deep Space</option>
          <option value="tools">Invention</option>
        </select>
      </div>
      <div>
        <label for="id">Name:</label>
        <input
          type="text"
          name="id"
          id="id"
          placeholder="Enter Name"
          required
        />
      </div>
      <div>
        <label for="newOdd">Describe it:</label>
        <input
          type="text"
          name="newOdd"
          id="newOdd"
          placeholder="Briefly describe your oddity"
          required
        />
      </div>
      <button type="submit">Submit Oddity</button>
    </form>
  </section>
`;
