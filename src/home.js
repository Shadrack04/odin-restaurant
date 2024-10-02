
export const renderHome = () => {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="content">
      <div class="page-title">
        <h1>Shadrack's Breakfast Bar</h1>
      </div>
      
      <div class="reviews">
        <div class="review">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quidem adipisci, accusamus, cumque et eaque aliquid animi nostrum autem neque omnis unde laborum repellendus nemo doloribus at tempora officia fugit!</p>
          <h2>Shadrack</h2>
        </div>

        <div class="review">
          <p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
          <h2>James</h2>
        </div>

        <div class="review">
          <p>Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
          <h2>John doe</h2>
        </div>
      </div>
    </div>
  `;

  return mainContent.innerHTML;

}