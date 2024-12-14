import React from "react";

const Characters = ({ characters }) => {
  return (
    <div className="char">
      {characters?.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Status</th>
              <th>Species</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr key={character.id}>
                <td>
                  <img src={character.image} alt={character.name} width="50" />
                </td>
                <td>{character.name}</td>
                <td>{character.status}</td>
                <td>{character.species}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>no characters found..</p>
      )}
    </div>
  );
};

export default Characters;
