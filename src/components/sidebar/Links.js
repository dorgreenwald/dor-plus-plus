const Links = ({ page, setPage }) => {
  return (
    <div>
      <div onClick={() => setPage('home')} style={{fontWeight: page === 'home' ? "bold" : "normal"}}>Home</div>
      <div onClick={() => setPage('options')} style={{fontWeight: page === 'options' ? "bold" : "normal"}}>Options</div>
    </div>
  );
};

export default Links;
