export function Navigation() {
  return (
    <nav className="ab-nav">
      <div className="ab-nav-logo">
        A<span>b</span>alloon
      </div>
      <ul className="ab-nav-links">
        <li>
          <a href="#products">Collection</a>
        </li>
        <li>
          <a href="#services">Occasions</a>
        </li>
        <li>
          <a href="#">Custom Order</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <button className="ab-nav-cta">Order Now</button>
    </nav>
  );
}
