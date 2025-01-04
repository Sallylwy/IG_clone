const SearchBar = () => {
    return (
    <div style={{
        position: 'relative',
        width: '90%',
        margin: '10px auto',
      }}>
        <input
          type="text"
          placeholder="Search..."
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            paddingRight: '40px', // Space for the icon
          }}
        />
        <span style={{
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: '18px',
          color: '#aaa',
        }}>
          🔍 {/* Search icon */}
        </span>
      </div>
    );
  };
  
  export default SearchBar;
  