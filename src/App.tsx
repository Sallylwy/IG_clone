import SearchBar from './Components/SearchBar'; // Import SearchBar
import Feed from './Components/Feed'; // Import Feed
import './App.css';

const App = () => {
  return (
    <div style={{
      backgroundColor: '#f0f0f0', // Light grey background
      minHeight: '100vh', // Full-page height
      padding: '20px', // Add space around the app
    }}>
      <SearchBar /> {/* Add the SearchBar */}
      <Feed /> {/* Add the Feed */}
    </div>
  );
};

export default App;
