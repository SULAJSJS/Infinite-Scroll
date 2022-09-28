import React, { useState } from 'react';
import './scss/players.scss';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayers } from '../store/slices/playersSlice';
import InfiniteScroll from 'react-infinite-scroll-component';

const Players = () => {
  const data = useSelector((state) => state.players.data);
  let [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(6);
  const dispatch = useDispatch();
  console.log(data);
  React.useEffect(() => {
    dispatch(fetchPlayers(offset, limit));
  }, [offset, limit]);

  return (
    <div className="players">
      <InfiniteScroll className='scroll' dataLength={data?.length} next={() => setOffset(offset + 10)} hasMore={true}>
        {data?.map((pl, i) => (
          <div className="players-items" key={i}>
            <div className="number">
              <f>{i + 1}</f>
            </div>
            <img src={pl.photo} alt="" />
            <p className="player-name">{pl.first_name}</p>
            <p className="player-age">{pl.age}</p>
            <div className="rating">
              <div className="stars">
                <AiOutlineStar className="star" />
                <AiOutlineStar className="star" />
                <AiOutlineStar className="star" />
                <AiOutlineStar className="star" />
                <AiOutlineStar className="star" />
              </div>
              <g>{pl.star}</g>
            </div>
            <p className="status-transfer">{pl.transfer_status}</p>
            <p className="current-club">{pl?.team?.team_name}</p>
            <p className="price">{pl.cost} сом</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Players;
