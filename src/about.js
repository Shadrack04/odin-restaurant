
export const renderAbout = () => {
  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="content">
      <div class="page-title">
        <h1>About</h1>
      </div>
      
      <div class="reviews">
        <div class="review">
          <p>shadrack@gmail.com</p>
          <h2>Email</h2>
        </div>

        <div class="review">
          <p>08070000012</p>
          <h2>Phone</h2>
        </div>

        <div class="review">
          <p>149 Yenagoa, Bayelsa</p>
          <h2>Address</h2>
        </div>
      </div>
    </div>
  `;

  return mainContent.innerHTML;

}