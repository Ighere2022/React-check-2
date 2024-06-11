import Player from "../Player";
import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      {Player.map((player) => (
        <div key={player.player_id}>
          <PlayerCard
            {...player} /*  name={player.name}
            age={player.age}
            image={player.image}
            nationality={player.nationality}
            jerseyNumber={player.jerseyNumber}
            team={player.team*/
          />
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
