import StarRatings from "react-star-ratings";
import { purple } from '../../constants/theme'

const RatingStars = (rating) => {
  const showRating = (rating / 2).toFixed(2);
  return (
    <div style={{marginBottom: '20px'}}>
      {showRating !== 'NaN' && (
        <StarRatings
          rating={parseFloat(showRating)}
          starRatedColor={purple}
          starDimension="30px"
          starSpacing="4px"
        />
      )}
    </div>
  );
};

export default RatingStars;
