import { useState } from 'react';

interface PhotoCardProps {
  photoUrl: string;
  description: string;
}

const PhotoCard = ({ photoUrl, description }: PhotoCardProps) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<string[]>([]); // Track comments
  const [newComment, setNewComment] = useState(''); // Track input for new comment

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '40px',
      margin: '10px auto',
      width: '90%',
      backgroundColor: '#fff',
    }}>
      <img src={photoUrl} alt="Post" style={{ width: '100%', borderRadius: '10px' }} />
      
      {/* Description and Like Button in a Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between', // Push items to opposite sides
        alignItems: 'center', // Align vertically
        marginTop: '10px',
      }}>
        <p style={{ margin: 0 }}>{description}</p>
        <button
          onClick={() => setLikes(likes +1)}
          style={{
            padding: '5px 10px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          👍 Like {likes}
        </button>
      </div>

      {/* Comments Section */}
      <div>
        <h4 className="small-heading">Comments</h4>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          style={{ width: '90%', marginRight: '5px', padding: '5px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
        <button onClick={handleAddComment} 
    style={{
        marginRight: 0,
        padding: '5px',
        borderRadius: '5px',
        borderColor: '#ccc', // Correct property name and value
        border: '1px solid #ccc', // Complete border definition
  }}
  >
              Add
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
