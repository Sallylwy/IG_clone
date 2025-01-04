import PhotoCard from './PhotoCard'; // Import the PhotoCard component

const Feed = () => {
  // Define an array of post data
  const posts = [
    { photoUrl: 'https://th.bing.com/th/id/R.4f25a5c437a7cd52817a4f13a484b4a5?rik=kBzmMqJZqz7Gmw&riu=http%3a%2f%2fs1.bwallpapers.com%2fwallpapers%2f2013%2f12%2f26%2fgolden-retriever-puppy_061645.jpg&ehk=4%2f0qrVKTHKXiGYaKzJcaiSJ4WVd8XyoxZbpP%2fCZnCUo%3d&risl=&pid=ImgRaw&r=0', description: 'Dog 1' },
    { photoUrl: 'https://th.bing.com/th/id/OIP.RHNoiqTCjV_PCaMYgi-KuAHaE7?rs=1&pid=ImgDetMain', description: 'Dog 2' },
    { photoUrl: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/8/2021/02/GettyImages-997141470-e1614176377827.jpg', description: 'Dog 3 (my heart has melted' },  
];

  return (
    <div>
      {posts.map((post, index) => ( // Loop through the posts
        <PhotoCard
          key={index} // Add a unique key for React to track items
          photoUrl={post.photoUrl} // Pass the photo URL to the PhotoCard
          description={post.description} // Pass the description to the PhotoCard
        />
      ))}
    </div>
  );
};

export default Feed;
